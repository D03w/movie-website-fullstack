import { PlayCircleIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';


const slides = [
    {
        title: "Game of Thrones",
        description: "Game of Thones Best Tv Series",
        type: "serial",
        button: "Ko'rish",
        image: "https://static.hbo.com/game-of-thrones-1-1920x1080.jpg",
    },
    {
        title: "The Witcher",
        description: "The Witcher Best Tv Series",
        type: "serial",
        button: "Ko'rish",
        image: "https://images.alphacoders.com/131/1319720.jpeg",
    },
    {
        title: "Solo Leveling",
        description: "Game of Thones Best Tv Series",
        type: "anime serial",
        button: "Ko'rish",
        image: "https://motionbgs.com/media/2770/shadows-army-solo-leveling.jpg",
    },
    {
        title: "Breaking Bad",
        description: "Game of Thones Best Tv Series",
        type: "serial",
        button: "Ko'rish",
        image: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUZRetY0NwWkIBQ-9QF0PLIDcuUCPKgno_8riE_In9tHRgqqTTSG-vGiP5ctXrVMY4PESkV5-x1LE_MGn32QtUZfnoNR4Hx9GoRI.jpg?r=9fa",
    },
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-screen mx-auto">
            <div className="relative overflow-hidden shadow-lg h-100 md:h-150">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt={slide.title}
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full text-white p-4">
                    <h2 className="text-xl md:text-2xl font-bold">{slides[current].title}</h2>
                    <p>{slides[current].description}</p>
                    <small className='bg-gray-300/25 p-1 rounded mt-2'>{slides[current].type}</small><br />
                    <button className='p-2 rounded-lg bg-red-600/25 mt-2 cursor-pointer hover:bg-red-600 flex items-center'>{slides[current].button}
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
                {slides.map((_, index) => (
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
