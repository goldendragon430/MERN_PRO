import React,{useEffect,useState} from 'react'
import { Activity } from './Activity'
import { CollectionList } from './CollectionList'
import { ItemHero } from './ItemHero'
import { algodClient } from '../Mint/Lib/algorand'
export const Item = () => {
  
 
  return (
    <>
      <ItemHero />
      {/* <Activity /> */}
      {/* <CollectionList /> */}
    </>
  )
}
