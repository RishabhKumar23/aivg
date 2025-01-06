'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'

const CreateNew = () => {

    const [formData, setFormData] = useState();
    const onhandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)
    }

    return (
        <div className='md:px-20'>
            <h2 className='font-bold text-4xl text-center text-yellow-400'>Create New</h2>

            <div className='mt-10 shadow-md shadow-yellow-400 p-10'>
                {/* Select topic */}
                <SelectTopic onUserSelect={onhandleInputChange} />
                {/* Select style */}

                {/* Select Duration */}

                {/* Select Component */}
            </div>
        </div>
    )
}

export default CreateNew