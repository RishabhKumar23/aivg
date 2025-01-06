import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 px-5 shadow-md shadow-black'>
            <div className='flex gap-3 items-center'>
                {/* add image */}
                {/* <Image src={"/logo"} width={30} height={30} /> */}
                <h2 className='font-bold text-xl'>Ai Video Generator</h2>
            </div>
            <div className='flex gap-3 items-center'>
                <Button variant='default'>Dashboard</Button>
                <UserButton />
            </div>
        </div>
    )
}

export default Header