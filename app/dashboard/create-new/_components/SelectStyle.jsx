'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const SelectStyle = ({ onUserSelect }) => {

    const styleOpctions = [
        {
            name: "Realstic",
            image: ''
        },
        {
            name: "Cartoon",
            image: ''
        },
        {
            name: "Comic",
            image: ''
        },
        {
            name: "WaterColor",
            image: ''
        },
        {
            name: "GTA",
            image: ''
        },
    ]

    const [selectedOption, setSelectedOpction] = useState();

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-xl text-yellow-400'>Style</h2>
            <p className='text-yellow-600'>Select your video Style</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3'>
                {styleOpctions.map((item, id) => (
                    <div key={id} className={`relative hover:scale-110 transition-all cursor-pointer rounded-xl
                        ${selectedOption == item.name && 'border-2 border-yellow-400'}
                    `}
                    >
                        <Image src={item.image} width={100} height={100} alt={item.name}
                            className='h-48 object-cover rounded-lg w-full'
                            onClick={() => {
                                setSelectedOpction(item.name)
                                onUserSelect('imageStyle', item.name)
                            }}
                        />
                        <h2 className='absolute p-1 bg-yellow-400 bottom-0 w-full text-center rounded-b-lg'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle