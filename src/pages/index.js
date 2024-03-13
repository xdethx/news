import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import HotNews from '@/components/HotNews'
import news from '@/news'
import Categories from '@/components/Categories'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Menu/>
   <div className='mx-20 mt-3'>
    <HotNews news={news}/>
    <Categories news={news}/>
   </div>

   </>
  )
}
