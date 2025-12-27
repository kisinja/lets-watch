import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
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

            <section className="video-grid">
                {
                    dummyCards.map(c => (
                        <VideoCard
                            key={c.id}
                            {...c}
                        />
                    ))
                }
            </section>
        </div>
    )
}

export default page