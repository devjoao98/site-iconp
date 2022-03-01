import React from 'react'
import { homeObjOne } from './Data'
import InfoSection from '../../components/InfoSection/InfoSection'

export const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}/>
    </>
  )
}
