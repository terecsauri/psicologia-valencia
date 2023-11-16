"use client"

import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SlidesInt } from '../services/slider';

export default function Carrusel({ slides }: any) {
    return (
        <div
            style={{
                width: "50vw"
                
            }}
            
        >
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{delay: 3000 }}
            
            

            
        >
            {slides.map((slide: SlidesInt) => (
                <SwiperSlide key={slide.name}>
                    <div className='border-2 p-5 rounded-xl relative z-0 flex flex-col items-center'>
                        <div className="flex justify-center">
                            <div className="w-12 h-12  rounded-full bg-blue-500 text-white flex items-center justify-center rounded-full uppercase text-lg font-bold mr-4">
                                {slide.inicial}
                            </div>
                            <p className=" flex  font-bold">{slide.name}</p>
                        </div>
                        <div className="flex justify-center">

                            <div className="text-yellow-500">{slide.estrellas}</div>
                            <div className="text-gray-400">{slide.estrellas2}</div>
                        </div>
                        <p className="text-2xl font-bold text-cyan-950">{slide.title}</p>
                        <p className="mt-2 max-sm:text-sm">{slide.body}</p>
                    </div>
                </SwiperSlide>
                
            ))}
        </Swiper>
        </div>
    )
}

