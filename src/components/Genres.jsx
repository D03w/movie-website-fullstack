import React from 'react'

export default function Genres() {
    const genre = [
        {
            name: "Fantastika",
            photo: "https://www.itl.cat/pngfile/big/190-1907031_fantasy-world-painting-art-fantasy-bank-wallpaper-fantastic.jpg"
        },
        {
            name: "Anime",
            photo: "https://4kwallpapers.com/images/wallpapers/anime-girl-2560x1440-15604.jpg"
        },
        {
            name: "Horror",
            photo: "https://images6.alphacoders.com/711/thumb-1920-711337.jpg"
        },
        {
            name: "Komediya",
            photo: "https://wallpaperaccess.com/full/3726109.jpg"
        },
        {
            name: "Kriminal",
            photo: "https://wallpapers.com/images/hd/criminal-minds-american-crime-drama-series-lmmf7oun3lxtps9d.jpg"
        },
        {
            name: "Detektiv",
            photo: "https://cdna.artstation.com/p/assets/images/images/013/375/116/large/mikael-nikfar-detective-movie-poster.jpg?1539290650"
        }
    ]
    return (
        <div className='flex items-center justify-center mt-20'>
            <div className="flex items-center justify-center gap-3">
                {
                    genre.map(item => (
                        <div className='flex flex-col items-center cursor-pointer group'>
                            <div className='w-20 h-20 overflow-hidden rounded-full group-hover:border-3 group-hover:border-red-600/50'>
                                <img className='w-20 h-20 object-cover' src={item.photo} alt="" />
                            </div>
                            <small className='mt-2'>{item.name}</small>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
