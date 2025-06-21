import { PlayCircleIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import { AutoGet } from '../config/AppService/AppService';
import { APP_API } from '../config/BaseConfig';

export default function Carousel() {
    const [slides, setSlides] = useState([])
    const [current, setCurrent] = useState(0);

    const getAll = async () => {
        const res = await AutoGet(APP_API.movie)
        console.log(res)

        setSlides(res.data)
    }

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        getAll()
        const interval = setInterval(nextSlide, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-screen mx-auto">
            <div className="relative overflow-hidden shadow-lg h-100 md:h-150">
                {slides?.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.photo}
                        alt={slide.title}
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full text-white p-4">
                    <h2 className="text-xl md:text-2xl font-bold">{slides?.[current]?.title}</h2>
                    <p>{slides?.[current]?.description}</p>
                    <small className='bg-gray-300/25 p-1 rounded mt-2'>{slides?.[current]?.movieType}</small><br />
                    <button className='p-2 rounded-lg bg-red-600/25 mt-2 cursor-pointer hover:bg-red-600 flex items-center'>Ko'rish
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 ms-1">
                            <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                        </svg>
                    </button>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                >
                    &#10095;
                </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {slides?.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
