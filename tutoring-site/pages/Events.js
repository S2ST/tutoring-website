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
          {isEng ? 'A series of free webinars for students applying to college, the IB program, or for those who want life advice from fellow students!' : '为申请大学、IB 课程的学生或希望从学长那里得到学习建议的学生举办的一系列免费网络研讨会!'}
        </a>
      </div>
    </div>
<div className="grid grid-cols-4 gap-x-3">
  <a href="https://www.youtube.com/watch?v=QEdip6eqSF8&t=3937s&ab_channel=wAmy" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Advice from Amy and Olivia</h5>
      <br></br>
      <p className="font-normal text-gray-700">{isEng ? 'MIT and Caltech–schools with less than 5% acceptance rate. How did they do it? How can YOU make it? Listen to MIT and Caltech grads give advice on achieving a good work-life balance in highschool while getting those A’s!' : '麻省理工学院和加州理工学院，录取率低于 5% 的学校。他们是如何做到的呢？你怎样才能做到呢？聆听麻省理工学院和加州理工学院毕业生的建议，了解他们怎样在高中取得良好的学习与生活平衡，同时获得 A 的成绩！'}</p>
      <img class="h-4 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1920px-YouTube_full-color_icon_%282017%29.svg.png"></img>
  </a>

  <a href="https://drive.google.com/drive/folders/18wjVX2t62ce0Q149X7wzpJ7aFyOoGNPl?usp=sharing" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Applying to the IB Program</h5>
      <br></br>
      <p className="font-normal text-gray-700">{isEng ? 'How hard is it to get into IB? What are the benefits and the drawbacks? Well, experienced IB students are here to give their tips on applying to the program!' : '考IB有多难？有什么好处和坏处？那么，经验丰富的 IB 学生将在这里为您提供申请该项目的建议！'}</p>
      <svg class="w-4 h-4 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78">
	<path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
	<path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
	<path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
	<path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
	<path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
	<path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
</svg>
  </a>

  <a href="https://drive.google.com/file/d/1Aje9HgwBUwxBvkP6ACOoiKSTWXkP_cKk/view?usp=sharing" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Finding your Dream School</h5>
      <br></br>
      <p className="font-normal text-gray-700">{isEng ? 'With so many great colleges and so many programs to choose from, applying to post-secondary institutions can be challenging. That’s why we invited students from Canada’s top universities (McMaster Health Sci, UWaterloo CS, Western Ivey) to talk about their application process!' : '有如此多的优秀大学和如此多的课程可供选择，申请大学可能具有挑战性。这就是为什么我们邀请了来自加拿大顶尖大学（麦克马斯特健康科学学院、滑铁卢大学CS学院、西艾维大学）的学生来谈论他们的申请流程'}</p>
      <svg class="w-4 h-4 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78">
	<path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
	<path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
	<path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
	<path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
	<path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
	<path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
</svg>
  </a>

  <a href="https://drive.google.com/drive/folders/1Zql80iZhpFBe8PrJXr5MIOC_yTIjMyo9?usp=sharing" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Life as an IB Student</h5>
      <br></br>
      <p className="font-normal text-gray-700">{isEng ? 'The International Baccalaureate Program is known for its heavy workload and challenging curriculum. But that’s not all it is–listen to grads tell stories about their unique IB experiences!' : 'IB课程以其繁重的学业和具有挑战性的课程而闻名。但这还不是全部——听毕业生讲述他们独特的 IB 学习经历的故事！'}</p>
      <svg class="w-4 h-4 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78">
	<path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
	<path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
	<path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
	<path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
	<path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
	<path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
</svg>
  </a>
</div>
  </div>
</section>
    </>
  )
}
