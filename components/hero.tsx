import { MapPin, Phone, Star, BadgeCheck, FacebookIcon, InstagramIcon } from 'lucide-react';
import Image from 'next/image';
import img from '../images/ferrari.jpg'

export function Hero() {
    return (
        <section id="main" className="bg-main">
            {/* Green top row with contact info */}
            <div className="h-auto bg-row w-full text-white flex items-center justify-center gap-8 py-2 px-4 text-sm">
                <div className="flex items-center gap-2 text-md italic">
                    <MapPin className="w-6 h-6" />
                    <span>Anywhere on the Iow</span>
                </div>
                <div className="flex items-center gap-2 text-md italic">
                    <Phone className="w-6 h-6" />
                    <span>07729 669008</span>
                </div>
            </div>
            <div className='text-center px-6 pt-4 text-white text-4xl'>
                <h1>Car Detailing and Valet Service on the Isle of Wight</h1>
                <div className="flex justify-start items-start gap-1 mt-2 text-yellow-400 pt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" stroke="none" className="w-5 h-5" />)}
                </div>
                <p className="italic text-sm mt-1 text-start">From Over 20+ Reviews</p>
            </div>
            <div className="rounded-2xl overflow-hidden mt-4 w-full max-w-md mx-auto shadow-lg">
                <Image
                    src={img}
                    alt="Red Ferrari"
                    width={600}
                    height={400}
                    className="w-full"
                />
            </div>
            <div className='bg-offwhite'>
                <div className="flex justify-center gap-6 mt-4 text-grn font-medium text-sm pt-2">
                    <div className="flex items-center gap-1">
                        <BadgeCheck className="w-7 h-7" />
                        <span className='text-md'>10+ Years experience</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BadgeCheck className="w-7 h-7" />
                        <span className='text-md'>Trusted Professionals</span>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-4 items-center">
                    <button className="bg-[#1d2A3B] text-white font-bold px-6 py-3 rounded w-full max-w-sm text-lg">
                        Request a free Quote
                    </button>
                    <button className="border border-[#1d2a3b] px-6 py-3 rounded w-full max-w-sm text-lg text-[#1d2a3b]">
                        View all our services
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6 pb-2">
                    <FacebookIcon></FacebookIcon>
                    <InstagramIcon></InstagramIcon>
                </div>
            </div>
        </section >
    )
}