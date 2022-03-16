import React from 'react'
import { 
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
 } from './Data'
import InfoSection from '../../components/InfoSection/InfoSection'

export const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
    </>
  )
}
