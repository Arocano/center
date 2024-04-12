'use server'
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image';
import { FaInstagramSquare, FaFacebook, FaSearchLocation } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useState } from 'react'
import Link from 'next/link';
const query = '*[_type == "promociones"]';
const queryse = '*[_type == "servicios"]';
const querypi = '*[_type == "pista"]';
const Home = async () => {

    const prom = await client.fetch<SanityDocument>(query);
    const serv = await client.fetch<SanityDocument>(queryse);
    const pi = await client.fetch<SanityDocument>(querypi);
    console.log(pi)
    return (

        <div className='flex flex-col'>
            <div className='fixed w-full bg-white bg-opacity-5'>
                <Image
                    className="object-cover max-w-24 lg:max-w-xl"
                    src="/images/logo-text-w.svg"
                    width={250}
                    height={300}
                    quality={100}
                    alt={"logo"}
                />
            </div>
            <div className='flex flex-col sm:flex-col lg:flex-row md:flex-col h-screen'>
                <div className='lg:flex-1 h-96 md:lg-full lg:h-full bg-banner bg-cover bg-no-repeat bg-black flex flex-col gap-5 text-white text-center items-center justify-center'>

                    <h1 className='font-semibold text-[35px] lg:text-[70px]'> ¿TE ATREVES A GANAR?</h1>
                    <h2 className='font-thin text-[20px] lg:text-[40px]'>LA MEJOR EXPERIENCIA KARTING EN EL CENTRO DEL PAÍS</h2>
                    <Link
                        className="font-thin text-[15px] lg:text-[35px] bg-red-700 bg-cover rounded-lg px-12 py-4 h-auto w-auto " href="https://wa.me/+593984407445?text=Hola%20deseo%20agendar%20una%20sesión"
                        target="_blank"
                    >AGENDA AHORA</Link>

                </div>
                <div className='lg:h-full lg:flex-1 bg-red-700 flex  justify-center lg:items-end '>
                    <Image
                        className='lg:max-w-full md:max-w-[500px]'
                        src="/images/woman-men.svg"
                        width={1000}
                        height={100}
                        quality={100}
                        alt={"no"}
                    />
                </div>
            </div>

            <div className="flex  items-center  w-full h-56  bg-white">
                <h1 className=" ml-8 lg:ml-24 font-semibold text-[45px] lg:text-[100px] opacity-15">PROMOCIONES</h1>
                <h1 className="font-semibold text-[45px] lg:text-[100px] text-black lg:-translate-x-[670px] -translate-x-[300px] translate-y-4 lg:translate-y-9">PROMOCIONES</h1>
            </div>

            <div className='bg-black w-full flex items-center justify-center '>
                <Carousel className="max-w-64  sm:max-w-sm md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl mt-4">
                    <CarouselContent className="">
                        {prom.map((pro: any, index: any) => (
                            <CarouselItem key={index} className="  md:basis-1/3 ">
                                <Image
                                    className="rounded-2xl mb-4  max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                                    src={urlForImage(pro?.image)}
                                    width={500}
                                    height={500}
                                    quality={100}
                                    alt={"items"}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="flex  items-center  w-full h-56  bg-white">
                <h1 className=" ml-8 lg:ml-24 font-semibold text-[45px] lg:text-[100px]  opacity-15">SERVICIOS</h1>
                <h1 className="font-semibold text-[45px] lg:text-[100px]  text-black lg:-translate-x-[450px] -translate-x-[200px] translate-y-4 lg:translate-y-9">SERVICIOS</h1>
            </div>

            <div className='bg-gray-200 w-full flex items-center justify-center '>
                <Carousel className="max-w-64  sm:max-w-sm md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl mt-4">
                    <CarouselContent className="">
                        {serv.map((pro: any, index: any) => (
                            <CarouselItem key={index} className="  md:basis-1/3 ">
                                <Image
                                    className="rounded-2xl mb-4 max-h-96 min-h-96 bg-top bg-[#1d1d20] "
                                    src={urlForImage(pro?.image)}
                                    width={500}
                                    height={500}
                                    quality={100}
                                    alt={"no"}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="flex  items-center  w-full h-56  bg-white">
                <h1 className=" ml-8 lg:ml-24 font-semibold text-[45px] lg:text-[100px]  opacity-15">PISTA</h1>
                <h1 className="font-semibold text-[45px] lg:text-[100px]  text-black lg:-translate-x-[240px] -translate-x-[100px] translate-y-4 lg:translate-y-9">PISTA</h1>
            </div>

            <div className='bg-red-700 w-full flex items-center justify-center '>
                <Carousel className="max-w-64  sm:max-w-sm md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl mt-4">
                    <CarouselContent className="">
                        {pi.map((pro: any, index: any) => (
                            <CarouselItem key={index} className="  md:basis-1/2">
                                <Image
                                    className="rounded-2xl mb-4  max-h-96 min-h-96 bg-top bg-[#1d1d20] w-full"
                                    src={urlForImage(pro?.image)}
                                    width={500}
                                    height={500}
                                    quality={100}
                                    alt={"no"}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="flex  items-center  w-full h-56  bg-white">
                <h1 className="ml-8 lg:ml-24 font-semibold text-[45px] lg:text-[100px] opacity-15">Contáctanos</h1>
                <h1 className="font-semibold text-[45px] lg:text-[100px]  text-black lg:-translate-x-[550px] -translate-x-[250px] translate-y-4 lg:translate-y-9">Contáctanos</h1>
            </div>

            <div className='bg-white w-full flex items-center justify-center  flex-col my-2 gap-4'>
                <div className='w-full flex flex-row items-center justify-center lg:gap-32'>
                    <div className="flex flex-col gap-3 items-center justify-center ml-1">
                        <Image
                            className="object-cover max-w-32"
                            src="/images/dot-location.svg"
                            width={250}
                            height={300}
                            quality={100}
                            alt={"logo"}
                        />
                        <div className='my-2'>
                            <p><strong>Dirección:</strong> Gabriel García Mogrovejo, Ambato, Ecuador</p>
                            <p><strong>Teléfono:</strong> 0984407445-0987577766-0984585068</p>
                            <p><strong>Correo Electrónico:</strong> topracingcenter@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <Image
                            className="object-cover max-w-32"
                            src="/images/clock.svg"
                            width={250}
                            height={300}
                            quality={100}
                            alt={"logo"}
                        />
                        <div className='my-2'>
                            <p><strong>Horarios de Atención:</strong></p>
                            <ul>
                                <li>Martes: Previa Reserva</li>
                                <li>Miércoles a Viernes: 15:00 - 20:00</li>
                                <li>Sábado y Domingo: 12:00 - 20:00</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <Link
                        className="font-thin text-white text-[35px] bg-red-700 bg-cover rounded-lg px-12 py-4 h-auto w-auto " href="https://wa.me/+593984407445?text=Hola%20deseo%20agendar%20una%20sesión"
                        target="_blank"
                >¡Llámanos ahora!</Link>
            </div>

            <div className='bg-black w-full flex flex-col items-center justify-center  gap-4 '>
                <div className='flex '>
                    <Image
                        className="object-cover max-w-32 mt-10"
                        src="/images/logo-white.svg"
                        width={250}
                        height={300}
                        quality={100}
                        alt={"logo"}
                    />
                </div>
                <div className='flex text-white text-[25px] justify-center items-center gap-3 mb-5'>
                    <Link href="https://www.instagram.com/topracingcenter.amb/" target="_blank">
                        <FaFacebook />
                    </Link>

                    <Link href="https://www.instagram.com/topracingcenter.amb/" target="_blank">
                        <FaInstagramSquare />
                    </Link>
                </div>

            </div>


        </div>
    )


};


export default Home;