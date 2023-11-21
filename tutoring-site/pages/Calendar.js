import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Calendar.module.scss';
import { Grid } from '@mui/material';
import { useLanguageContext } from '../context/LangContext';

export default function Calendar() {
  const isEng = useLanguageContext().language;
  let calendarText = isEng ? 'Calendar' : '日历';

  return (
    <>
      <Head>
        <title>{calendarText}</title>
        <meta name="description" content="Students to Students Tutoring Website - Calendar" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Navbar></Navbar>
      <div class="mt-8">
      <Grid container alignItems="center" justifyContent="center" direction="row" className={styles.calendarContainer}>
        <Grid item className={styles.calendar} xs={12}>
          {
          isEng ? <iframe src="https://calendar.google.com/calendar/embed?src=oi5qg289jbujahfphmlfauhgco%40group.calendar.google.com&ctz=America%2FToronto" style={{border: 0, width:'100%', height:'100%', frameborder:0, scrolling:"no"}}></iframe>
                : <iframe src="https://calendar.google.com/calendar/embed?src=llm8uidbtl88qi161rm4evj1ao%40group.calendar.google.com&ctz=America%2FToronto" style={{border: 0, width:'100%', height:'100%', frameborder:0, scrolling:"no"}}></iframe>
          }
        </Grid>
      </Grid>
      <Footer></Footer>
      </div>
    </>
  )
}
