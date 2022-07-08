import React, { useState, useEffect, useRef } from 'react'
import { collection, getDocs, Timestamp, orderBy, query, getDoc, doc } from "firebase/firestore"
import { Grid, Stack, Box } from '@mui/material'
import { db } from "../firebase-config"
import styles from '../styles/Events.module.scss'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useLanguageContext } from '../context/LangContext';
import { IoFileTray } from 'react-icons/io5'

export async function getStaticProps(context) {
  const querySnapshot = await getDocs(query(collection(db, "events"), orderBy("startTime")));

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

  let titleText = "Upcoming Events";
  let subtitleText = "Aside from regular lessons, our organization also hosts informational seminars for extra-motivated students, as well as free trial lessons if you are unsure about committing to a course. Check out our upcoming events below!";
  let eventsText = "Events";
  
  if(!isEng) {
    titleText = "正在进行的活动";
    subtitleText = "除了常规课程外，我们还为积极进取的学生举办了信息研讨会，如果您不确定是否愿意参加课程，我们还会举办免费试听课程。 在下面查看我们即将举行的活动！";
    eventsText = '事件';
  }
 

  const eventItems = events.map((event) => 
    <EventItem event={event} key={event.id}/>
  );

  return (
    <>
      <Head>
        <title>{eventsText}</title> 
        <meta name="description" content="Students to Students Tutoring Website - Events" />
      </Head>

      <Navbar></Navbar>

      <Grid container className={styles.topSection} direction="column" justifyContent="center"> 
        <Image src="/images/eventsTopLeftBubbles.svg" layout="raw" width={100} height={100} className={styles.bubblesTopLeft}></Image>
        <Image src="/images/eventsTopRightBubbles.svg" layout="raw" width={100} height={100} className={styles.bubblesTopRight}></Image>

        <Grid item className={styles.titlesContainer}>
            <h1 className={styles.title}>{titleText}</h1>
            <p className={styles.subtitle}>{subtitleText}</p>
        </Grid>
      </Grid>

      <Grid container className={styles.botSection} direction="column">
        <Image src='/images/coursesBubblesLeft.svg' layout="raw" width={450} height={450} className={styles.bubblesLeft}></Image>
        <Image src='/images/coursesBubblesRight.svg' layout="raw" width={450} height={450} className={styles.bubblesRight}></Image>
        <Grid item className={styles.eventsContainer} sx={{overflowY: 'auto', paddingBottom: '30px', zIndex: 2}}>
          <Stack spacing={2}>
            {eventItems}
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
