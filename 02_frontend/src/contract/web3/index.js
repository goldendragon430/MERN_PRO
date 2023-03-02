import Web3 from 'web3';
import { USDT_ABI } from '../abi'; 
 
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETH_RPC));
// const ethNetwork = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
const contract_address_USDT = process.env.REACT_APP_USDT_CONTRACT; 
const contract = new web3.eth.Contract(USDT_ABI,contract_address_USDT)

export const getUSDTBalance = async (address) =>{
    const result = await contract.methods.balanceOf(address).call();
    return result/1e6;     
}
export const getETHBalance = async(address) =>{
    
    if(!address) return 0;
    try{
        const result = await web3.eth.getBalance(address);
        return result/1e18;
    }catch(err){
        console.log(err)
        return 0;
    }
}
export const sendETHfromMetamask  = async(address,to,amount) =>{
    const amountToSend = web3.utils.toWei(''+ amount, "ether"); // Convert to wei value
    const amount_hex = '0x' + parseInt(amountToSend).toString(16);
    let transactionParam = {
        to: to,
        from: address,
        value: amount_hex
      };
     try{
        const Tx = await window.ethereum.request({method: 'eth_sendTransaction', params:[transactionParam]}); 
        console.log(Tx)
        return true;    
     }catch(err){
        console.log(err)
        return false;
     }
}

export const sendUSDTfromMetamask = async(address,to,amount) =>{
    console.log(address, to, amount);
    let amount_v = web3.utils.toHex(amount*1e6)  
     
    const transactionParameters  = {
    'from': address,
    'gasPrice': web3.utils.toHex(20 * 1e9),
    'gasLimit': web3.utils.toHex(210000),
    'to': contract_address_USDT,
    'value': 0x0,
    'data': contract.methods.transfer(address, amount_v).encodeABI(),
    'nonce': '0x00'
    }
  try{
    const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });    
    console.log(txHash)
    return true;
  }catch(err){
    console.log(err)
    return false;    
  }
   
}



const web3ForPolygon = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_MATIC_RPC));
const contract_MATIC_Token = process.env.REACT_APP_USDT_MATIC; 
const contract_Matic = new web3ForPolygon.eth.Contract(USDT_ABI,contract_MATIC_Token)

export const getMATICBalance = async(address) =>{
  const balance = await  web3ForPolygon.eth.getBalance(address)
  const matic = web3ForPolygon.utils.fromWei(balance)
  return matic;
}

export const getUSDTBalanceForMatic = async(address) =>{
   const result = await contract_Matic.methods.balanceOf(address).call();
  console.log(result)
   return result/1e18;
}