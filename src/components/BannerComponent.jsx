import React from 'react'
import Image from '../assets/hero.png'
function BannerComponent() {
    return (
        <>
            <div className='flex flex-row justify-center items-center max-w-[1200px] mx-auto py-5'>
                <div className='w-[100%] lg:w-[50%] h-full px-5 lg:2.5'>
                    <div className='flex flex-col justify-start items-start mb-5'>
                        <h1 className='text-black font-extrabold text-[36px] md:text-[48px] lg:text-[60px] mb-5'>Building digital<br />
                            products & brands.</h1>
                        <p className='text-grey font-light text-[16px] md:text-[18px]  lg:text-[20px] mb-2'>This free and open-source landing page template was built using the utility classes from Tailwind CSS and based on the components from the Flowbite Library and the Blocks System.</p>
                    </div>
                    <div className='banner-buttons-container gap-5 justify-start items-start'>
                        <a className='flex flex-row justify-start items-center gap-2 px-5 py-2 border border-gray-200 rounded-lg' href="#">
                            <svg class="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            View on GitHub
                        </a>
                        <a className='flex flex-row justify-start items-center gap-2 px-5 py-2 border border-gray-200 rounded-lg' href="#">
                            <svg class="w-5 h-5 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500"><path id="path0_fill" fill='#0acf83' d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"></path><path id="path1_fill" fill='#a259ff' d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"></path><path id="path1_fill_1_" fill='#f24e1e' d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"></path><path id="path2_fill" fill='#ff7262' d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"></path><path id="path3_fill" fill='#1abcfe' d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"></path></svg>
                            Get Figma Design
                        </a>

                    </div>
                </div>
                <div className='hidden md:none lg:block w-[50%] '>
                    <img src={Image} width={600} height={400} />
                </div>
            </div>
        </>
    )
}

export default BannerComponent
