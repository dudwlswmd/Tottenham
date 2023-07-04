import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';
import Button2 from '../components/ui/Button2';

export default function NewProduct() {

  const [product,setProduct]=useState({}); //각 제품의 입력값을 모아주는 오브젝트
  const [file,setFile]=useState();//이미지를 임시로 저장//이미지주소//로컬의이미지주소//url
  const [isUploading,setIsUploading] = useState(false); //업로드중
  const [success,setSuccess] = useState();  //성공표시


  const handleChange=(Event)=>{
    // console.log(Event.target.value)
    const {name,value,files}=Event.target;

    if( name === 'img' ){
      setFile(files&&files[0])
      return
    }
    setProduct((product)=>({...product,[name]:value}))
    // console.log('product',product)

  }

   //클라우드너리에 이미지를 업로드
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)  //클라우드너리에 이미지를 업로드
    .then( url => {//이미지 주소 받아옴
      console.log(url);
      console.log('product',product.options.split(','))
      addNewProduct(product,url)//파이어베이스에 데이터자료 들어감
      .then(()=>{
        setSuccess('상품 등록 완료');
        setTimeout(()=>{
          setSuccess(null)
        },4000)
      })
    })  
    .finally(()=>setIsUploading(false))
  }
  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   uploadImage(file) //클라우드너리에 이미지를 업로드
  //     .then((url=>{
  //       console.log(url)
  //       console.log('product',product.options.split(','))
  //       addNewProduct(product,url)
  //     })); //yarn reat add uuid 해서 다운로드해야함
  //     // .then((url=>console.log(url))); //
  // }
  
  return (
    <section className='w-full max-w-screen-xl m-auto pt-36 '>
      {success  
        ? (<p className='text-center text-2xl'> ✅ {success} ✅ </p>) 
        : (<h2 className='text-2xl font-bold text-center pb-6'>상품 등록 하기</h2>)
      }
      { file && <img className='h-52 mx-auto mb-2' src={ URL.createObjectURL(file) } alt='localFile' />}
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept='image/*' 
          name='img' 
          onChange={handleChange} 
          required
        />
        <input 
          type="text" 
          name='title' 
          placeholder='제품명' 
          onChange={handleChange} 
          value={product.title??''}
          required
        />
        <input 
          type="number" 
          name='price' 
          placeholder='가격' 
          onChange={handleChange} 
          value={product.price??''}
          required
        />
        <input 
          type="text" 
          name='category' 
          placeholder='카테고리' 
          onChange={handleChange} 
          value={product.category??''}
          required
        />
        <input 
          type="text" 
          name='description' 
          placeholder='제품설명' 
          onChange={handleChange} 
          value={product.description??''}
          required
        />
        <input 
          type="text" 
          name='options' 
          placeholder='옵션들(콤마(,)로 구분)' 
          onChange={handleChange} 
          value={product.options??''}
          required
          />
        <Button2 text={ isUploading ?'업로드중...' : '제품 등록하기'}/>    
      </form>
    </section>
  );
}
