import React from 'react';
import { Button } from '@headlessui/react'
import Images2 from '../../assets/images/Images2.png'

const Intro = () =>{
    return (
        <div className='flex my-auto bg-sky-200'>
            <div className='mt-[95px] mb-[100px] ml-[90px]'>
                <div className=' font-inter text-4xl font-bold pt-20 pl-4'>
                    MENDUKUNG KESEHATAN IBU DAN ANAK
                </div>
                <div className='font-inter text-4xl font-bold pl-4 text-[#293bdd]'>
                    BERSAMA POSYANDU
                </div>
                <p className='font-inter text-xl font-normal p-4'>
                Dengan berpartisipasi aktif di Posyandu, kita bersama-sama menjaga kesehatan ibu dan anak sejak dini, memastikan pertumbuhan optimal dan masa depan yang cerah bagi generasi penerus bangsa.
                </p>
                <Button className="rounded ml-[20px] bg-sky-600 py-2 px-7 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                    Dashboard
                </Button>
                </div>
                <div>
                <div className='flex  mt-[60px] ml-[20px] mr-[40px]'>
                    <img src={Images2} alt=""  />
                </div>
                </div>
        </div>
    )
}

export default Intro;