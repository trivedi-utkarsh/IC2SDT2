'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import HeadlineScroller from "@/components/homePage/Heading";

import ImportantDates from "./ImportantDates";

import bg6 from "@/public/banner/6.png";
import bg7 from "@/public/banner/7.png";
import bg1 from "@/public/banner/1.png";
import bg2 from "@/public/banner/2.png";
import bg3 from "@/public/banner/3.png";
import bg4 from "@/public/banner/4.png";
import bg5 from "@/public/banner/5.png";

const sliderImages = [bg7, bg1, bg2, bg3, bg4, bg5, bg6];

export default function HeroSection() {
    const swiperRef = useRef(null);

    const headlines = [
        "🚨 Paper Submission Link : Paper Submission Closes on 30th August 2005.",
    ];

    return (
        <>
            <section className="relative w-full h-auto">
                {/* Buttons */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" />
                    </svg>
                </button>

                <Swiper
                    modules={[Autoplay, Pagination, EffectCreative]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    pagination={{ clickable: true, el: '.swiper-pagination' }}
                    className="w-full h-auto"
                >
                    {sliderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    width={1920}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination dots */}
                <div className="swiper-pagination !bottom-4 !text-white" />
            </section>
            <HeadlineScroller headlines={headlines} />
            <ImportantDates />
        </>
    );
}
