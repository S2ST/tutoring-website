import React, {useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Courses.module.scss'
import { Container, IconButton, Grid, Button, Stack, Card, Typography, TextField, Box, Slider} from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillArrowRightCircleFill, BsArrowLeftShort } from "react-icons/bs";
import { IoSearchCircleSharp } from "react-icons/io5";
import { db } from '../firebase-config.js';
import { collection, getDocs, Timestamp } from "firebase/firestore"
import styleFunctionSx from '@mui/system/styleFunctionSx'


export async function getServerSideProps(context) {
  const querySnapshot = await getDocs(collection(db, "courses"));

  let courses = [];

  querySnapshot.forEach((doc) => {
    let course = {};
    course['id'] = doc.id;
    course['data'] = JSON.parse(JSON.stringify(doc.data()));   
    courses.push(course);
  })
 
  return {
    props: {courses}, // will be passed to the page component as props
  }
}

function DetailsItem({course, isOnPage, setOnPage}) {

  const returnToCourses = () => {
    setOnPage(false);
  }

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{overflowX: 'hidden'}}>
      <Grid container className={`${styles.detailsItemContainer} ${isOnPage ? '' : styles.hideDetailsRight}`}>
        <Grid item xs className={styles.detailsInfoContainer}>
 
            <h3 className={styles.courseNameDetails}><IconButton size="small" onClick={returnToCourses} className={styles.backButton}><BsArrowLeftShort className={styles.backButtonIcon}/></IconButton>{course.data.courseName}</h3>
            <p className={styles.extraInfo}>{`${course.data.lessonDays}   |   ${course.data.startDate ? `Starts on ${course.data.startDate}` : 'Join anytime!'}`}</p>
            <p className={styles.tagDetails}>
              <span className={styles.gradeLevelDetailsTag}>{`Grade Level: ${(course.data.gradeLevel[0] == 1 && course.data.gradeLevel[1] == 12) ? 'All' : `${course.data.gradeLevel[0]} - ${course.data.gradeLevel[1]}`}`}</span>
              <span className={styles.priceDetailsTag}>{`$${course.data.pricePerLesson} per lesson`}</span>
              <span className={styles.lessonsTotalDetailsTag}>{`${course.data.lessonsTotal} lessons total`}</span>
            </p>

            <p className={styles.descriptionDetails}>{course.data.description}</p>
            <p className={styles.trialDetails}>{course.data.trialLessonDate ? `Trial Lesson: ${course.data.trialLessonDate}` : ''}</p>

        </Grid>
        <Grid item auto>
          <div className={styles.imageDetailsContainer}></div>
        </Grid>
      </Grid>
    </Grid>
  )
}

function CourseItem({course, selectCourse, isOnPage, setOnPage}) {

  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const openDetails = () => {
    selectCourse(course);
    setOnPage(true);
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <>
      <Box className={`${styles.courseItemBox} ${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`} ref={domRef}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <div className={styles.imageContainer}></div>
          <Grid item xs className={styles.infoContainer}>
            <p className={styles.courseName}>{course.data.courseName}
              <span className={styles.gradeLevel}>
              {`Grade Level: ${(course.data.gradeLevel[0] == 1 && course.data.gradeLevel[1] == 12) ? 'All' : `${course.data.gradeLevel[0]} - ${course.data.gradeLevel[1]}`}`}
              </span>
            </p>
            <p className={styles.extraInfo}>{`${course.data.lessonDays}   |   ${course.data.startDate ? `Starts on ${course.data.startDate}` : 'Join anytime!'}`}</p>
          </Grid>
          <Grid item auto className={styles.detailsButtonContainer}>
          <Button variant="contained" className={styles.detailsButton} onClick={openDetails}>VIEW DETAILS</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}


export default function courses({courses}) {

  const [value, setValue] = useState(13);
  const [searchValue, setSearchValue] = useState('');
  const [course, setCourse] = useState(courses[0]);
  //const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isOnPage, setOnPage] = useState(false); // For Details Component

  
  const valueFormat = (val) => {
    if (val == 13) {
      return 'All';
    } else return val;
  }

  const filteredCourses = [];
  courses.forEach((course) => {
    if (course.data.courseName.toLowerCase().includes(searchValue.toLowerCase()) &&
     (value == 13 || value <= course.data.gradeLevel[1] && value >= course.data.gradeLevel[0])) {
      filteredCourses.push(course);
    }
  })

  return (
    <>
      {/* Site Meta-Data */}
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      {/* Top half section */}
      <Grid container className={styles.topSection} direction="column">
        <Image src="/images/coursesBubblesTopLeft.svg" layout="raw" width={100} height={100} className={styles.bubblesTopLeft}></Image>
        <Grid item className={styles.titlesContainer}>
          <h1 className={styles.title}>Courses Available</h1>
          <p className={styles.subtitle}>Interested but don’t know how to start? Click here for more info<span>
          <a href="../#interestedSection"><BsFillArrowRightCircleFill className={styles.arrowButton}/></a></span></p>
        </Grid>
        <Grid container className={styles.searchContainer}>
          <Grid item xs={12} sm={6}>
              <TextField fullWidth id="outlined-search" type="search" placeholder="Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
          </Grid>
          <Grid item>
            <Box sx={{ width: 250 }}>
              <Typography className={styles.gradeLabel} id="linear-slider" gutterBottom>
                Grade: {valueFormat(value)}
              </Typography>
              <Slider
                value={value}
                min={1}
                step={1}
                max={13}
                valueLabelFormat={valueFormat}
                onChange={(e) => setValue(e.target.value)}
                aria-labelledby="linear-slider"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom half section */}
      <Grid container className={styles.botSection}>
       <Image src='/images/coursesBubblesLeft.svg' layout="raw" width={450} height={450} className={styles.bubblesLeft}></Image>
       <Image src='/images/coursesBubblesRight.svg' layout="raw" width={450} height={450} className={styles.bubblesRight}></Image>
       <Grid item className={`${styles.coursesContainer} ${isOnPage ? styles.hideCoursesLeft : ''}`}> 
          {filteredCourses.length != 0 ? filteredCourses.map((item) => <CourseItem course={item} key={item.id} selectCourse={setCourse} isOnPage={isOnPage} setOnPage={setOnPage}/>) : 
          <Grid container justifyContent="center" alignItems="center"><p className={styles.noCourses}>No Courses Found</p></Grid>}
       </Grid>
      </Grid>
      <DetailsItem course={course} isOnPage={isOnPage} setOnPage={setOnPage}></DetailsItem>
    </>
  )
}