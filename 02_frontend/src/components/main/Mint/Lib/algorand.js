import algosdk from 'algosdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import {PeraWalletConnect} from '@perawallet/connect';
import { Buffer } from 'buffer';
 
const token = {
  'X-API-key': process.env.REACT_APP_PURESTACK_API_TOKEN,
}
 
const port = '';
const server = 'https://testnet-algorand.api.purestake.io/ps2'  ;
  
export const algodClient = new algosdk.Algodv2(
  token,
  server,
  port
);
if (!window.Buffer) window.Buffer = Buffer;
export const transferAlgo = async (from,to,amount) =>{
  try{
    const params = await algodClient.getTransactionParams().do();
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      suggestedParams: {
          ...params,
      },
      from: from,
      to: to, 
      amount: amount,
      note: undefined
  });
  
  const myAlgoConnect = new MyAlgoConnect();
  const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
  await algodClient.sendRawTransaction(signedTxn.blob).do()
  let txId = txn.txID().toString()
  let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4)
  console.log(
    `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
  );  
  return true
  } catch(err){
    console.log(err)
  return false;
  }
}
export const transferUSDC = async (from,to,amount) =>{

  try{
      const params = await algodClient.getTransactionParams().do();
      const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
          suggestedParams: {
              ...params,
          },
          from: from,
          to: to,
          assetIndex: parseInt(process.env.REACT_APP_USDC_ADDRESS),
          amount: amount,
          note: undefined
      });
      const myAlgoConnect = new MyAlgoConnect();
      const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
      await algodClient.sendRawTransaction(signedTxn.blob).do()
      let txId = txn.txID().toString()
      let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4)
      console.log(
        `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
      );  
      return true;
  } catch(err){
    console.log(err)
    return false;
  }
}
export const transferAlgo_pera = async (from,to,amount) =>{
  try{
    const params = await algodClient.getTransactionParams().do();
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      suggestedParams: {
          ...params,
      },
      from: from,
      to: to, 
      amount: amount,
      note: undefined
  });
  const peraWallet = new PeraWalletConnect();
   
  const signedTxn = await peraWallet.signTransaction([[{txn, signers: [from]}]]);
 
  console.log(signedTxn)
  await algodClient.sendRawTransaction(signedTxn).do()
  let txId = txn.txID().toString()
  let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4)
  console.log(
    `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
  );  
  return true
  } catch(err){
    console.log(err)
  return false;
  }
}
export const transferUSDC_pera = async(from,to,amount) =>{

}