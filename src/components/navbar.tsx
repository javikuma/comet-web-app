'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <div className='container'>
            <div className='flex justify-between items-center h-20 '>
                <div className='hidden sm:block'>
                    <SocialLinkItem />
                </div>
                <Logo />
                <div className=''>
                    <MenuButton
                        toggleDrawer={toggleDrawer}
                        isDrawerOpen={isDrawerOpen}
                    />
                    <Drawer
                        isOpen={isDrawerOpen}
                        toggleDrawer={toggleDrawer}
                        path={path}
                    />
                </div>
            </div>
        </div>
    );
};

const MenuButton = ({
    toggleDrawer,
    isDrawerOpen,
    className,
}: {
    toggleDrawer: () => void;
    isDrawerOpen: boolean;
    className?: string;
}) => (
    <button
        onClick={toggleDrawer}
        className={`flex p-2 focus:outline-none ${className}`}
    >
        <div className='relative w-10 h-6'>
            <span
                className={cn(
                    'absolute block w-10 h-0.5 bg-black/80 transition-all duration-300 ease-in-out',
                    isDrawerOpen ? 'rotate-45 top-3' : 'rotate-0 top-2'
                )}
            ></span>
            <span
                className={cn(
                    'absolute block w-10 h-0.5 bg-black/80 transition-all duration-300 ease-in-out',
                    isDrawerOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
                )}
            ></span>
        </div>
    </button>
);

const socialLinks = [
    { name: 'x', icon: '/images/social/x.svg', href: '#' },
    { name: 'ig', icon: '/images/social/ig.svg', href: '#' },
    { name: 'in', icon: '/images/social/in.svg', href: '#' },
    { name: 'dr', icon: '/images/social/dr.svg', href: '#' },
];

const SocialLinkItem = ({ className }: { className?: string }) => (
    <ul className={`flex items-center gap-3 ${className}`}>
        {socialLinks.map((link) => (
            <li key={link.name} className='group'>
                <Link href={link.href} className='group-hover:opacity-70'>
                    <Image
                        src={link.icon}
                        width={20}
                        height={20}
                        alt={link.name}
                    />
                </Link>
            </li>
        ))}
    </ul>
);

const Drawer = ({
    isOpen,
    toggleDrawer,
    path,
}: {
    isOpen: boolean;
    toggleDrawer: () => void;
    path: string;
}) => (
    <div
        className={`fixed inset-y-0 -right-0 z-20 w-full bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
    >
        <div className='p-4 flex flex-col h-full'>
            <MenuButton
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isOpen}
                className='justify-end mt-[4px] mr-[16px]'
            />
            <div className='mt-14 space-y-4 flex flex-col items-center text-xl tracking-tight'>
                <Logo className='mr-6 mb-8' />
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={
                            cn(
                                'block hover:text-black/70 duration-100',
                                path === item.href
                                    ? 'font-bold '
                                    : 'font-normalregular'
                            ) + ' cursor-pointer'
                        }
                        // className='block hover:text-black/60 duration-100'
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className='block'>
                <SocialLinkItem className='justify-center mt-16' />
            </div>
        </div>
    </div>
);

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default Navbar;
