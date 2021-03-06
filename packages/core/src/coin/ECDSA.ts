import * as derivation from './derive';
import Transport from "../transport";
import * as utils from "../utils/index";
const elliptic = require('elliptic');

export default class ECDSACoin {
  coinType: string;
  accPublicKey: string;
  accChainCode: string;
  publicKeys: any;
  ec: any;
  constructor(coinType: string, curvePara?: string) {
    this.coinType = coinType;
    this.accPublicKey = '';
    this.accChainCode = '';
    this.publicKeys = {};
    if (!curvePara) {
      this.ec = new elliptic.ec("secp256k1");
    } else {
      this.ec = new elliptic.ec(curvePara);
    }

    this.getPublicKey = this.getPublicKey.bind(this);
  }

  /**
   * For ECDSA based coins
   * @param {Number} addressIndex address index in BIP44 pointing to the target public key.
   * @returns {Promise < string >}
   */
  async getPublicKey(transport: Transport, appPrivateKey: string, appId: string, addressIndex: number): Promise<string> {
    if (this.accPublicKey === '' || this.accChainCode === '') {
      await this.getAccountPubKeyAndChainCode(transport, appPrivateKey, appId)
    }
    if (!this.publicKeys[addressIndex]) {
      const node = derivation.derivePubKey(this.accPublicKey, this.accChainCode, 0, addressIndex);
      this.publicKeys[addressIndex] = node.publicKey;
    }
    return this.publicKeys[addressIndex];
  }

  async getAccountPubKeyAndChainCode(transport: Transport, appPrivateKey: string, appId: string) {
    if (this.accPublicKey === '' || this.accChainCode === '') {
      const { accountPublicKey, accountChainCode } = await derivation.getAccountExtKey(
        transport,
        appId,
        appPrivateKey,
        await utils.getPath(this.coinType, 0, 3)
      );
      this.accPublicKey = accountPublicKey;
      this.accChainCode = accountChainCode;
    }
    return { accountPublicKey: this.accPublicKey, accountChainCode: this.accChainCode }
  }

  async getAddressPublicKey(accPublicKey: string, accChainCode: string, addressIndex: number, ){
    const node = derivation.derivePubKey(accPublicKey, accChainCode, 0, addressIndex);
    return node.publicKey;
  }

  


  /**
 * For ECDSA based coins
 * @returns {fullPublicKey: string}
 */
  async getFullPubKey(compressPubKey: string) {
    const keyPair = this.ec.keyFromPublic(compressPubKey, "hex");
    return keyPair.getPublic(false, "hex");
  }
}
