import React from 'react';
import { ISendState, ITxFields } from '../types';
import { SignTransactionPrivateKey } from './SignTransactionWallets';
import { DeepPartial } from 'shared/types/util';

interface Props {
  stateValues: ISendState;
  transactionFields: ITxFields;
  onNext(): void;
  onSubmit(transactionFields: ITxFields): void;
  updateState(state: DeepPartial<ISendState>): void;
}

export default function SignTransaction({ transactionFields }: Props) {
  const whichWallet = transactionFields.accountType;

  switch (whichWallet) {
    case 'privateKey':
      return (
        <div>
          <SignTransactionPrivateKey />
        </div>
      );
    default:
      return null;
    // case 'Mnemonic':
    //   return <div>Mnemonic</div>;
  }
}
