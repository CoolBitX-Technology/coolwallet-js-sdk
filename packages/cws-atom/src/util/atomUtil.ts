
import crypto from 'crypto';
import bech32 from 'bech32';
import * as cryptoUtil from './cryptoUtil'
import * as scripts from "../config/script";
import * as param from "../config/param";
import * as types from "../config/types";


export function publicKeyToAddress(publicKey: string, prefix = "cosmos") {
  const publicKeyBuf = Buffer.from(publicKey, 'hex')
  const sha256Hash = cryptoUtil.sha256(publicKeyBuf);
  const ripemd160hash = cryptoUtil.ripemd160(sha256Hash)
  const words = bech32.toWords(ripemd160hash);
  return bech32.encode(prefix, words);
}

export function getCosmosSendArgement(cosmosData: types.Cosmos, addressIndex: number) {

  const from = Buffer.from(cosmosData.fromAddress, 'ascii').toString('hex').padStart(128, '0');
  const to = Buffer.from(cosmosData.toAddress, 'ascii').toString('hex').padStart(128, '0');
  const amount = cosmosData.amount.toString(16).padStart(16, '0');
  const feeAmount = cosmosData.feeAmount.toString(16).padStart(16, '0');
  const gas = cosmosData.gas.toString(16).padStart(16, '0');
  const accountNumber = parseInt(cosmosData.accountNumber).toString(16).padStart(16, '0');
  const sequence = parseInt(cosmosData.sequence).toString(16).padStart(16, '0');
  const memo = Buffer.from(cosmosData.memo, 'ascii').toString('hex');

  const argument = from + to + amount + feeAmount + gas + accountNumber + sequence + memo;

  console.log("getCosmosSendArgement: " + argument)
  
  return addPath(argument, addressIndex);
}

export function getCosmosDedegateArgement(cosmosData: types.Cosmos, addressIndex: number) {

  const from = Buffer.from(cosmosData.fromAddress, 'ascii').toString('hex').padStart(128, '0');
  const to = Buffer.from(cosmosData.toAddress, 'ascii').toString('hex').padStart(128, '0');
  const amount = cosmosData.amount.toString(16).padStart(16, '0');
  const feeAmount = cosmosData.feeAmount.toString(16).padStart(16, '0');
  const gas = cosmosData.gas.toString(16).padStart(16, '0');
  const accountNumber = parseInt(cosmosData.accountNumber).toString(16).padStart(16, '0');
  const sequence = parseInt(cosmosData.sequence).toString(16).padStart(16, '0');
  const memo = Buffer.from(cosmosData.memo, 'ascii').toString('hex');

  const argument = from + to + amount + feeAmount + gas + accountNumber + sequence + memo;

  console.log("getCosmosSendArgement: " + argument)

  return addPath(argument, addressIndex);
}

function addPath(argument: string, addressIndex: number) {
  const addressIdxHex = "00".concat(addressIndex.toString(16).padStart(6, "0"));
  const SEPath = `15328000002C800000${param.coinType}8000000000000000${addressIdxHex}`;
  console.log("SEPath: " + SEPath)
  return SEPath + argument;
}
