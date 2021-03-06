import { executeCommand } from './execute/execute';
import { getCommandSignature } from "../setting/auth";
import Transport from '../transport';
import { addressIndexToKeyId } from '../transaction/txUtil'
import { commands, CommandType } from "./execute/command";
import { SDKError, APDUError } from '../error/errorHandle';
import { CODE } from '../config/status/code';
import { target } from '../config/param';


/**
 * Scriptable step 1
 * @todo append signature
 */
export const sendScript = async (transport: Transport, script: string) => {
  const { statusCode, msg } = await executeCommand(
    transport,
    commands.SEND_SCRIPT,
    target.SE,
    script,
    undefined,
    undefined
  );
  if (statusCode === CODE._9000) {
    return true;
  } else {
    throw new APDUError(commands.SEND_SCRIPT, statusCode, msg)
  }
};

/**
 * Scriptable step 2
 */
export const executeScript = async (
  transport: Transport,
  appId: string,
  appPrivKey: string,
  argument: string,
) => {
  const signature = await getCommandSignature(
    transport,
    appId,
    appPrivKey,
    commands.EXECUTE_SCRIPT,
    argument,
    undefined,
    undefined
  );
  const { outputData: encryptedSignature, statusCode, msg } = await executeCommand(
    transport,
    commands.EXECUTE_SCRIPT,
    target.SE,
    argument + signature,
    undefined,
    undefined,
  );
  if (encryptedSignature) {
    return encryptedSignature;
  } else {
    throw new APDUError(commands.EXECUTE_SCRIPT, statusCode, msg)
  }
};

/**
 * Scriptable step 3
 * @param {*} transport
 * @param {*} argument
 */
export const executeUtxoScript = async (
  transport: Transport,
  appId: string,
  appPrivKey: string,
  utxoArgument: string,
  extraTransactionType: string
) => {
  const signature = await getCommandSignature(
    transport,
    appId,
    appPrivKey,
    commands.EXECUTE_UTXO_SCRIPT,
    utxoArgument,
    extraTransactionType,
    undefined
  );
  const { outputData: encryptedSignature, statusCode, msg } = await executeCommand(
    transport,
    commands.EXECUTE_UTXO_SCRIPT,
    target.SE,
    utxoArgument + signature,
    extraTransactionType,
    undefined
  );
  if (encryptedSignature) {
    return encryptedSignature;
  } else {
    throw new APDUError(commands.EXECUTE_UTXO_SCRIPT, statusCode, msg)
  }
};

/**
 * 9000 true  6D00 false  other error
 * Get full transactino composed by SE. Can be use to check if card supports scripts.
 * @todo append signature
 * @param {Transport} transport
 * @return {Promse<{ signedTx: string, statusCode: string }>}
 */
export const getSignedHex = async (transport: Transport): Promise<{ signedTx: string, statusCode: string }> => {
  const { outputData: signedTx, statusCode, msg } = await executeCommand(transport, commands.GET_SIGNED_HEX, target.SE);
  if (statusCode === CODE._9000 || statusCode === CODE._6D00) {
    return { signedTx, statusCode };
  } else {
    throw new APDUError(commands.GET_SIGNED_HEX, statusCode, msg)
  }
};

/**
 * Inform CoolWalletS that tx_prepare is completed.
 * @param {Transport} transport
 * @return {Promse<boolean>}
 */
export const finishPrepare = async (transport: Transport): Promise<boolean> => {
  const { statusCode, msg } = await executeCommand(transport, commands.FINISH_PREPARE, target.SE);
  if (statusCode === CODE._9000) {
    return true;
  } else {
    throw new APDUError(commands.FINISH_PREPARE, statusCode, msg)
  }
};

/**
 * Get an one-time key to decrypt received signatures.
 * @param {Transport} transport
 * @return {Promise<string>}
 */
export const getSignatureKey = async (transport: Transport): Promise<string> => {
  const { outputData: signatureKey, statusCode, msg } = await executeCommand(transport, commands.GET_TX_KEY, target.SE);
  if (signatureKey) {
    return signatureKey;
  } else {
    throw new APDUError(commands.GET_TX_KEY, statusCode, msg)
  }
};

/**
 * Clear memory on CoolWalletS
 * @param {Transport} transport
 * @return {Promise<boolean>}
 */
export const clearTransaction = async (transport: Transport): Promise<boolean> => {
  const { statusCode, msg } = await executeCommand(transport, commands.CLEAR_TX, target.SE);
  if (statusCode === CODE._9000) {
    return true;
  } else {
    throw new APDUError(commands.CLEAR_TX, statusCode, msg)
  }
};

/**
 * get Transactino detail shown on hardware.
 * @param {Transport} transport
 * @return {Promise<boolean>} true: success, false: canceled.
 */
export const getTxDetail = async (transport: Transport): Promise<boolean> => {
  const { statusCode, msg } = await executeCommand(transport, commands.GET_TX_DETAIL, target.SE);
  if (statusCode === CODE._9000) {
    return true;
  } else {
    throw new APDUError(commands.GET_TX_DETAIL, statusCode, msg)
  }
};

/**
 * set built-in ERC20 token payload in CWS.
 * @param {Transport} transport
 * @param {string} payload
 * @param {number} sn 1: normal erc20, 2: second token in 0x.
 * @return {Promise<boolean>}
 */
export const setToken = async (transport: Transport, payload: string, sn: number = 1): Promise<boolean> => {
  const command = sn === 1 ? commands.SET_ERC20_TOKEN : commands.SET_SECOND_ERC20_TOKEN;
  const { statusCode, msg } = await executeCommand(transport, command, target.SE, payload)
  if (statusCode === CODE._9000) {
    return true;
  } else {
    throw new APDUError(command, statusCode, msg)
  }
};

/**
 * Set custom ERC20
 * @param {Transport} transport
 * @param {string} payload
 * @param {number} sn 1: normal erc20, 2: second token in 0x.
 * @return {Promise<boolean>}
 */
export const setCustomToken = async (transport: Transport, payload: string, sn: number = 1): Promise<boolean> => {
  const command = sn === 1 ? commands.SET_ERC20_TOKEN : commands.SET_SECOND_ERC20_TOKEN;
  const { statusCode, msg } = await executeCommand(transport, command, target.SE, payload, '04', '18')
  if (statusCode === CODE._9000) {
    return true;
  } else {
    throw new APDUError(command, statusCode, msg)
  }
};
