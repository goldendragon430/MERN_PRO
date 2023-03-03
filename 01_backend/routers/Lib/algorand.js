import algosdk from 'algosdk';
import { CID } from 'multiformats/cid'; 
const token = {
  'X-API-key': process.env.REACT_APP_PURESTACK_API_TOKEN,
}
 
const port = '';
const server = 'https://testnet-algorand.api.purestake.io/ps2'  ;
const contract_id = parseInt(process.env.REACT_APP_CONTRACT_ADDRESS);
const usdc_id = parseInt(process.env.REACT_APP_USDC_ADDRESS);
 
export const algodClient = new algosdk.Algodv2(
  token,
  server,
  port
);
export const getBalance = async (address)=>{
    const clientInfo = await algodClient.accountInformation(address).do();
    const assets = clientInfo.assets
    for (var asset of assets) {
        const asset_info = await algodClient.getAssetByID(asset['asset-id']).do()
        if(asset_info.params['unit-name'] == "BRT")
        {
          return asset['amount'] / 10 
        }

    }
    return 0;    
}
export const cidToReserveURL = (cid ) => {
  const decoded = CID.parse(cid);
  const { version } = decoded;
  const url = `template-ipfs://{ipfscid:${version}:dag-pb:reserve:sha2-256}`;
  const reserveAddress = algosdk.encodeAddress(
    Uint8Array.from(Buffer.from(decoded.multihash.digest))
  );
  return {
    url,
    reserveAddress,
  };
};

export const transfer  = async(from,to,sk,amount) =>{
   console.log("started transfer")
 
  const params = await algodClient.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;
   console.log("making transaction")
    let txn = algosdk.makePaymentTxnWithSuggestedParams(
    from,
    to,
    amount,
    undefined,
    undefined,
    params,
  )

  let signedTxn = txn.signTxn(sk)
  let txId = txn.txID().toString()
  console.log('Signed transaction with txID: %s', txId)

  // Submit the transaction
  await algodClient.sendRawTransaction(signedTxn).do()

  // Wait for confirmation
  let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4)
 
}
export const installBRT  = async(from,sk)=>{
  
  const params = await algodClient.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;
    
    let sender = from;
    let recipient = sender;
    let revocationTarget = undefined;
    let closeRemainderTo = undefined;
    
    const amount = 0;
    let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
        sender, 
        recipient, 
        closeRemainderTo, 
        revocationTarget,
        amount, 
        undefined, 
        contract_id, 
        params);
    
    // Must be signed by the account wishing to opt in to the asset    
    // const signedTxn = await myAlgoConnect.signTransaction(opttxn.toByte());
    let signedTxn = opttxn.signTxn(sk);
    console.log("signed",signedTxn)
    const txId = opttxn.txID().toString();
    let opttx = (await algodClient.sendRawTransaction(signedTxn).do());
  // Wait for confirmation
  const confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    txId,
    4
    );
    console.log(
      `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
    );   
}

export const installUSDC  = async(from,sk)=>{
  
  const params = await algodClient.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;
    
    let sender = from;
    let recipient = sender;
    let revocationTarget = undefined;
    let closeRemainderTo = undefined;
    
    const amount = 0;
    let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
        sender, 
        recipient, 
        closeRemainderTo, 
        revocationTarget,
        amount, 
        undefined, 
        usdc_id, 
        params);
    
    // Must be signed by the account wishing to opt in to the asset    
    // const signedTxn = await myAlgoConnect.signTransaction(opttxn.toByte());
    let signedTxn = opttxn.signTxn(sk);
    console.log("signed",signedTxn)
    const txId = opttxn.txID().toString();
    let opttx = (await algodClient.sendRawTransaction(signedTxn).do());
  // Wait for confirmation
  const confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    txId,
    4
    );
    console.log(
      `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
    );   
}
export const CreateArc19 = async (from,creator,asset_name, unit_name, description, url,reserveAddress,sk) =>{
 
    const params = await algodClient.getTransactionParams().do();
     
    // comment out the next two lines to use suggested fee
    params.fee = algosdk.ALGORAND_MIN_TX_FEE;
    params.flatFee = true;
  
    const note = {
      name: asset_name,
      description: description,
      image: url,
      decimals: 18,
      unitName: unit_name,
      image_integrity: '',
      image_mimetype: "image/jpeg",
      properties: {}, // Here you can add traits info for rarity!
    };
    const encNote =   Uint8Array.from(Buffer.from(JSON.stringify(note)));
    console.log("address",from)
    console.log("reserveAddress",reserveAddress)
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
      from: from,
      total: 1,
      decimals: 0,
      assetName: asset_name,
      unitName: unit_name,
      assetURL: url,
      assetMetadataHash: '',
      defaultFrozen: false,
      freeze: creator,
      manager: from,
      clawback: from,
      reserve: reserveAddress,
      note: encNote,
      suggestedParams: params,
    });
  
    console.log("txn",txn)
    const signedTxn = txn.signTxn(sk)
    console.log("signed",signedTxn)
    
    const txId = txn.txID().toString();
    // Submit the transaction
    await algodClient.sendRawTransaction(signedTxn).do();
  
    // Wait for confirmation
    const confirmedTxn = await algosdk.waitForConfirmation(
      algodClient,
      txId,
      4
    );
    console.log(
      `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
    );
  


}
export const ConfigArc19 = async (from,asset_id,asset_name,unit_name,description,url,reserveAddress,sk)=>{

  const params = await algodClient.getTransactionParams().do();
     
  // comment out the next two lines to use suggested fee
  params.fee =  algosdk.ALGORAND_MIN_TX_FEE;
  params.flatFee = true;

  const note = {
    name: asset_name,
    description: description,
    image: url,
    decimals: 18,
    unitName: unit_name,
    image_integrity: '',
    image_mimetype: "image/jpeg",
    properties: {}, // Here you can add traits info for rarity!
  };
  const encNote =   Uint8Array.from(Buffer.from(JSON.stringify(note)));
    console.log("address",from)
    console.log("reserveAddress",reserveAddress)

  const txn = algosdk.makeAssetConfigTxnWithSuggestedParamsFromObject({
      from: from,
      note: encNote,
      suggestedParams: params,
      assetIndex: asset_id,
      freeze: from,
      manager: from,
      clawback: from,
      reserve: reserveAddress,
      strictEmptyAddressChecking: false,
    });
    console.log("txn",txn)
    
    const signedTxn = txn.signTxn(sk)
    // const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
    console.log("signed",signedTxn)
    
    const txId = txn.txID().toString();
    // Submit the transaction
    await algodClient.sendRawTransaction(signedTxn).do();
  
    // Wait for confirmation
    const confirmedTxn = await algosdk.waitForConfirmation(
      algodClient,
      txId,
      4
    );
    console.log(
      `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
    );   

}
export const transferToken = async(sender,receiver,amount,sk)=>{

  const params = await algodClient.getTransactionParams().do();
  params.fee = 1000;
  params.flatFee = true;
   
 const recipient = receiver;
 const revocationTarget = undefined;
 const closeRemainderTo = undefined;
  //Amount of the asset to transfer
  amount = amount * 10;
 
  
  let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
      sender, 
      recipient, 
      closeRemainderTo, 
      revocationTarget,
      amount,  
      undefined, 
      contract_id, 
      params);
  // const signedTxn = await myAlgoConnect.signTransaction(xtxn.toByte());
  const signedTxn =  xtxn.signTxn(sk)
  console.log("signed",signedTxn)
  const txId = xtxn.txID().toString();
  let ttx = (await algodClient.sendRawTransaction(signedTxn).do());
// Wait for confirmation
const confirmedTxn = await algosdk.waitForConfirmation(
  algodClient,
  txId,
  4
  );
  console.log(
    `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
  );   
  
}


export const transferAlgo = async (from,to,amount,sk)=>{
    const params = await algodClient.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;
    amount  = amount *1000000;
    let txn = algosdk.makePaymentTxnWithSuggestedParams(
    from,
    to,
    amount,
    undefined,
    undefined,
    params,
  )

  let signedTxn = txn.signTxn(sk)
  let txId = txn.txID().toString()
  console.log('Signed transaction with txID: %s', txId)

  // Submit the transaction
  await algodClient.sendRawTransaction(signedTxn).do()

  // Wait for confirmation
  let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4)
  console.log("transfered",to)

}
export const transferUSDC = async(sender,receiver,amount,sk)=>{

  const params = await algodClient.getTransactionParams().do();
  params.fee = 1000;
  params.flatFee = true;
   
 const recipient = receiver;
 const revocationTarget = undefined;
 const closeRemainderTo = undefined;
  //Amount of the asset to transfer
  amount = amount * 1000000;
 
  let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
      sender, 
      recipient, 
      closeRemainderTo, 
      revocationTarget,
      amount,  
      undefined, 
      usdc_id, 
      params);
  // const signedTxn = await myAlgoConnect.signTransaction(xtxn.toByte());
  const signedTxn =  xtxn.signTxn(sk)
  console.log("signed",signedTxn)
  const txId = xtxn.txID().toString();
  let ttx = (await algodClient.sendRawTransaction(signedTxn).do());
// Wait for confirmation
const confirmedTxn = await algosdk.waitForConfirmation(
  algodClient,
  txId,
  4
  );
  console.log(
    `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
  );   
  
}
  export const getSecrectKey = (data)=>{
     
    const slist = data.split(",")
    let s = [] 
    slist.forEach(ele => {
      s.push(parseInt(ele))  
    });
    return Uint8Array.from(s)
  }
export const RemoveAsset = async(from,sk,unit_name,creator) => {
 

  const clientInfo = await algodClient.accountInformation(from).do();
  const assets = clientInfo.assets 
  
  var assetIndex  = 0;
  for (var asset of assets) {
   const asset_id =  asset['asset-id']
   const asset_info = await algodClient.getAssetByID(asset_id).do()
 
   if(asset_info.params['unit-name'] == unit_name &&  asset_info.params['freeze'] == creator) {
    assetIndex = asset_id;
    break;
   }  
  }
  console.log("assetIndex",assetIndex)
  if(assetIndex == 0) return;
  // assetIndex =144809333
  const params = await algodClient.getTransactionParams().do();
  params.fee = 1000;
  params.flatFee = true;
   
  let xtxn = algosdk.makeAssetDestroyTxnWithSuggestedParams(
      from, 
      undefined, 
      assetIndex, 
      params);
  const signedTxn =  xtxn.signTxn(sk)
  console.log("signed",signedTxn)
  const txId = xtxn.txID().toString();
  let ttx = (await algodClient.sendRawTransaction(signedTxn).do());
  const confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    txId,
    4
    );
    console.log(
      `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
    );   
}

export const RemoveAssetbyID = async(from,sk,assetIndex) => {
 

  const params = await algodClient.getTransactionParams().do();
  params.fee = 1000;
  params.flatFee = true;
   
  let xtxn = algosdk.makeAssetDestroyTxnWithSuggestedParams(
      from, 
      undefined, 
      assetIndex, 
      params);
  const signedTxn =  xtxn.signTxn(sk)
  console.log("signed",signedTxn)
  const txId = xtxn.txID().toString();
  let ttx = (await algodClient.sendRawTransaction(signedTxn).do());
  const confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    txId,
    4
    );
    console.log(
      `Transaction ${txId} confirmed in round ${confirmedTxn['confirmed-round']}\n`
    );   
}