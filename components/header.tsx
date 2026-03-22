import { siteDetails } from '@/constants'

import { GiFruitBowl } from 'react-icons/gi'
import { LuCherry } from 'react-icons/lu'
import { PiCarrotLight, PiHamburgerBold } from 'react-icons/pi'
import CustomImage from './customImage'
const Header = () => {
    return (
        <header className=' bg-extra pb-10'>
            <div className="max-w-[1720px] max-[1100px]:px-12 mx-auto min-h-screen  px-16 py-25">
                <div className="flex items-end justify-evenly w-full mt-16">
                    <GiFruitBowl className='text-4xl p-3  max-md:hidden  w-16 h-16 bg-secondary rounded-full mt-8 animate-vertical max-[1100px]:animate-none' />
                    <h1 className=' text-center  font-syne'>{siteDetails.sub.split("\n").map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}</h1>
                    <LuCherry className='text-4xl  max-md:hidden  p-3 w-16 h-16 animate-vertical max-[1100px]:animate-none bg-extra rounded-full mt-8' />

                </div>
                <div className="flex items-end justify-evenly w-full">
                    <PiHamburgerBold className='text-4xl  max-md:hidden p-3 w-16 h-16 bg-extra border animate-circle  border-primary rounded-full mt-8' />
                    <p className=' text-center  font-syne'>{siteDetails.slogan}</p>
                    <PiCarrotLight className='text-4xl p-3 max-md:hidden  w-16 h-16 bg-primary text-extra animate-random duration-3000 rounded-full mt-8' />

                </div>
                <div className="grid grid-cols-5 max-md:flex max-md:flex-col-reverse  max-md: gap-4 mt-14 max-lg:px-0  max-md:grid-cols-1 w-full max-[1350px]:grid-cols-3 max-lg:grid-cols-2">

                    <div className="flex flex-col gap-6 p-6 max-h-[500px] bg-white rounded-card w-full max-md">
                        <h2 className='font-syne'>95%</h2>
                        <p className='text-xl'>Improved Eating Habits</p>
                        <CustomImage img="/mini1.png" className='w-full rounded-card max-md:h-[300px] object-cover' alt="Hero"  />
                    </div>

                    <CustomImage img="/pic2.png" className='w-full max-[1350px]:hidden max-h-[500px] translate-y-20  object-cover rounded-card' alt="Hero"  />

                    <div className="flex flex-col  gap-6 p-6 justify-between items-center max-h-[500px] max-md:translate-y-0 translate-y-20  rounded-card w-full">
                        <div className="flex gap-6 flex-col items-center justify-center">
                            <button className='btn-trsp'>Try Demo</button>
                            <button>Free Start </button>
                        </div>
                        <div className="w-full rounded-card h-1/2 bg-primary max-md:w-3/4   py-3  flex-col justify-center font-syne text-secondary flex items-center">
                            <h1 className='text-4xl'>30 000+</h1>
                            <p className='text-xl'>Happy Users</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 p-6 max-[1350px]:hidden max-h-[500px] bg-white rounded-card w-full translate-y-20">
                        <CustomImage img="/mini2.png" className='w-full rounded-card' alt="Hero"  />
                        <h2 className='font-syne'>25%</h2>
                        <p className='text-xl'>Saved on Groceries</p>
                    </div>

                    <CustomImage img="/pic1.png" className='w-full  max-h-[500px] object-cover rounded-card max-lg:hidden' alt="Hero"  />

                </div>
            </div>
        </header >
    )
}

export default Header