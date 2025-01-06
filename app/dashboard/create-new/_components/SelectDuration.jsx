import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const SelectDuration = ({ onUserSelect }) => {
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-xl text-yellow-400'>Duration</h2>
            <p className='text-yellow-600'>Select the duration of your video</p>

            <Select onValueChange={(value) => {
                value != 'Custom Prompt' && onUserSelect('duration', value)
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg bg-yellow-400">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent className="bg-yellow-400">
                    <SelectItem value='15 Seconds'>15 Seconds</SelectItem>
                    <SelectItem value='30 Seconds'>30 Seconds</SelectItem>
                    <SelectItem value='45 Seconds'>45 Seconds</SelectItem>
                    <SelectItem value='60 Seconds'>60 Seconds</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectDuration