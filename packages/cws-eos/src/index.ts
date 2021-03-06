import { coin as COIN, transport, error } from '@coolwallet/core';
import signTransfer from './sign';

type Transport = transport.default;
type Transaction = import('./types').Transaction;

export default class EOS extends COIN.ECDSACoin implements COIN.Coin {
  public chainId: string;

  constructor(
    chainId: undefined | string
  ) {
    super('C2');
    this.chainId = chainId || 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
  }

  /**
   * Get Binance address by index
   */
  async getAddress(
    transport: Transport,
    appPrivateKey: string,
    appId: string,
    addressIndex: number): Promise<string> {
    // TODO
    throw new error.SDKError(this.getAddress.name, 'eos get address error, need implement eos get address');
  }

  /**
   * Sign EOS Transaction.
   * @return signature
   */
  async signTransaction(
    transport: Transport,
    appPrivateKey: string,
    appId: string,
    transaction: Transaction,
    addressIndex: number,
    publicKey: string | undefined = undefined,
    confirmCB: Function | undefined = undefined,
    authorizedCB: Function | undefined = undefined
  ): Promise<string> {
    const publicKeyToUse = publicKey === undefined
      ? await this.getPublicKey(transport, appId, appPrivateKey, addressIndex) : publicKey;

    return signTransfer(
      transport,
      appId,
      appPrivateKey,
      this.coinType,
      transaction,
      addressIndex,
      this.chainId,
      publicKeyToUse,
      confirmCB,
      authorizedCB
    );
  }
}

