'use client'
import React, { FC, PropsWithChildren, useEffect } from 'react';
import Link from 'next/link';

const Menu:FC<PropsWithChildren> = ({children}) => {
    useEffect(() => {
        console.log('RootLayout update1')
    }, []);
    return (
        <div>
            <Link href={'/'} prefetch={false}>Home</Link>
            |
            <Link href={'/test'} prefetch={false}>test</Link>
            |
            <Link href={'/test2'} prefetch={false}>test2</Link>
            |
            <Link href={'/test3'} prefetch={false}>test3</Link>
            |
            <Link href={'/test4'} prefetch={false}>test4</Link>
            |
            <Link href={'/test5'} prefetch={false}>test5</Link>
            {children}
        </div>
    );
};

export default Menu;
