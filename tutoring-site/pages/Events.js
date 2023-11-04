import React, { useState, useEffect, useRef } from 'react'
import { collection, getDocs, Timestamp, orderBy, query, where, getDoc, doc } from "firebase/firestore"
import { Grid, Stack, Box, Link } from '@mui/material'
import { db } from "../firebase-config"
import styles from '../styles/Events.module.scss'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useLanguageContext } from '../context/LangContext';
import { IoFileTray } from 'react-icons/io5'



export default function Events({events}) {
  const isEng = useLanguageContext().language;

  let titleText = "Learn from Success";
  let subtitleText = "A series of free webinars for students applying to college, the IB program, or for those who want highschool life advice!";
  let eventsText = "Events";
  let noEventsText = "No Upcoming Events";
  let recordingLinkText = "Watch the University Seminar recording here!";
  
  if(!isEng) {
    titleText = "免费活动";
    subtitleText = "除了常规课程外，我们还会组织下列免费试听课和公开讲座。";
    eventsText = '事件';
    noEventsText = '没有正在进行的活动';
    recordingLinkText = "请点击这里观看怎么申请大学的讲座的录像";
  }

  return (
    <>
      <Head>
        <title>{eventsText}</title> 
        <meta name="description" content="Students to Students Tutoring Website - Events" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Navbar></Navbar>

      <section className="antialiased mt-10">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
        {titleText}
      </h2>

      <div className="mt-4">
        <a href="#" title=""
          className="inline-flex items-center text-sm font-medium text-primary-300">
          {subtitleText}
        </a>
      </div>
    </div>
<div className="grid grid-cols-4 gap-x-3">
  <a href="https://www.youtube.com/watch?v=QEdip6eqSF8&t=3937s&ab_channel=wAmy" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success -  Advice from Amy and Olivia</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to MIT and Caltech grads give advice on how to achieve a good study-life balance in highschool while getting those A’s!</p>
  </a>

  <a href="https://drive.google.com/drive/folders/18wjVX2t62ce0Q149X7wzpJ7aFyOoGNPl?usp=sharing" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success - Applying to IB</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to experienced IB students give tips for applying to the prestigious International Baccalaureate program!</p>
  </a>

  <a href="https://drive.google.com/file/d/1Aje9HgwBUwxBvkP6ACOoiKSTWXkP_cKk/view?usp=sharing" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success - Applying to University</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to students from Canada’s top universities (McMaster Health Sci, UWaterloo CS, Western Ivey, etc.) talk about how they were admitted to their dream schools!</p>
  </a>

  <a href="https://drive.google.com/drive/folders/1Zql80iZhpFBe8PrJXr5MIOC_yTIjMyo9?usp=sharing" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success - Life in IB</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to students from Canada’s top universities (McMaster Health Sci, UWaterloo CS, Western Ivey, etc.) tell stories about their unique IB experience!</p>
  </a>
</div>
  </div>
</section>
    </>
  )
}
