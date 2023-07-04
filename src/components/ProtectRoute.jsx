import React from 'react'
import { useAuthContext } from './context/AuthContext'
import {Navigate} from 'react-router-dom'

export default function ProtectRoute({children,requireAdmin}) {

     const {user} = useAuthContext();
     console.log('user????????????',user)
     if(!user || (requireAdmin && !user.isAdmin)){// 로그인했는지안했는지 || 어드민계정의 권한(requireAdmin)이 있는경우 && 어드민계정이아님
          return<Navigate to='/' replace={true} />//유저(로그인 안했을때)가 없을때 cart 누르면 안들어가지고 홈으로 넘어간다//replace->뒤로가기 불가능,기본으로주는 기능
     }

     return (
          children
     )
}
/*
     로그인한 사용자가 있는지 확인
     그 사용자가 admin인지 확인
*/



