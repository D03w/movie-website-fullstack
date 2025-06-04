import React from 'react'

export default function Series() {
    const movies = [
        {
            title: "Squid game",
            image: "https://images6.alphacoders.com/119/1191374.jpg",
            rating: "9.0",
            genre: "Action, Crime",
        },
        {
            title: "Money Heist",
            image: "https://wallpapercat.com/w/full/8/5/8/247861-1920x1080-desktop-1080p-money-heist-wallpaper-photo.jpg",
            rating: "8.8",
            genre: "Sci-Fi, Thriller",
        },
        {
            title: "Mr Robot",
            image: "https://wallpapercat.com/w/full/b/5/5/178479-3840x2160-desktop-4k-mr-robot-background-image.jpg",
            rating: "8.6",
            genre: "Adventure, Drama, Sci-Fi",
        },
        {
            title: "Arcane",
            image: "https://motionbgs.com/media/5201/arcane.jpg",
            rating: "8.3",
            genre: "Adventure, Drama, Sci-Fi",
        },
    ];
    return (
        <div className='p-4 mt-10'>
            <div className='border-l-3 border-red-600/50'>
                <h1 className='ms-3 text-[25px] cursor-pointer'>Seriallar</h1>
            </div>
            <div className='items-center justify-center grid grid-cols-4 gap-4 mt-7'>
                {
                    movies.map(item => (

                        <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                                />
                                <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                                    ⭐ {item.rating}
                                </div>
                            </div>
                            <div className="p-4 space-y-1">
                                <h3 className="text-lg font-semibold truncate">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.genre}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex mt-7 justify-center w-full">
                <button className='p-2 rounded-lg bg-red-600/25 cursor-pointer hover:bg-red-600'>Yana Ko'rsatish</button>
            </div>
        </div>
    )
}
