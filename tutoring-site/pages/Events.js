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

export async function getStaticProps(context) {
  let currentDate = new Date();
  const querySnapshot = await getDocs(query(collection(db, "events"), where("startTime", ">", currentDate), orderBy("startTime")));

  let events = [];

  await Promise.all(querySnapshot.docs.map(async(eventDoc) => {
    let event = {};
    event['id'] = eventDoc.id;

    const englishDoc = await getDoc(doc(db, "events", eventDoc.id, "languages", "english"));
    const chineseDoc = await getDoc(doc(db, "events", eventDoc.id, "languages", "chinese"));

    event['english'] = JSON.parse(JSON.stringify(englishDoc.data()));
    event['chinese'] = JSON.parse(JSON.stringify(chineseDoc.data()));
    event['general'] = JSON.parse(JSON.stringify(eventDoc.data()));
    events.push(event);
  }))

 
  return {
    props: {events}, // will be passed to the page component as props
    revalidate: 10
  }
}

function formatTime(timeStamp) {
  const hours = timeStamp.toDate().getHours();
  const mins = timeStamp.toDate().getMinutes();

  let time = "";

  if(hours == 0) {
    time += '12';
  } else if(hours > 12){
    time += hours - 12;
  } else {
    time += hours;
  }

  time += ':';

  if(mins == 0) {
    time += "00";
  } else if(mins < 10){
    time += "0";
    time += mins;
  } else {
    time += mins;
  }
 
  if(hours >= 12){
    time += " PM";
  } else {
    time += " AM";
  }

  return time;
}

function getMonth(month) {
  let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return months[month];
}

function EventItem({event}) {
  const lang = useLanguageContext().language ? 'english' : 'chinese';

  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    observer.observe(domRef.current);
  }, []);

  const startTimestamp = new Timestamp(parseInt(event.general.startTime.seconds),parseInt(event.general.startTime.nanoseconds));
  const endTimestamp = new Timestamp(parseInt(event.general.endTime.seconds),parseInt(event.general.endTime.nanoseconds));
  
  return (
    <Box ref={domRef}>
      <Grid container direction="row" className={`${styles.eventContainer} ${styles.fadeInSection} ${isVisible ? styles.isVisible : styles.fadeInSection}`}>
        <Grid container item xs="auto" className={styles.eventDateBox} justifyContent="center" direction="column">
          <p className={styles.eventDateMonth}>{getMonth(startTimestamp.toDate().getMonth())}</p>
          <p className={styles.eventDateDate}>{startTimestamp.toDate().getDate()}</p>
        </Grid> 
        <Grid container item xs className={styles.eventContentBox} spacing={1}>
          <Grid container item xs="auto" alignItems="flex-end" sx={{maxWidth:'100%'}}>
            <p className={styles.eventName}>{event[lang].eventName}</p>
          </Grid>
          <Grid container item xs="auto" alignItems="flex-end">
            <div className={styles.eventTimeBox}>
              <p className={styles.eventTime}>{`${formatTime(startTimestamp)} - ${formatTime(endTimestamp)} EST`}</p>
            </div>
          </Grid>
          <Grid container item xs={12} alignItems="flex-start">
            <p className={styles.eventDetails}>{event[lang].details}</p>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

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
 

  const eventItems = events.map((event) => 
    <EventItem event={event} key={event.id}/>
  );

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
<div className="grid grid-cols-3">
  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success -  Advice from Amy and Olivia</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to MIT and Caltech grads give advice on how to achieve a good study-life balance in highschool while getting those A’s! <a href="https://www.youtube.com/watch?v=QEdip6eqSF8&t=3937s&ab_channel=wAmy">Youtube</a></p>
  </a>

  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success - Applying to IB</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to experienced IB students give tips for applying to the prestigious International Baccalaureate program! <a href="https://drive.google.com/drive/folders/18wjVX2t62ce0Q149X7wzpJ7aFyOoGNPl?usp=sharing">Google Drive</a></p>
  </a>

  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success - Applying to University</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to students from Canada’s top universities (McMaster Health Sci, UWaterloo CS, Western Ivey, etc.) talk about how they were admitted to their dream schools! <a href="https://drive.google.com/file/d/1Aje9HgwBUwxBvkP6ACOoiKSTWXkP_cKk/view?usp=sharing">Google Drive</a></p>
  </a>

  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Learn from Success - Life in IB</h5>
      <br></br>
      <p className="font-normal text-gray-700">Listen to students from Canada’s top universities (McMaster Health Sci, UWaterloo CS, Western Ivey, etc.) tell stories about their unique IB experience! <a href="https://drive.google.com/drive/folders/1Zql80iZhpFBe8PrJXr5MIOC_yTIjMyo9?usp=sharing">Google Drive</a></p>
  </a>
</div>
  </div>
</section>
    </>
  )
}
