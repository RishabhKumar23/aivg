'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

const CreateNew = () => {

    const [formData, setFormData] = useState();
    const onhandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue);

        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    return (
        <div className='md:px-20'>
            <h2 className='font-bold text-4xl text-center text-yellow-400'>Create New</h2>

            <div className='mt-10 shadow-md shadow-yellow-400 p-10'>
                {/* Select topic */}
                <SelectTopic onUserSelect={onhandleInputChange} />
                {/* Select style */}
                <SelectStyle onUserSelect={onhandleInputChange} />
                {/* Select Duration */}
                <SelectDuration onUserSelect={onhandleInputChange} />
                {/* Create Button */}
                <Button className="mt-10 w-full">Create video</Button>
            </div>
        </div>
    )
}

export default CreateNew