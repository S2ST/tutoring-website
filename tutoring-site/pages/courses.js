import React, {useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Courses.module.scss'
import { Container, styled, IconButton, Grid, Button, Stack, Card, Typography, TextField, Box, Slider} from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillArrowRightCircleFill, BsArrowLeftShort } from "react-icons/bs";
import { IoSearchCircleSharp } from "react-icons/io5";
import { db } from '../firebase-config.js';
import { collection, getDocs, Timestamp, setDoc, doc } from "firebase/firestore"
import styleFunctionSx from '@mui/system/styleFunctionSx'
import {AiFillInfoCircle} from 'react-icons/ai';

export async function getServerSideProps(context) {
  const querySnapshot = await getDocs(collection(db, "courses"));

  let courses = [];

  querySnapshot.forEach((doc) => {
    let course = {};
    course['id'] = doc.id;
    course['data'] = JSON.parse(JSON.stringify(doc.data()));   
    courses.push(course);
  })
  
  /*
  const documentID = 'rQrmaOcgz3V1TFPtSFt8';

  await setDoc(doc(db, "courses", documentID, "languages", "chinese"), {
    courseName: "视频制作基础班",
    description: "Mansi 将使用 Filmora Wondershare，一款免费且流行的视频编辑应用程序，教学生制作高质量的视频。她会分配任务并给每个学生反馈； <10 名学生。",
    lessonDays: "周六上午 10 - 10:45，周三下午 4 - 4:45",
    startDate: "7 月 13 日",
    trialLessonDate: "7 月 6 日星期三，下午 4 点至 45 点"
  });*/
 
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
      <Grid container alignItems="center" className={`${styles.detailsItemContainer} ${isOnPage ? '' : styles.hideDetailsRight}`}>
        <Grid item xs className={styles.detailsInfoContainer}>
            <h3 className={styles.courseNameDetails}><IconButton size="small" onClick={returnToCourses} className={styles.backButton}><BsArrowLeftShort className={styles.backButtonIcon}/></IconButton>{course.data.courseName}</h3>
            <p className={styles.extraInfo}>{`${course.data.lessonDays}   |   ${course.data.startDate ? `Starts on ${course.data.startDate}` : 'Join anytime!'}`}</p>
            <Grid container spacing={1} alignItems="center" className={styles.tagDetails}>
              <Grid item sx={{margin: 0}}>
                <p className={styles.gradeLevelDetailsTag}>
                  {`Grade Level: ${(course.data.gradeLevel[0] == 1 && course.data.gradeLevel[1] == 12) ? 'All' : `${course.data.gradeLevel[0]} - ${course.data.gradeLevel[1]}`}`}
                </p>
              </Grid>
              <Grid item sx={{margin: 0}}>
                <p className={styles.priceDetailsTag}>
                  {`$${course.data.pricePerLesson} per lesson`}
                </p>
              </Grid>
              <Grid item sx={{margin: 0}}>
                <p className={styles.lessonsTotalDetailsTag}>
                  {`${course.data.lessonsTotal} lessons total`}
                </p>
              </Grid>
            </Grid>

            <p className={styles.descriptionDetails}>{course.data.description}</p>
            <p className={styles.trialDetails}>{course.data.trialLessonDate ? `Trial Lesson: ${course.data.trialLessonDate}` : 'No Trial Lesson Available'}</p>

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
          <Grid container item xs spacing={1} className={styles.infoContainer}>
            <Grid container item xs="auto" alignItems="flex-end">
              <p className={styles.courseName}>{course.data.courseName}</p>
            </Grid>
            <Grid container item xs="auto" alignItems="flex-end">
              <p className={styles.gradeLevel}>
              {`Grade Level: ${(course.data.gradeLevel[0] == 1 && course.data.gradeLevel[1] == 12) ? 'All' : `${course.data.gradeLevel[0]} - ${course.data.gradeLevel[1]}`}`}
              </p>
            </Grid>
            <Grid container item xs={12} alignItems="flex-start">
             <p className={styles.extraInfo}>{`${course.data.lessonDays}   |   ${course.data.startDate ? `Starts on ${course.data.startDate}` : 'Join anytime!'}`}</p>
            </Grid>
          </Grid>
          <Grid item auto className={styles.detailsButtonContainer}>
            <Button variant="contained" className={styles.detailsButton} onClick={openDetails}>VIEW DETAILS</Button>
            <IconButton onClick={openDetails}><AiFillInfoCircle className={styles.mobileDetailsButton}/></IconButton>
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
        <Grid container className={styles.searchContainer} alignItems="center">
          <Grid item xs={12} sm={6} md={8} sx={{paddingRight: '3vh'}}>
            <SearchField fullWidth id="outlined-search" type="search" placeholder="Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Grid container direction="row" alignItems="center" className={styles.gradeSliderContainer}>
              <Grid item auto >
                <Typography className={styles.gradeLabel} id="linear-slider" gutterBottom>
                  Grade: {valueFormat(value)}
                </Typography>
              </Grid>
              <Grid item xs>
                <GradeSlider
                  value={value}
                  min={1}
                  step={1}
                  max={13}
                  valueLabelFormat={valueFormat}
                  onChange={(e) => setValue(e.target.value)}
                  aria-labelledby="linear-slider"
                />
              </Grid>
            </Grid>
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

{/* Styles the GradeSlider*/}
const GradeSlider = styled(Slider)({
  color: '#11999E',
  height: 15,
  padding: 0,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#E4F9F5',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
});

{/* Styles the SearchField*/}
const SearchField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#11999E',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#11999E',
  },
  '& .MuiOutlinedInput-root': {
    paddingLeft: 18,
    paddingRight: 18,
    color: '#40514E',
    '& fieldset': {
      border: '2px solid #11999E',
      borderRadius: 30,
    },
    '&:hover fieldset': {
      border: '2px solid #11999E',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#11999E',
    },
  },
});