import React from 'react';
import { PiEquals } from "react-icons/pi";
import { AiFillPlusCircle } from "react-icons/ai";
import { getCart } from '../api/firebase';
import { useAuthContext } from '../components/context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import CartItem from '../components/CartItem';

export default function MyCart() {
  const SHIPPING = 3000; //배송액
  const MONEY_CLASS = 'text-2xl text-red-700'
  const { uid } = useAuthContext();
  const { isLoading, data:products } = useQuery(['carts', uid || ''],()=> getCart(uid),{ staleTime: 1000 });

  if(isLoading) return <p>Loading...</p>;
  const hasProducts = products && products.length > 0; //쇼핑카트에 아이템이 있는지 검사

  const totalPrice =  products && products.reduce(
    (sum, value) =>  sum + (parseInt(value.price) * value.quantity), 0)

  return (
    <section className='w-full max-w-screen-lg m-auto py-24 md:py-40'>
      <div className='flex flex-col'>
        <h2 className='text-center text-2xl font-bold pb-4 border-b border-slate-300'>내 장바구니</h2>
        <div>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {!hasProducts && <p className='p py-20'>장바구니에 sonny의 상품이 없습니다!!!!우리흥 유니폼 사줘!</p>}
            { products && products.map((product)=>(
              <CartItem key={product.id} product={product} uid={uid} />
            ))}
            <div className="flex justify-between items-center ">
              상품총액 {`₩ ${totalPrice}`}
              <div style={{ fontSize: '30px' }}>
                <AiFillPlusCircle />
              </div>
              배송액 ₩ {SHIPPING}
              <PiEquals />
              <div className='text-center'>총가격 
                <p className={MONEY_CLASS}>₩ { totalPrice + SHIPPING }</p>
              </div>
            </div>
            <button className='
              bg-brand 
              text-white 
              p-2
              w-full
              mt-10
              font-semibold 
              transition duration-500
              hover:brightness-150 text-sm
              '>주문하기
              </button>
          </ul>
        </div>
      </div>
    </section>
  );
}
