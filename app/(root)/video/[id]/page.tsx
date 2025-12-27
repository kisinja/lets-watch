import React from 'react'

const page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return (
        <main className="wrapper page">
            <h1 className='text-2xl font-karla'>VIDEO ID: {id}</h1>
        </main>
    )
}

export default page