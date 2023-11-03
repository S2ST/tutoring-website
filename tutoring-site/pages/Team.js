import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Calendar.module.scss';
import { Grid } from '@mui/material';
import { useLanguageContext } from '../context/LangContext';

export default function Team() {
  const isEng = useLanguageContext().language;
  let calendarText = isEng ? 'Team' : '日历';

  return (
    <>
      <Head>
        <title>{calendarText}</title>
        <meta name="description" content="Students to Students Tutoring Website - Team" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Navbar></Navbar>

      <section className="mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Team</h2>
            </div> 
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Anyuan Tu</a>
                        </h3>
                        <span className="text-gray-500">Founder & President</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">Anyuan is currently an IB student at Merivale High School. He founded S2S Tutoring with the aim of providing affordable and high quality education to anyone who wants to learn. Anyuan is extremely dedicated to his mission, working countless hours each week to ensure the quality and accessibility of our services.</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Linda Tang</a>
                        </h3>
                        <span className="text-gray-500">Head Tutor</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">Linda is currently studying to become a teacher at the University of Toronto. She graduated from Colonel By’s IB program in 2019 and McGill University in 2023. Linda has taught science, computer programming, math, and has been an invaluable part of the team since 2020.</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Syed Haider Ali</a>
                        </h3>
                        <span className="text-gray-500">Head of English</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">Haider is currently a fourth year student at McGill University studying English literature. He graduated with 45/45 from the IB program and has been tutoring for over four years. His expertise in English combined with his tutoring experience makes him the perfect fit for guiding other tutors.</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Neil Rahman</a>
                        </h3>
                        <span className="text-gray-500">Head of Math</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">Neil is currently a second year student at McGill University studying Honours Mathematics and Computer Science. He graduated with 98% average from the IB program and has tutored for over five years. His incredible performances in both math contests and academics make him a tutor others look up to.</p>
                        
                    </div>
                </div>  
            </div>  
        </div>
        </section>
      <Footer></Footer>
    </>
  )
}

