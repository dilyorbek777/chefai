import { siteDetails } from '@/constants'
import Image from 'next/image'
import { GiFruitBowl } from 'react-icons/gi'
import { LuCherry } from 'react-icons/lu'
import { PiCarrotLight, PiHamburgerBold } from 'react-icons/pi'
const Header = () => {
    return (
        <header className=' bg-extra'>
            <div className="w-max-w-[1720px] mx-auto min-h-screen  px-24 py-25">
                <div className="flex items-end justify-evenly w-full mt-16">
                    <GiFruitBowl className='text-4xl p-3  w-16 h-16 bg-secondary rounded-full mt-8 animate-vertical' />
                    <h1 className=' text-center  font-syne'>{siteDetails.sub.split("\n").map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}</h1>
                    <LuCherry className='text-4xl  p-3 w-16 h-16 animate-vertical bg-extra rounded-full mt-8' />

                </div>
                <div className="flex items-end justify-evenly w-full">
                    <PiHamburgerBold className='text-4xl  p-3 w-16 h-16 bg-extra border animate-circle  border-primary rounded-full mt-8' />
                    <p className=' text-center  font-syne'>{siteDetails.slogan}</p>
                    <PiCarrotLight className='text-4xl p-3  w-16 h-16 bg-primary text-extra animate-random duration-3000 rounded-full mt-8' />

                </div>
                <div className="grid grid-cols-5 gap-4 mt-14 px-24">

                    <div className="flex flex-col gap-6 p-6 bg-white rounded-card w-full">
                        <h2>95%</h2>
                        <p>Improved Eating Habits</p>
                        <Image src="/mini1.png" className='w-full rounded-card' alt="Hero" width={500} height={500} />
                    </div>

                    <Image src="/pic2.png" className='w-full translate-y-20 h-full object-cover rounded-card' alt="Hero" width={500} height={500} />

                    <div className="flex flex-col gap-6 p-6 justify-between items-center translate-y-20 rounded-card w-full">
                        <div className="flex gap-6 flex-col items-center justify-center">
                            <button className='btn-trsp'>Try Our Demo</button>
                            <button>Start For Free</button>
                        </div>
                        <div className="w-full rounded-card h-1/2 bg-primary flex-col justify-center font-syne text-secondary flex items-center">
                            <h1 className='text-4xl'>30 000+</h1>
                            <p className='text-2xl'>Happy Users</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 p-6 bg-white rounded-card w-full translate-y-20">
                        <Image src="/mini2.png" className='w-full rounded-card' alt="Hero" width={500} height={500} />
                        <h2>25%</h2>
                        <p>Saved on Groceries</p>
                    </div>

                    <Image src="/pic1.png" className='w-full  h-full object-cover rounded-card' alt="Hero" width={500} height={500} />

                </div>
            </div>
        </header >
    )
}

export default Header