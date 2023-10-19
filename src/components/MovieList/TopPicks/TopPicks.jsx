import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation, Pagination} from 'swiper/modules';
import {PiCaretLeftBold} from 'react-icons/pi'
import {PiCaretRightBold} from 'react-icons/pi'
import TopPicksItem from './TopPicksItem';

const movieData = [
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    }
]

const TopPicks = () => {
  return (

    <>

    <div className='flex flex-col gap-y-3  relative mt-[-140px]  '>
        {/* List Heading */}
        <div className='text-[21px] text-white px-[60px] font-semibold'>
            <h2>Top Picks for Wuwut</h2>
        </div>
        <div className='pl-[20px] overflow-hidden w-[100%] pr-0 flex items-center'>
            <div className=' z-[99] right-0 flex items-center justify-center swiper-button-next text-[#E5E5E5] bg-[#141414] bg-opacity-20 py-[68px] px-8 top-[65px]  rounded-[5px]'>
               <PiCaretRightBold className='flex items-center justify-center'/>
            </div>
            <div className=' z-[99] left-0 flex items-center justify-center swiper-button-prev text-[#E5E5E5] bg-[#141414] bg-opacity-20 py-[68px] px-8 top-[65px]  rounded-[5px]'>
               <PiCaretLeftBold className='flex items-center justify-center'/>
            </div>

        </div>
    </div>

    
        {/* Movie List */}
        <Swiper
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={-72} // Adjust this value as needed to control the space between images
        className=' h-[400px] items-center my-custom-swiper '
        >
            {movieData.map((item, index)=> (
                <SwiperSlide key={index} className='-z-[999] hover:-z-50 custom-slide whitespace-nowrap'
                style={{
                    width: '135px', // Adjust the width to accommodate your images
                    minWidth: '135px', // Minimum width
                  }}
                >
                
                     <TopPicksItem index={index}/>
       
                </SwiperSlide>
            ))}
          
         
        </Swiper>
     
        </>
    
 
  )
}

export default TopPicks