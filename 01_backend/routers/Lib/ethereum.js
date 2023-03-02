import Web3 from 'web3'
import { USDT_ABI } from './ABI.js';
import { Transaction } from 'ethereumjs-tx';
import axios from 'axios';
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETH_RPC));
const contract_address_USDT = process.env.REACT_APP_USDT_CONTRACT; 
const USDT = new web3.eth.Contract(USDT_ABI)

async function transferFund(sendersData, recieverData, amountToSend) {
    return new Promise(async (resolve, reject) => {
        var nonce = await web3.eth.getTransactionCount(sendersData.address);
        web3.eth.getBalance(sendersData.address, async (err, result) => {
            if (err) {
                return reject();
            }
            let balance = web3.utils.fromWei(result, "ether");
            console.log(balance + " ETH");
            if(balance < amountToSend) {
                console.log('insufficient funds');
                return reject();
            }
   
            let gasPrices = await getCurrentGasPrices();
            let details = {
                "to": recieverData.address,
                "value": web3.utils.toHex(web3.utils.toWei(amountToSend.toString(), 'ether')),
                "gas": 21000,
                "gasPrice": gasPrices.low * 1000000000,
                "nonce": nonce,
                "chainId": 5 // EIP 155 chainId - mainnet: 1, rinkeby: 4
            };
           
            const transaction = new Transaction(details, {chain: 'goerli'});
            let privateKey = sendersData.privateKey.split('0x');
            let privKey = Buffer.from(privateKey[1],'hex');
            transaction.sign(privKey);
           
            const serializedTransaction = transaction.serialize();
           
            web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'), (err, id) => {
                if(err) {
                    console.log(err);
                    return reject();
                }
                const url = `https://goerli.etherscan.io/tx/${id}`;
                console.log(url);
                console.log(" Sending ETH success");
                resolve({id: id, link: url});
            });
        });
    });
}

async function getCurrentGasPrices() {
    let response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json');
    let prices = {
      low: response.data.safeLow / 10,
      medium: response.data.average / 10,
      high: response.data.fast / 10
    };
    return prices;
}
 
export const transferUSDT = async (sender,privateKey,receiver,amount) =>{
    try{
        let amount_value = web3.utils.toHex(amount*1e6)
        web3.eth.getTransactionCount(sender)
        .then((count) => {
          let rawTransaction = {
            'from': sender,
            'gasPrice': web3.utils.toHex(20 * 1e9),
            'gasLimit': web3.utils.toHex(210000),
            'to': contract_address_USDT,
            'value': 0x0,
            'data': USDT.methods.transfer(receiver, amount_value).encodeABI(),
            'nonce': web3.utils.toHex(count)
          }
      
          let transaction = new Transaction(rawTransaction,{chain : 'goerli'})
          let privateKey_ls = privateKey.split('0x');
          let privKey = Buffer.from(privateKey_ls[1],'hex');
    
          transaction.sign(Buffer.from(privKey, 'hex'))
          web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
            .on('transactionHash', console.log)
        })
        console.log(" Sending USDT success");
    
    }catch(err){
        console.log(err)
    }
}
export const transferETH = async (sender,privateKey, receiver , amount ) =>{
  
   try{
     await transferFund({address: sender, privateKey: privateKey},{address: receiver},amount)
    }
    catch(err){
        console.log(err)
    }
}

const web3ForPolygon = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_MATIC_RPC));
const contract_MATIC_Token = process.env.REACT_APP_USDT_MATIC; 
const contract_Matic = new web3ForPolygon.eth.Contract(USDT_ABI,contract_MATIC_Token)

export const transferMATIC = async(sender,privateKey,receiver,amount) =>{

    web3ForPolygon.eth.accounts.wallet.add(privateKey);
    // Send 10 MATIC
    try{
        const result =  await   web3ForPolygon.eth.sendTransaction({
            from: sender,
            to: receiver,
            value: web3ForPolygon.utils.toWei(amount, "ether"),
            gas: 8000000,
        })
        return true;
    }catch(err){
        console.log(err)
        return false
    }
}

export const transferUSDTForMATIC = async(sender,privateKey,receiver,amount) =>{
    
    web3ForPolygon.eth.accounts.wallet.add(privateKey);
    // Send 10 MATIC
    try{
        const nonce = await web3ForPolygon.eth.getTransactionCount(sender);
        let amount_v = web3.utils.toHex(amount*1e18)
        let rawTransaction = {
        'from': sender,
        'gasPrice': web3ForPolygon.utils.toHex(20 * 1e9),
        'gasLimit': web3ForPolygon.utils.toHex(210000),
        'to': contract_MATIC_Token,
        'value': 0x0,
        'data': contract_Matic.methods.transfer(receiver, amount_v).encodeABI(),
        'nonce': nonce
        }

        const receipt = await web3ForPolygon.eth.sendTransaction(rawTransaction);
       
        return true;

    }catch(err){
        console.log(err)
        return false
    }
}