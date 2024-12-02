import Image from 'next/image';
import React from 'react';
import imglogo from '../../public/assets/image/Green and Brown Minimalist Studio Logo Design Template.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navdetails = () => {
    return (
        <div>

        </div>
    );
}


const Nav = () => {



    return (
        <div className=' flex bg-orange-100 flex-row justify-between items-center p-0 px-[5rem] '>
            <div className=''>
                {/* logo */}
                <Image src={imglogo} className='h-44 w-44' alt='logo' />
            </div>

            <div>
                {/* detail */}
                <ul className='flex justify-between items-start gap-10'>
                    <button className='bg-btn p-2 rounded-md '>
                        <li className='text-text3 font-bold' >
                            طلب عرض سعر
                        </li>
                    </button>
                    <div className='w-7 cursor-pointer text-white'>
                        <FontAwesomeIcon icon={faBars} />
                    </div>



                </ul>
            </div>


        </div>
    );
}

export default Nav;
