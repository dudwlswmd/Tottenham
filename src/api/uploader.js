//curl https://api.cloudinary.com/v1_1/demo/image/upload -X POST --data 'file=sample.jpg&timestamp=173719931&api_key=436464676&signature=a781d61f86a6f818af'

export async function uploadImage(file){
     const data = new FormData();
     data.append('file', file);
     data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
     return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
          method: "POST",
          body: data
     })
     .then((res)=>res.json())
     .then((data)=>data.url)
}


// export async function uploadImage(file){
//      const data = new FormData();
//      data.append('file',file);
//      data.append('upload_preset', 'ml_default');
     
//      return fetch('https://api.cloudinary.com/v1_1/ds5h3tuel/image/upload', {
//           method: 'POST',
//           body: data
//      })
//      .then((res)=>res.json())
//      .then((data)=>data.url)
// }