'use client'
import { Button } from '@/components/ui/button';
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideNav = () => {

    const MenuOption = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft,
        },
        {
            id: 2,
            name: 'Create New',
            path: '/create-new',
            icon: FileVideo,
        },
        {
            id: 3,
            name: 'Account',
            path: '/account',
            icon: CircleUser,
        },
        {
            id: 4,
            name: 'Upgrade',
            path: '/upgrade',
            icon: ShieldPlus,
        },
    ];

    // To Check which tab is active
    const path = usePathname();


    return (
        <div className="w-64 h-screen shadow-md p-5">
            <div className="grid gap-3 pt-5">
                {MenuOption.map((item) => (
                    <Link key={item.id} href={item.path}>
                        <Button
                            variant="default"
                            className={`flex items-center justify-start w-full h-14 gap-4 px-4
                                ${path == item.path && 'bg-white text-black hover:bg-white'}    
                            `}
                        >
                            <item.icon className="w-6 h-6" />
                            <h2 className="font-bold text-lg">{item.name}</h2>
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
