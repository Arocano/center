'use server'
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image';

import React, { useState } from 'react'
const query = '*[_type == "promociones"]';
const Home = async () => {

    const prom = await client.fetch<SanityDocument>(query);
    console.log(prom)
    return (

        <div className='flex flex-col'>
            <div className='fixed w-full bg-white bg-opacity-5'>
                <Image
                    className="object-cover"
                    src="/images/logo-text-w.svg"
                    width={250}
                    height={300}
                    quality={100}
                    alt={"logo"}
                />
            </div>
            <div className='flex flex-col sm:flex-col lg:flex-row md:flex-row h-screen'>
                <div className='flex-1 h-full bg-banner bg-cover bg-no-repeat bg-black flex flex-col gap-5 text-white text-center items-center justify-center'>

                    <h1 className='font-semibold text-[70px]'> ¿TE ATREVES A GANAR?</h1>
                    <h2 className='font-thin text-[40px]'>LA MEJOR EXPERIENCIA KARTING EN EL CENTRO DEL PAÍS</h2>
                    <Button
                        className="font-thin text-[35px] bg-red-700 bg-cover rounded-lg px-12 py-4 h-auto w-auto "
                    >AGENDA AHORA</Button>

                </div>
                <div className='h-full lg:flex-1'>
                    
                </div>
            </div>


            <div className="flex  items-center  w-full h-56  bg-white">

                <h1 className="ml-24 font-semibold text-[100px] opacity-15">PROMOCIONES</h1>
                <h1 className="font-semibold text-[100px] text-black -translate-x-[670px] translate-y-9">PROMOCIONES</h1>


            </div>

            <div className='flex bg-black'>
                <ul className=" h-full grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
                    {prom.map((pro: any) => (
                        <li
                            className="my-4 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md track"
                            key={pro._id}
                        >
                            <h2 className="text-xl font-semibold">{pro?.name} sss</h2>
                            <Image
                                className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                                src={urlForImage(pro?.image)}
                                width={400}
                                height={400}
                                quality={100}
                                alt={"no"}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )


};


export default Home;