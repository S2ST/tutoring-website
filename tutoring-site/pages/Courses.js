import React, {useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Courses.module.scss'
import { Container, styled, IconButton, Grid, Button, Stack, Card, Typography, TextField, Box, Slider} from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillArrowRightCircleFill, BsArrowLeftShort } from "react-icons/bs";
import { IoSearchCircleSharp } from "react-icons/io5";
import { db } from '../firebase-config.js';
import { storage } from '../firebase-config.js';
import { collection, getDocs, Timestamp, setDoc, doc, docs, getDoc, deleteField, updateDoc } from "firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage";
import styleFunctionSx from '@mui/system/styleFunctionSx'
import {AiFillInfoCircle} from 'react-icons/ai';
import { useLanguageContext } from '../context/LangContext';
import { async } from '@firebase/util'
import events from './Events'

export async function getStaticProps(context) {
  /* USED FOR EVENTS
  const eventsSnapshot = await getDocs(collection(db, "events"));

  await Promise.all(eventsSnapshot.docs.map(async(Edoc) => {
    console.log(Edoc.id);
    updateDoc(doc(db, "events", Edoc.id, "languages", "chinese"), {
      details: '在参加课程之前参加免费的试听课。'
    })
  }));
  
  let documentID = 'yy4XnJiWySpxlePIkhfb';
  updateDoc(doc(db, "events", documentID, "languages", "chinese"), {
    eventName: '高级 Python | 试听课'
  })
  */

  const querySnapshot = await getDocs(collection(db, "courses"));
  let courses = [];

  await Promise.all(querySnapshot.docs.map(async(courseDoc) => {
    let course = {};
    
    const englishDoc = await getDoc(doc(db, "courses", courseDoc.id, "languages", "english"));
    const chineseDoc = await getDoc(doc(db, "courses", courseDoc.id, "languages", "chinese"));
    const imageURL = await getDownloadURL(ref(storage, `gs://website-d9767.appspot.com/Course Images/${courseDoc.id}.svg`));

    course['id'] = courseDoc.id;
    course['english'] = JSON.parse(JSON.stringify(englishDoc.data()));
    course['chinese'] = JSON.parse(JSON.stringify(chineseDoc.data()));
    course['general'] = JSON.parse(JSON.stringify(courseDoc.data()));
    course.general.imageURL = imageURL;
    courses.push(course);



    /* USED TO DELETE FIELDS
    updateDoc(doc(db, "courses", courseDoc.id), {
      courseName: deleteField(),
      description: deleteField(),
      lessonDays: deleteField(),
      startDate: deleteField(),
      trialLessonDate: deleteField()
    })
    */

    /* USED TO ADD ENGLISH
    setDoc(doc(db, "courses", courseDoc.id, "languages", "english"), {
      courseName: courseDoc.data().courseName,
      description: courseDoc.data().description,
      lessonDays: courseDoc.data().lessonDays,
      startDate: courseDoc.data().startDate,
      trialLessonDate: courseDoc.data().trialLessonDate
    })
    */
  }));
  
  /* USED TO ADD CHINESE
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
    revalidate: 10
  }
}

function DetailsItem({course, isOnPage, setOnPage}) {

  const isEng = useLanguageContext().language;
  const lang = isEng ? 'english' : 'chinese';

  let gradeLevelText = `Grade Level: ${(course.general.gradeLevel[0] == 1 && course.general.gradeLevel[1] == 12) ? 'All' : `${course.general.gradeLevel[0]} - ${course.general.gradeLevel[1]}`}`;
  let extraInfoText = `Every ${course[lang].lessonDays}   |   ${course[lang].startDate ? `Starts on ${course[lang].startDate}` : 'Join anytime!'}`;
  let trialLessonText = 'Trial Lesson: ';
  let noTrialLessonText = 'No Trial Lesson Available';
  let pricePerLessonText = `$${course.general.pricePerLesson} per lesson`;
  let lessonsTotalText = `${course.general.lessonsTotal} lessons total`;
  let noLessonsText = 'Ongoing';

  if (!isEng) {
    gradeLevelText = `年级: ${(course.general.gradeLevel[0] == 1 && course.general.gradeLevel[1] == 12) ? '所有' : `${course.general.gradeLevel[0]} - ${course.general.gradeLevel[1]}`}`;
    extraInfoText = `每${course[lang].lessonDays}  |   ${course[lang].startDate ? `${course[lang].startDate} 开始` : '随时可以加入!'}`;
    trialLessonText = '试听课: ';
    noTrialLessonText = '没有试听课';
    pricePerLessonText = `$${course.general.pricePerLesson} / 课`;
    lessonsTotalText = `总共 ${course.general.lessonsTotal} 门课`;
    noLessonsText = '进行中';
  }

  const returnToCourses = () => {
    setOnPage(false);
  }

  return (
    <Grid container justifyContent="center" alignItems="center" className={`${styles.coursesContainer} ${isOnPage? '' : styles.hideDetailsRight}`}>
      <Grid container alignItems="center" className={`${styles.detailsItemContainer} ${isOnPage ? '' : styles.hideDetailsRight}`}>
        <Grid item xs className={styles.detailsInfoContainer}>
          <Grid container alignItems="center" style={{marginBottom: '1vh'}}>
            <Grid auto item>
              <IconButton size="small" onClick={returnToCourses} className={styles.backButton}><BsArrowLeftShort className={styles.backButtonIcon}/></IconButton>
            </Grid>
            <Grid xs container item alignItems="center">
              <h3 className={styles.courseNameDetails}>{course[lang].courseName}</h3>
            </Grid>
          </Grid>
            <p className={styles.extraInfo}>{extraInfoText}</p>
            <Grid container alignItems="center" className={styles.tagDetails}>
              <Grid item sx={{margin: 0}}>
                <p className={styles.gradeLevelDetailsTag}>
                  {gradeLevelText}
                </p>
              </Grid>
              <Grid item sx={{margin: 0}}>
                <p className={styles.priceDetailsTag}>
                  {pricePerLessonText}
                </p>
              </Grid>
              <Grid item sx={{margin: 0}}>
                <p className={styles.lessonsTotalDetailsTag}>
                  {course.general.lessonsTotal ? lessonsTotalText : noLessonsText}
                </p>
              </Grid>
            </Grid>

            <p className={styles.descriptionDetails}>{course[lang].description}</p>
            <p className={styles.trialDetails}>{course[lang].trialLessonDate ? `${trialLessonText} ${course[lang].trialLessonDate}` : noTrialLessonText}</p>

        </Grid>
        <Grid item auto>
          <div className={styles.imageDetailsContainer}>
            <div style={{height: '80%', width:'80%', position: 'relative'}}>
              <Image src={course.general.imageURL} height={80} width={80} layout="fill"></Image>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

function CourseItem({course, selectCourse, isOnPage, setOnPage}) {
  const isEng = useLanguageContext().language;

  const lang = isEng ? 'english' : 'chinese';

  let gradeLevelText = `Grade Level: ${(course.general.gradeLevel[0] == 1 && course.general.gradeLevel[1] == 12) ? 'All' : `${course.general.gradeLevel[0]} - ${course.general.gradeLevel[1]}`}`;
  let extraInfoText = `Every ${course[lang].lessonDays}   |   ${course[lang].startDate ? `Starts on ${course[lang].startDate}` : 'Join anytime!'}`;
  let detailsButtonText = 'VIEW DETAILS';

  if (!isEng) {
    gradeLevelText = `年级: ${(course.general.gradeLevel[0] == 1 && course.general.gradeLevel[1] == 12) ? '所有' : `${course.general.gradeLevel[0]} - ${course.general.gradeLevel[1]}`}`;
    extraInfoText = `每${course[lang].lessonDays}  |   ${course[lang].startDate ? `${course[lang].startDate} 开始` : '随时可以加入!'}`;
    detailsButtonText = '查看详情';
  }

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
      <Box ref={domRef}>
        <Grid container direction="row" justifyContent="center" alignItems="center" className={`${styles.courseItemBox} ${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}>
          <div className={styles.imageContainer}>
            <div style={{height: '80%', width:'80%', position: 'relative'}}>
              <Image src={course.general.imageURL} height={80} width={80} layout="fill"></Image>
            </div>
          </div>
          <Grid container item xs spacing={1} className={styles.infoContainer}>
            <Grid container item xs="auto" alignItems="flex-end">
              <p className={styles.courseName}>{course[lang].courseName}</p>
            </Grid>
            <Grid container item xs="auto" alignItems="flex-end">
              <p className={styles.gradeLevel}>
                {gradeLevelText}
              </p>
            </Grid>
            <Grid container item xs={12} alignItems="flex-start">
             <p className={styles.extraInfo}>{extraInfoText}</p>
            </Grid>
          </Grid>
          <Grid item auto className={styles.detailsButtonContainer}>
            <Button variant="contained" className={styles.detailsButton} onClick={openDetails}>{detailsButtonText}</Button>
            <IconButton onClick={openDetails}><AiFillInfoCircle className={styles.mobileDetailsButton}/></IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}


export default function Courses({courses}) {
  const isEng = useLanguageContext().language;

  const [value, setValue] = useState(13);
  const [searchValue, setSearchValue] = useState('');
  const [course, setCourse] = useState(courses[0]);
  //const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isOnPage, setOnPage] = useState(false); // For Details Component

  let coursesText = 'Courses';
  let searchText = 'Search...';
  let noCoursesText = 'No Courses Found';
  let coursesTitleText = 'Courses Available';
  let coursesSubText = 'Interested but don’t know how to start? Click here for more info';
  let gradeText = 'Grade: ';
  let allText = 'All';

  if (!isEng) {
    coursesText = '课程';
    searchText = '搜索...';
    noCoursesText = '没有找到课程';
    coursesTitleText = '开设课程';
    coursesSubText = '有兴趣但不知道如何开始？ 点击这里获取更多信息';
    gradeText = '年级：';
    allText = '所有';
  }


  const valueFormat = (val) => {
    if (val == 13) {
      return allText;
    } else return val;
  }

  const searchChange = (e) => {
    setSearchValue(e.target.value);

    // Moves back to all courses page when on Details page
    if (isOnPage) {
      setOnPage(false);
    }
  }

  const gradeChange = (e) => {
    setValue(e.target.value);

    if (isOnPage) {
      setOnPage(false);
    }
  }

  const filteredCourses = [];
  courses.forEach((course) => { // change this later $$$
    if ((course.english.courseName.toLowerCase().includes(searchValue.toLowerCase()) || course.chinese.courseName.toLowerCase().includes(searchValue.toLowerCase())) &&
     (value == 13 || value <= course.general.gradeLevel[1] && value >= course.general.gradeLevel[0])) {
      filteredCourses.push(course);
    } 
  })

  return (
    <>
      {/* Site Meta-Data */}
      <Head>
        <title>{coursesText}</title>
        <meta name="description" content="Students to Students Tutoring Website - Courses" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Navbar></Navbar>

      {/* Top half section */}
      <Grid container className={styles.topSection} direction="column">
        <Grid item className={styles.titlesContainer}>
          <h1 className={styles.title}>
            {coursesTitleText}
          </h1>
          {/* <p className={styles.subtitle}>
            {coursesSubText}
          <span>
          <a href="../#interestedSection"><BsFillArrowRightCircleFill className={styles.arrowButton}/></a></span></p> */}
        </Grid>
        <Grid item container className={styles.searchContainer} alignItems="center">
          <Grid item xs={12} sm={7} md={8} className={styles.searchSubContainer}>
            <SearchField fullWidth id="outlined-search" type="search" placeholder={searchText} value={searchValue} onChange={searchChange}/>
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <Grid container direction="row" alignItems="center" className={styles.gradeSliderContainer}>
              <Grid item auto >
                <Typography className={styles.gradeLabel} id="linear-slider" gutterBottom>
                  {gradeText} {valueFormat(value)}
                </Typography>
              </Grid>
              <Grid item xs>
                <GradeSlider
                  value={value}
                  min={1}
                  step={1}
                  max={13}
                  valueLabelFormat={valueFormat}
                  onChange={gradeChange}
                  aria-labelledby="linear-slider"
                  width="100%"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom half section */}
    
       <Grid item className={`${styles.coursesContainer} ${isOnPage ? styles.hideCoursesLeft : ''}`}> 
          {filteredCourses.length != 0 ? filteredCourses.map((item) => <CourseItem course={item} key={item.id} selectCourse={setCourse} isOnPage={isOnPage} setOnPage={setOnPage}/>) : 
          <Grid container justifyContent="center" alignItems="center"><p className={styles.noCourses}>{noCoursesText}</p></Grid>}
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
  '@media (pointer: coarse)': {
    padding: 0
  }
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
    '& input': {
        '@media (max-width: 600px)': {
          padding: '10px 8px',
          fontSize: '.9rem'
        },

        color: '#11999E',
        fontFamily: 'Open Sans',
        fontSize: '2vh'
    }
  },
});
