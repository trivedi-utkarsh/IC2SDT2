"use client";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import ImportantDates from "./ImportantDates";
import { dates } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import bg6 from "@/public/banner/6.png";
import bg1 from "@/public/banner/1.png";
import bg2 from "@/public/banner/2.png";
import bg3 from "@/public/banner/3.png";
import bg4 from "@/public/banner/4.png";
import bg5 from "@/public/banner/5.png";

const sliderImages = [bg1, bg2, bg3, bg4, bg5, bg6];

export default function HeroSection() {
    return (
        <>
            <section className="relative w-full h-auto">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <ImportantDates />
        </>
    );
}
