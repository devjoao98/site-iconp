import React from 'react';

import { 
  homeObjTwo,
  homeObjThree,
} from './Data';

import InfoSection from '../../components/InfoSection/InfoSection';


const Services = () => {
  return (
    <>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
    </>
  )
};

export default Services;