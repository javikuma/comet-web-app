import Image from 'next/image';
import React from 'react';

const HomePage = () => {
    return (
        <section className='py-12'>
            <div className='container'>
                <div className='flex justify-center items-center gap-2 px-8'>
                    <div className='max-w-full w-full'>
                        <span className='text-blue-600 font-bold tracking-tighter'>
                            Core features
                        </span>
                        <h1 className='text-6xl'>
                            Develop ystematically with Comet.
                        </h1>
                        <div className=''></div>
                        <div className=''></div>
                    </div>
                    <div className='max-w-[500px] w-full'>
                        <div className='h-[600px] overflow-hidden rounded-3xl'>
                            <Image
                                src={'/images/hero.jpg'}
                                alt='Hero'
                                width={500}
                                height={400}
                                className=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
