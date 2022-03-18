import React from 'react';
import {
  homeObjFour
} from './Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import Pricing from '../../components/Pricing/Pricing'

const Products = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour}/>
    </>
  )
};

export default Products;