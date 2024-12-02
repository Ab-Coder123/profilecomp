import Image from 'next/image';
import React from 'react';
import imgheader from '../../public/assets/image/h1.png'
import img2 from '../../public/assets/image/header/1.png'
const Header = () => {
    return (
        <div className='headimg items-center border-orange-500 border-2  bg-background overflow-hidden relative top-56 w-[120%] '>
            <div className=' absolute top-0 -left-[60rem] '>
                <Image src={img2} alt='header' className=' opacity-20 w-[30%] ' />
            </div>

            <div className='  px-20 gap-16 pt-14  flex items-center justify-between mr-[5rem] '>
                <div className=' w-full flex flex-col items-start justify-start gap-y-7'>
                    <div>
                        <h2 className='text-5xl font-bold w-[35rem] '>نصمم حلولًا رقمية مبتكرة
                            لدعم نجاح أعمالك</h2>
                    </div>
                    <div>
                        <p className='text-xl text-text3 font-bold '>
                            سواء كنت صاحب شركة صغيرة أو متجر إلكتروني، ديجاتوبيا هنا لتقديم خدمات تصميم المواقع، المتاجر الإلكترونية، SEO، والتسويق الإلكتروني لتحقيق نجاحك.
                        </p>
                    </div>
                    <div>
                        <button className=' cursor-pointer bg-text p-3 rounded-2xl text-white font-medium'>
                            احصل على استشارة مجانية الآن
                        </button>
                    </div>
                </div>
                <div className='absolute top-96 -right-20  w-[30%] '>
                    <Image src={img2} alt='header' className=' shadow-md opacity-20 ' />
                </div>
                    <Image src={imgheader} alt='header' className='w-[80%] -mr-40' />
            </div>


        </div>
    );
}

export default Header;
