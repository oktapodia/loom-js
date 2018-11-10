import test from 'tape'

import {
  Address,
  LocalAddress,
  Client,
  CryptoUtils,
  createDefaultTxMiddleware,
  Contracts
} from '../../index'
import { createTestHttpClient } from '../helpers'
import { Web3Signer } from '../../solidity-helpers'
import { ethers } from 'ethers';

const Web3 = require('web3')

// TODO: Need a factory to create connection properly likes plasma-cash test
function getWeb3Connection() {
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
  return provider.getSigner()
}

async function getClientAndContract(
  createClient: () => Client
): Promise<{
  client: Client
  addressMapper: Contracts.AddressMapper
  pubKey: Uint8Array
}> {
  const privKey = CryptoUtils.generatePrivateKey()
  const pubKey = CryptoUtils.publicKeyFromPrivateKey(privKey)
  const client = createClient()
  client.txMiddleware = createDefaultTxMiddleware(client, privKey)

  const addressMapper = await Contracts.AddressMapper.createAsync(
    client,
    new Address(client.chainId, LocalAddress.fromPublicKey(pubKey))
  )

  return { client, addressMapper, pubKey }
}

async function testAddIdentity(t: test.Test, createClient: () => Client) {
  const { client, addressMapper, pubKey } = await getClientAndContract(createClient)

  const ethAddress = '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1'
  const from = new Address('eth', LocalAddress.fromHexString(ethAddress))
  const to = new Address(client.chainId, LocalAddress.fromPublicKey(pubKey))

  const web3 = getWeb3Connection()
  const web3Signer = new Web3Signer(web3)

  await addressMapper.addIdentityMappingAsync(from, to, web3Signer)

  const result = await addressMapper.getMappingAsync(from)

  t.assert(from.equals(result.from), 'Identity "from" correctly returned')
  t.assert(to.equals(result.to), 'Identity "to" correctly returned')

  client.disconnect()
}

test('Address Mapper', async t => {
  try {
    await testAddIdentity(t, createTestHttpClient)
  } catch (err) {
    t.fail(err)
  }
  t.end()
})
