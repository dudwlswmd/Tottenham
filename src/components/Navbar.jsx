import React from 'react'//회색처리된걸 딤드라고 지껄인다
import { Link } from 'react-router-dom';
import { AiFillPlusSquare } from "react-icons/ai";
// import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';
import CartStatus from './CartStatus';


export default function Navbar () {

  const {user,loginEvent,logoutEvent} = useAuthContext();

  // const [user,setUser] = useState();//로그인 여부(로그인 정보)//있다없으니깐

  // //화면이 마운트(리로드 될때) 로그인이 되어있는지 아닌지 상태를 알아보는 함수 호출
  // useEffect(()=>{
  //   onUserStateChange((user)=>{
  //     //설명1.onUserStateChange 얘의 기본 초능력이 onUserStateChange 얘의 능력을 가져온다
  //     //설명2.onUserStateChange얘는 파이어베이스 로그인 유지기능에 있다.
  //     setUser(user)
  //     console.log('userEvent',user)
  //   });
  // },[])

// //로그인
// const handleLogin = ()=>{
//   login()//.then(setUser)
// }
// //로그아웃
// const handleLogout = ()=>{
//   logout()//.then(setUser)
// }
//설명3.로그인 로그아웃은 setUser를 안가져와도 상관없는 이유는 파이어베이스에서
//설명4.알아서 user를 가져오기때문에 setUser가 필요없다.그래서 바로 헨들러말고 온클릭에다 login,logout쓸수있다.
//   export async function login(){
//     return signInWithPopup(auth, provider)
//     .then((result) => {
//          // const credential = GoogleAuthProvider.credentialFromResult(result);
//          // const token = credential.accessToken;
//          const user = result.user;
//          console.log('유저?',user)
//          return user;
//     }).catch((error) => console.error('로그인 에러',error));
// }
  return (
    <div className='fixed w-full z-10  bg-brand'>
        <div className='w-full max-w-screen-2xl m-auto'>
          <header className='flex justify-between items-center p-2 text-white md:p-5'>
            <Link to='/'><h1 className=' text-xl md:text-3xl font-logoFont tracking-widest'>Tottenham<span className='pl-3 md:pl-6'>Hotsonny</span></h1></Link>
            <nav className='flex items-center gap-2 md:gap-4'>
              <Link to='/products'>Product</Link>
              <Link to='/cart'><CartStatus /></Link>
              {user && user.isAdmin && (<Link to='/products/new'><AiFillPlusSquare /></Link>)}
              {user && <User user={user} />}
              {!user && <Button onClick={loginEvent} text={'login'}/>}
              {user && <Button onClick={logoutEvent} text={'logout'}/>}
            </nav>
          </header>
        </div>
    </div>
  )
}

