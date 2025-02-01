import React from 'react';
import { sFetch } from '@/app/sfetch';

const getData = async () => {
    return await sFetch<{id: string}[]>(`https://api.thecatapi.com/v1/images/search`, {
        next: {revalidate: 15},
    });
};
const Page = async () => {
    const data = await getData();
    console.log('test',data![0].id)
    return (
        <div className={'text-orange-500'}>
            test update
        </div>
    );
};

export default Page;
