import Header from '@/components/Header';
import React from 'react'

const page = async ({ params }: ParamsWithSearch) => {
    const id = (await params).id;
    return (
        <div className='wrapper page'>

            <Header
                subHeader='elviskiarie25@gmail.com'
                title='Elvis Kiarie'
                userImg='/assets/images/dummy.jpg'
            />

            <h1 className='text-2xl font-karla'>USER ID: {id}</h1>
        </div>
    )
}

export default page