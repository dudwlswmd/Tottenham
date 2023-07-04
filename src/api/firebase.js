import { initializeApp } from "firebase/app";
import { getAuth,signOut ,signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import uuid from 'react-uuid';


const firebaseConfig = {
     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
     databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
     // storageBucket: "tottenham-5acfa.appspot.com",
     // messagingSenderId: "663217507409",
     // appId: "1:663217507409:web:2e200c78072d5554117c70"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function login(){
     return signInWithPopup(auth, provider)
     .then((result) => {
          const user = result.user;
          // console.log('유저?',user)
          return user;
     }).catch((error) => console.error('로그인 에러',error));
}

export async function logout(){
     return signOut(auth).then(() => {
          return null
     }).catch((error) => console.error('로그아웃 에러',error));
}

//로그인 유지 관찰자 음흉한놈
export function onUserStateChange(callback){
     onAuthStateChanged(auth, async (user) => {
          // 1. 사용자가 로그인 한 경우
          const updatedUser = user ? await adminUser(user) : null

          callback(updatedUser)
     });
}



// 데이터베이스 상수
const database = getDatabase(app);

// 2. 사용자가 어드민 권한이 있는지 확인 ->isAdmin을 user안에 넣음
async function adminUser(user){

     return get(ref(database, "admins"))
          .then((snapshot) => {
               if (snapshot.exists()){
                    const admins = snapshot.val();
                    const isAdmin = admins.includes(user.uid) 
                    return {...user,isAdmin}
               }
          //      else {
          //           console.log("No data available");
          //      }
          // }).catch((error) => {
          //      console.error('어드민권한 에러',error);
          return user
     });

}
// export async function addNewProduct(product,imageUrl){
//      const id = uuid(); 
//      const options = (product.options || '').split(',');
//      return set(ref(database,`products/${id}`),{ 
//           ...product, 
//           id, 
//           price:parseInt(product.price),
//           // options:product.options.split(','),
//           // options:product.options?product.options.split(',') : null,
//           options,
//           imageUrl
//      })
// }

//제품등록
export async function addNewProduct(product,image){
     const id = uuid(); 
     return set(ref(database,`products/${id}`),{ 
          ...product, 
          id, 
          price:parseInt(product.price),
          options:product.options.split(','),
          image
     })
}

//제품 가져오기
export async function getProduct(){
     return get(ref(database,'products'))
          .then((snapshot)=>{
               if(snapshot.exists()){
                    return Object.values(snapshot.val())
               }
          })
}



//사용자의 카트에 추가하거나 업데이트
export async function addOrUpdateToCart(userId,product){
     return set(ref(database,`carts/${userId}/${product.id}`),product)
}

//특정 사용자의 카트를 가져옴
export async function getCart(userId){
     return get(ref(database, `carts/${userId}`))
          .then((snapshot) => {
          const items = snapshot.val() || {};
               return Object.values(items);    
     })

}
//카트에서 제품 삭제
export async function removeFromCart(userId,productId){
     return remove(ref(database,`carts/${userId}/${productId}`))
}
