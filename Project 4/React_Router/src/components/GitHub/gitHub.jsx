import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  //   const [data,setData] = useState("")
    
  //  useEffect(()=>
  //   {
  //       fetch('https://api.github.com/users/pratik0044')
  //       .then(res=> res.json())
  //       .then(data=> { setData(data)})
  //   },[])

  const data = useLoaderData();
 
  return (
    <>
    <div className='bg-gray-600 text-white text-3xl 
    p-2 m-auto rounded-lg'>GitHub Followers: {data.followers}</div>
    <img src={  data.avatar_url} height={300}  width={300} alt="" className='rounded-full
    items-center mx-auto my-4'/>
    <div className='bg-gray-600 text-white text-3xl 
    p-2 m-auto '>UserId : {data.login}</div>

</>
  )
}

export default GitHub

export const githubLoader = async () => {
  const respons = await fetch('https://api.github.com/users/pratik0044')
  return respons.json()
}