import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Title from './Title'
const HotNews = ({news}) => {
  const [hNews, setHNews] = useState({});
  
  useEffect(() => {
    const filteredNews = news.filter(item => item.isTop).slice(0, 5);
    setHNews(filteredNews);
  }, []);
  if (Object.keys(hNews).length === 0) {
    return <p>Loading hot news...</p>;
  }

  return (
   <>
   <Title title="Sıcak Haberler"/>
   <div className="flex h-full">
  <div className="w-1/2 p-2">
    <div className="grid grid-cols-2 gap-1">
     <div className='bg-green-300 relative h-72 w-72' >
     <Image className="object-cover h-full w-full " src={hNews[0].urlToImage} width={600} height={600} alt='image'  />
     <p className='text-white text-xl p-1 absolute hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{news[0].title}</p> 
       </div>
     <div className='bg-green-300 relative h-72 w-72' > 
     <Image className="object-cover h-full w-full " src={hNews[1].urlToImage} width={600} height={600} alt='image'  /> 
     <p className='text-white text-xl p-1 absolute hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{news[1].title}</p> 
     </div>
     <div className='bg-green-300 relative h-72 w-72' >
     <Image className="object-cover h-full w-full " src={hNews[2].urlToImage} width={600} height={600} alt='image'  /> 
     <p className='text-white text-xl p-1 absolute hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{news[2].title}</p> 
       </div>
     <div className='bg-green-300 relative h-72 w-72' >
     <Image className="object-cover h-full w-full " src={hNews[3].urlToImage} width={600} height={600} alt='image'  /> 
     <p className='text-white text-xl p-1 absolute hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{news[3].title}</p> 
       </div>
    </div>
  </div>
  <div className="w-1/2 p-2">
  <div className='bg-green-600 relative h-full w-full' >
  <Image className="object-cover h-full w-full" src={hNews[4].urlToImage} width={600} height={600} alt='image'  /> 
  <p className='text-white text-3xl p-1 absolute hover:underline hover:cursor-pointer  bottom-0 left-0 ' >{news[4].title}</p> 
  </div>
  </div>
</div>
{/* <Image className="object-cover" src={news[3].urlToImage} width={1200} height={900} /> */}
   </>

  )
}

export default HotNews