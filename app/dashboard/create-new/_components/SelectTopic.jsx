'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const SelectTopic = ({ onUserSelect }) => {

    const options = ["Custom Prompt", 'AI Story', "Scary Story", "Kid Story", "Bed time Story", "Historical Facts", "Motivational", "Fun Facts"]
    const [selectedOption, setSelectedOpction] = useState();

    return (
        <div>
            <h2 className='font-bold text-xl text-yellow-400'>Content</h2>
            <p className='text-yellow-600'>what is the topic of your video</p>

            <Select onValueChange={(value) => {
                setSelectedOpction(value)
                value != 'Custom Prompt' && onUserSelect('topic', value)
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg bg-yellow-400">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent className="bg-yellow-400">
                    {options.map((item, id) => (
                        <SelectItem key={id} value={item} className="text-xl cursor-pointer">{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {selectedOption == 'Custom Prompt' &&
                <Textarea className="mt-3 text-yellow-600 placeholder:text-yellow-600"
                    placeholder="Write prompt..."
                    onChange={(e) => onUserSelect('topic', e.target.value)}
                />
            }
        </div>
    )
}

export default SelectTopic