import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const[data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <>
        <div className='text-center m-4 bg-violet-500 p-4 text-3xl'>
            Github followers : {data.followers}
            <img src={data.avatar_url} alt ="gitImage" width={300}/>
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch ('http://api.github.com/users/hiteshchoudhary')
    return response.json();
}