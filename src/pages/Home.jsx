import React from 'react';
// import Banner from '../components/Banner';
import Products from '../components/Products';
import SimpleSlider from '../components/ui/Slide';

export default function Home() {
  return (
  <div>
    <SimpleSlider/>
    {/* <Banner/> */}
    <Products />
  </div>
  );
}
