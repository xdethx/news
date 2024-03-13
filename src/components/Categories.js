import React from 'react'
import { useEffect, useState } from 'react';
import Title from './Title'
import Image from 'next/image'

const Categories = ({news}) => {
  const [yasamNews, setYasamNews] = useState({});
  const [yemekNews, setYemekNews] = useState({});
  const [finansNews, setFinansNews] = useState({});

  useEffect(() => {
    const yasamNewsData = news.filter((item) => item.category === 'yaşam').slice(0, 4);
    const yemekNewsData = news.filter((item) => item.category === 'yemek').slice(0, 4);
    const finansNewsData = news.filter((item) => item.category === 'finans').slice(0, 4);

    setYasamNews(yasamNewsData);
    setYemekNews(yemekNewsData);
    setFinansNews(finansNewsData);
  }, []);
  if (Object.keys(yasamNews).length === 0) {
    return <p>Loading news...</p>;
  }
 
  return (


     <div className=' w-full flex  gap-2 p-2' >
 <div className='h-full w-1/3   p-1' >
     <Title title='Yaşam' />
     <div className='w-full flex-col'>

 {yasamNews.map((item,index)=>{
if(index === 0) {
  return (
    <div key={index} className=' flex-col  w-full mb-1'>
    
    <Image className="object-cover h-full w-full " src={item.urlToImage} width={600} height={600} alt='image' />
    <p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{item.title}</p>
    <p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >-{item.author}</p> 
    </div>
  )
} else {
  return(
    <div key={index} className='flex h-full w-full mb-1' >
    <div className='w-2/3'><p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{item.title}</p></div>
   <div className='bg-black flex h-24 w-1/3  '>
    <Image className="object-cover h-full w-full " src={item.urlToImage} width={600} height={600} alt='image'  />
   </div>
    </div>
  )
}


 })}


     </div>
      </div>
 <div className='h-full w-1/3 p-1 ' >
 <Title title='Yemek' />
 <div className='w-full flex-col'>

{yemekNews.map((item,index)=>{
if(index === 0) {
 return (
   <div key={index} className=' flex-col  w-full mb-1'>
   
   <Image className="object-cover h-full w-full " src={item.urlToImage} width={600} height={600} alt='image'  />
   <p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{item.title}</p>
   <p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >-{item.author}</p> 
   </div>
 )
} else {
 return(
   <div key={index} className='flex h-full w-full mb-1' >
   <div className='w-2/3'><p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{item.title}</p></div>
  <div className='bg-black flex h-24 w-1/3  '>
   <Image className="object-cover h-full w-full " src={item.urlToImage} width={600} height={600} alt='image'  />
  </div>
   </div>
 )
}


})}


    </div>
      </div>
 <div className='h-full w-1/3 p-1 ' > 
 <Title title='Finans' />
 <div className='w-full flex-col'>

{finansNews.map((item,index)=>{
if(index === 0) {
 return (
   <div key={index} className=' flex-col  w-full mb-1'>
   
   <Image className="object-cover h-full w-full " src={item.urlToImage} width={600} height={600} alt='image'  />
   <p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{item.title}</p>
   <p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >-{item.author}</p> 
   </div>
 )
} else {
 return(
   <div key={index} className='flex h-full w-full mb-1' >
   <div className='w-2/3'><p className='text-black  p-1  hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{item.title}</p></div>
  <div className='bg-black flex h-24 w-1/3  '>
   <Image className="object-cover h-full w-full " src={item.urlToImage} width={600} height={600} alt='image'  />
  </div>
   </div>
 )
}


})}


    </div>
 </div>
     </div>
  )
}

export default Categories