import React, { createContext, useContext, useEffect, useState } from 'react'
import { onUserStateChange, login, logout } from '../../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({children}){
     const [user,setUser] = useState();//로그인 여부(로그인 정보)//있다없으니깐

     //화면이 마운트(리로드 될때) 로그인이 되어있는지 아닌지 상태를 알아보는 함수 호출
     useEffect(()=>{
          onUserStateChange((user)=>{
         //onUserStateChange 얘의 기본 초능력이 onUserStateChange 얘의 능력을 가져온다
         //onUserStateChange얘는 파이어베이스 로그인 유지기능에 있다.
          setUser(user)
          // console.log('userEvent',user)
          });
     },[])

     return (
          <AuthContext.Provider value={{user,uid:user && user.uid, loginEvent:login ,logoutEvent:logout}}>{/* login,logout만 써도 상관없음 */}
               {children}
          </AuthContext.Provider>
     )
} 

export function useAuthContext(){
     return useContext(AuthContext);
}



