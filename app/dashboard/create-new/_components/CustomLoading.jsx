import React from 'react'
import {
    AlertDialog,

    AlertDialogContent,

} from "@/components/ui/alert-dialog"
import Image from 'next/image'

const CustomLoading = ({ loading }) => {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent className='bg-yellow-400 border-yellow-600'>
                <div className='bg-yellow-400 flex flex-col items-center my-10 justify-center'>
                    <Image src={'/software.gif'} alt='loading-Logo' height={100} width={100} />
                    <h2 className='font-bold mt-2'>Generating your video... Do not Refresh</h2>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CustomLoading