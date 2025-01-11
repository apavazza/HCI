"use client"; // Add this at the top of the file to mark the component as a Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {


  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* HERO SECTION */}
      <div className="h-screen flex flex-wrap justify-around bg-green-200 w-full border border-gray-200 shadow-md">
        <div className='flex flex-col justify-center'>
          <h2 className="ml-7 pt-10 p-3">Human stories & ideas</h2>
          <span className="ml-7 p-3">Unlock Your Voice With Professional Blogging Services</span>
          <span className="ml-10 block w-48 m-2 p-3 border bg-black text-white text-center hover:bg-green-800 active:bg-green-700">TRY IT FOR FREE</span>
        </div>
        <Image 
          className='mr-10 object-contain' 
          src="/images/home/image-from-rawpixel-id-9975730-original.png" 
          alt="Hero Image" 
          width={400} 
          height={50} 
        />
      </div>
      {/* SECOND SECTION */}
      <div className='h-screen w-full flex flex-wrap justify-around items-center bg-green-500 border border-gray-200 shadow-md'>
        <div className='flex flex-col justify-center'>
          <h3 className='p-10 text-2xl'>Build your blog your way</h3>
          <div>
            <h4 className='ml-10 mb-5 p-1 text-xl'>Design a unique blog</h4>
            <h4 className='ml-10 mb-5 p-1 text-xl'>Establish your site’s domain name</h4>
            <h4 className='ml-10 mb-5 p-1 text-xl'>Create with content in mind</h4>
          </div>
        </div>
        <Image 
          className='m-3 object-contain'
          src={'/images/home/carlos-muza-hpjSkU2UYSU-unsplash.jpg'} 
          alt='About Image'
          width={700} 
          height={100}
        />
      </div>

      {/* THIRD SECTION */}
      <div className='h-screen w-full flex flex-wrap justify-around items-center bg-green-100 border border-gray-200 shadow-md'>
        <Image 
          className='m-3 object-contain'
          src={'/images/home/choong-deng-xiang--WXQm_NTK0U-unsplash.jpg'} 
          alt='About Image'
          width={500} 
          height={100}
        />
        <div>
          <h2 className='p-5 text-2xl'>Get started with a free blog</h2>
          <div className='flex justify-around'>
            <div className='flex flex-col justify-center'>
              <h3 className='p-5 text-xl'>Start your blog today</h3>
              <span className='p-5'>Get your blog up and running in minutes</span>
              <span className='p-5'>Choose from a wide selection of templates</span>
              <span className='p-5'>Customize your blog’s design and layout</span>
              <span className='p-5'>Connect your domain or get a new one</span>
              <span className='p-5'>Start writing your blog posts</span>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  );
};

export default Page;
