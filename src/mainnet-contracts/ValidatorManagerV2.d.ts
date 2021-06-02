/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ValidatorManagerV2Interface extends Interface {
  functions: {
    setLoom: TypedFunctionDescription<{
      encode([_loomAddress, _signersIndexes, _v, _r, _s]: [
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish[],
        Arrayish[]
      ]): string;
    }>;

    setQuorum: TypedFunctionDescription<{
      encode([_num, _denom, _signersIndexes, _v, _r, _s]: [
        BigNumberish,
        BigNumberish,
        BigNumberish[],
        BigNumberish[],
        Arrayish[],
        Arrayish[]
      ]): string;
    }>;

    rotateValidators: TypedFunctionDescription<{
      encode([_newValidators, _newPowers, _signersIndexes, _v, _r, _s]: [
        string[],
        BigNumberish[],
        BigNumberish[],
        BigNumberish[],
        Arrayish[],
        Arrayish[]
      ]): string;
    }>;
  };

  events: {
    ValidatorSetChanged: TypedEventDescription<{
      encodeTopics([_validators, _powers]: [null, null]): string[];
    }>;
  };
}

export class ValidatorManagerV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ValidatorManagerV2;
  attach(addressOrName: string): ValidatorManagerV2;
  deployed(): Promise<ValidatorManagerV2>;

  on(event: EventFilter | string, listener: Listener): ValidatorManagerV2;
  once(event: EventFilter | string, listener: Listener): ValidatorManagerV2;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ValidatorManagerV2;
  removeAllListeners(eventName: EventFilter | string): ValidatorManagerV2;
  removeListener(eventName: any, listener: Listener): ValidatorManagerV2;

  interface: ValidatorManagerV2Interface;

  functions: {
    validators(arg0: BigNumberish): Promise<string>;

    powers(arg0: BigNumberish): Promise<BigNumber>;

    signedByValidator(
      _message: Arrayish,
      _signersIndex: BigNumberish,
      _v: BigNumberish,
      _r: Arrayish,
      _s: Arrayish
    ): Promise<void>;

    checkThreshold(
      _message: Arrayish,
      _signersIndexes: BigNumberish[],
      _v: BigNumberish[],
      _r: Arrayish[],
      _s: Arrayish[]
    ): Promise<void>;

    setLoom(
      _loomAddress: string,
      _signersIndexes: BigNumberish[],
      _v: BigNumberish[],
      _r: Arrayish[],
      _s: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setQuorum(
      _num: BigNumberish,
      _denom: BigNumberish,
      _signersIndexes: BigNumberish[],
      _v: BigNumberish[],
      _r: Arrayish[],
      _s: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    rotateValidators(
      _newValidators: string[],
      _newPowers: BigNumberish[],
      _signersIndexes: BigNumberish[],
      _v: BigNumberish[],
      _r: Arrayish[],
      _s: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    loomAddress(): Promise<string>;
    threshold_denom(): Promise<number>;
    nonce(): Promise<BigNumber>;
    threshold_num(): Promise<number>;
    totalPower(): Promise<BigNumber>;
    getPowers(): Promise<BigNumber[]>;
    getValidators(): Promise<string[]>;
  };

  filters: {
    ValidatorSetChanged(_validators: null, _powers: null): EventFilter;
  };

  estimate: {
    setLoom(
      _loomAddress: string,
      _signersIndexes: BigNumberish[],
      _v: BigNumberish[],
      _r: Arrayish[],
      _s: Arrayish[]
    ): Promise<BigNumber>;

    setQuorum(
      _num: BigNumberish,
      _denom: BigNumberish,
      _signersIndexes: BigNumberish[],
      _v: BigNumberish[],
      _r: Arrayish[],
      _s: Arrayish[]
    ): Promise<BigNumber>;

    rotateValidators(
      _newValidators: string[],
      _newPowers: BigNumberish[],
      _signersIndexes: BigNumberish[],
      _v: BigNumberish[],
      _r: Arrayish[],
      _s: Arrayish[]
    ): Promise<BigNumber>;
  };
}
