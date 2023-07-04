import React from 'react';
import Products from '../components/Products';

export default function AllProducts() {
  return (
    <div>
      <img src="/img/banner.jpg" alt="" />
      <h2 className='text-2xl pt-16 text-center pb-8'><span className=' block text-base'>손흥민 득점왕 시즌</span>토트넘 21-22 유니폼</h2>
      <Products />
    </div>
  );
}
