import React, { useEffect,useReducer,useState } from 'react'
import { DashboardHeading } from '../../../shared/DashboardHeading'
import CrUsdc from '@meronex/icons/cr/CrUsdc'
import GrBitcoin from '@meronex/icons/gr/GrBitcoin'
import CrTusd from '@meronex/icons/cr/CrTusd';
import MdcEthereum from '@meronex/icons/mdc/MdcEthereum'
import { algodClient } from '../../../main/Mint/Lib/algorand'
import { AlgorandIcon } from '../../../shared/SvgIcons'
import { WalletItem } from '../../Wallets/WalletItem'
import AlgoWalletIcon from '../../../../assets/images/myalgo.png'
import MetaMaskIcon from '../../../../assets/images/metamask.svg'
import { ExternalWalletItem } from '../../Wallets/ExternalWalletItem'
import {
  Container,
  WalletList,
} from './styles'

 
import { getETHBalance, getMATICBalance, getUSDTBalance, getUSDTBalanceForMatic } from '../../../../contract/web3';
import Web3 from 'web3';

export const Wallets = () => {
  let balance = localStorage.getItem('balance')
  if(!balance)  balance = 0
  const ethNetwork = process.env.REACT_APP_ETH_RPC;
  const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
  const walletList = [
    { icon: <AlgorandIcon />, name: 'ALGO',alias: 'Algo', price: 0.00,address:'',minium : 1 , disabled : false},
    { icon: <CrUsdc />, name: 'USDC',alias : 'USDC(Algo)', price: 0.00,address:'',minium : 0, disabled : false },
    { icon: <MdcEthereum />, name: 'ETH',alias: 'ETH', price: 0.00,address:'' ,minium : 1, disabled : false},
    { icon: <CrTusd/>, name: 'USDT',alias: 'USDT(ETH)', price: 0.00,address:'' ,minium : 1, disabled : false},
    { icon: <MdcEthereum />, name: 'MATIC',alias: 'POL', price: 0.00,address:'' ,minium : 1, disabled : false},
    { icon: <CrTusd/>, name: 'TST',alias: 'TST', price: 0.00,address:'' ,minium : 1, disabled : false},
    // { icon: <GrBitcoin />, name: 'BTC',alias: 'BTC', price: 0.00,address:'' ,minium : 1, disabled : true},
  ]
  const externalList = [
    {icon: AlgoWalletIcon,name : 'MyAlgoWallet',value:'myalgo',ChainID :0,Account : 'Not Connected'},
    {icon: MetaMaskIcon,name : 'MetaMask',value:'metamask',ChainID : 0,Account : 'Not Connected'}
   ]
  
 const [data,setData] = useState(walletList) 
 const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
 
 const loadAlgoBalance = async()=>{
  const algo_addr = localStorage.getItem("address")
  walletList[1].address = algo_addr
  walletList[0].address = algo_addr
  
  const clientInfo = await algodClient.accountInformation(algo_addr).do();
  walletList[0].price = clientInfo.amount / 1000000 - 0.301; 
  if(walletList[0].price < 0) walletList[0].price = 0
  const usdc_id = parseInt(process.env.REACT_APP_USDC_ADDRESS);
  const brt_id = parseInt(process.env.REACT_APP_CONTRACT_ADDRESS);
  const assets  = clientInfo.assets
  assets.forEach(asset => {

    if(asset['asset-id'] == usdc_id){
        walletList[1].price = asset['amount']  / 1000000 ; 
    }
  
  });    

 }
 const loadEthBalance = async() =>{
  
  const eth_addr = localStorage.getItem("eth");
  // const eth_addr = '0x82192aA7cB921C37c1f273AAf66a33Be08901106';
  walletList[2].address = eth_addr;
  walletList[3].address = eth_addr;
  walletList[4].address = eth_addr;
  walletList[5].address = eth_addr;

  walletList[2].price = await getETHBalance(eth_addr);
 const balance =  await getUSDTBalance(eth_addr);
 walletList[3].price = balance

 const balance_matic = await getMATICBalance(eth_addr)
 walletList[4].price = balance_matic
 walletList[5].price = await getUSDTBalanceForMatic(eth_addr)
}
 const fetchData = async ()=>{
  await loadAlgoBalance(); // fetchData => Algo and USDC wallet
  await loadEthBalance(); // fetchData => Eth and USDT wallet
    setData(walletList)
    forceUpdate()
 }

 useEffect(()=>{
  const timeout = setInterval(() => {
     fetchData();      
  }, 3000);  
  return () => clearInterval(timeout);
},[])

  return (
    <Container>
      <DashboardHeading title='Wallets' responsive = {false}>
      </DashboardHeading>
      <WalletList>
        {data.map((wallet, i) => (
          <WalletItem
            wallet={wallet}
            key={i}
          />
        ))}
      </WalletList>
      <DashboardHeading title='External Wallets'/>
      <p>Connect your external wallets to transfer  your digital colletibles</p>
      <WalletList style = {{marginTop : 10}}>
      {externalList.map((wallet, i) => (
          <ExternalWalletItem
          wallet={wallet}
          key={i}
        />
        ))}
      </WalletList>
    </Container>
  )
}
