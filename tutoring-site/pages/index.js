import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Grid, Button, Stack, Card } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useLanguageContext } from '../context/LangContext';

export default function Home() {
  const isEng = useLanguageContext().language;

  let homeText = 'Home';
  let titleText = 'Students to Students Tutoring';
  let subtitleText = 'This summer, we’ll have classes suitable for all students, as well as free trial lessons and webinars open to the public!';
  let searchCoursesButtonText = 'Search Courses';
  let enrollTitleText = 'Enroll your child now!';
  let missionText = 'Our mission is to provide extracurricular education to as many students as possible at an affordable price.';
  let card1Text = 'Affordable prices! Each lesson varies from $4 to $14 per 45 minutes.';
  let card2Text = 'Enhance your child’s skills with our courses. Each course contains 12-14 lessons.';
  let card3Text = 'Course material range from elementary school to high school level.';
  let forStudentsTitleText = 'For students, by students.';
  let ourPriorityText = 'Our priority is providing students with quality tutoring. All tutors are from either a top Canadian university (UoT, UBC, UWaterloo, McGill) or part of the prestigious International Baccalaureate (IB) program.';
  let interestedTitleText = 'Interested in getting started?';
  let interestedSubtitleText = 'Simple. Just follow the next five steps:';
  
  let step1TitleText = 'Look through our available courses';
  let step1SubText = 'Navigate to the “Courses” page and use the grade filter to find the courses tailored to your child’s grade.';
  let step2TitleText = 'Pick a course';
  let step2SubText = 'Find a course that is to you and your child’s liking. Click on “View details” for more information about the course.';
  let step3TitleText = 'Attend the Trial Lesson';
  let step3SubText = 'Take a lesson for free to see if the course is fit for your child. Details are under “View details” of the course.';
  let step4TitleText = 'Pay with e-transfer';
  let step4SubText = 'Send the correct amount to online2020courses@gmail.com via e-transfer. The price can be found in details of course.';
  let step5TitleText = 'Send an email to us!';
  let step5SubText = 'Include the following information in the email to online2020courses@gmail.com.';
 
  let discountTitleText = 'Get a discount!';
  let discountSubText = 'We will give a ~20% discount on tuition fees for each new student introduced. For example, if your friend spends $100 on courses, you will be given a $20 discount.';

  if (!isEng) {
    homeText = '主页';
    titleText = '学生学习辅导';
    subtitleText = '今年夏天，我们将开设适合所有学生的课程，以及向公众开放的免费试听课程和网络研讨会！';
    searchCoursesButtonText = '搜索课程';
    enrollTitleText = '立即为您的孩子报名！';
    missionText = '我们的宗旨是以最便宜的价格为尽可能多的学生提供课外教育。';
    card1Text = '付得起的价钱！每节课是 45 分钟。价钱是从 4 加元到 14 加元之间。';
    card2Text = '通过我们的课程可以提高您们孩子的技能。每门课程包括 12-14 节课。';
    card3Text = '课程范围从小学到高中。';
    forStudentsTitleText = '服务的对象是学生，提供服务的人也是学生。';
    ourPriorityText = '我们的首要任务是为学生提供最优质的辅导。所有讲师都来自加拿大最顶尖的大学（UoT、UBC、UWaterloo、McGill）或者是正在 IB Program 学习的学生。';
    interestedTitleText = '想要开始注册课程？';
    interestedSubtitleText = '很简单，只需完成下面五个步骤：';

    step1TitleText = '浏览我们提供的课程';
    step1SubText = '导航到 “课程” 页面并使用 “年级” 过滤器查找适合您孩子的课程。';
    step2TitleText = '选择一门课程';
    step2SubText = '找到适合您和您孩子喜欢的课程。 点击 “查看详情” 了解更多课程信息。';
    step3TitleText = '参加试听课';
    step3SubText = '免费参加试听课，看看该课程是否适合您的孩子。 详细信息将会显示在课程的 “查看详情” 的页面下。';
    step4TitleText = '使用电子转账付款'
    step4SubText = '请将正确的金额发送至 online2020courses@gmail.com 邮件地址。 价格当然可以在详细信息中找到。';
    step5TitleText = '发送电子邮件给我们！';
    step5SubText = '请填好以下信息，将它发送至 online2020courses@gmail.com 的邮件地址。';

    discountTitleText = '获得折扣！';
    discountSubText = '我们将为每位推介新学生的人提供学费的 20% 的折扣。 例如，如果您的朋友的课程的学费是 100 加元，您将获得 20 加元的折扣。';
  }

  return (
    <div>
      {/* Site Meta-Data */}
      <Head>
        <title>{homeText}</title>
        <meta name="description" content="Students to Students Tutoring Website - Home" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
        
        {/* 
          Responsive design is done primarily using the Grid component 
          provided by MaterialUI. Replicated flex position in traditional CSS.
        
          Images are displayed with a special Images component provided by
          NextJS to ensure proper image loading. All images are in 
          /public/images
        */}

        {/* Navbar */}
        <Navbar></Navbar>
        
        {/* Container for Starting Section */}
        <Grid container className={styles.startingContainer} alignItems="center" direction="row-reverse">
          <Image src="/images/startingBubbles.svg" layout="raw" width={100} height={100} className={styles.startingBubbles}></Image>
          <Image src="/images/startingBubblesMobile.svg" layout="raw" width={100} height={100} className={styles.startingBubblesMobile}></Image>

          <Grid item container xs={12} lg={5} className={styles.startingRight} justifyContent="center">
            <Image src="/images/boy.svg" layout="raw" width={100} height={100} className={styles.boyImage}></Image>
          </Grid>
          <Grid item container xs={12} lg={7} className={styles.startingLeft}>
            <h1 className={styles.title}>
              {titleText}
              </h1>
            <p className={styles.subtitle}>
              {subtitleText}
            </p>
            <Link href="/Courses"><Button variant="contained" className={styles.searchButton}>
              {searchCoursesButtonText}  
            </Button></Link>
          </Grid>
        </Grid>

        {/* Container for "Enroll your child now!" Section */}
        <Grid container className={styles.enrollContainer} alignItems="center" justifyContent="center">
          <Image src="/images/enrollBubblesTop.svg" layout="raw" width={100} height={100} className={styles.enrollBubblesTop}></Image>
          <Image src="/images/enrollBubblesBottom.svg" layout="raw" width={100} height={100} className={styles.enrollBubblesBottom}></Image>
          <Image src="/images/enrollBubblesMobile.svg" layout="raw" width={100} height={100} className={styles.enrollBubblesMobile}></Image>
          <Grid container item xs={12} justifyContent="center" sx={{zIndex: 2}}>
            <Grid item>
              <h3 className={styles.enrollTitle}>{enrollTitleText}</h3>
              <p className={styles.enrollText}>{missionText}</p>
            </Grid>
            <Grid container item alignItems="center" justifyContent="center">
              <EnrollItem src="/images/money.svg" text={card1Text}></EnrollItem>
              <EnrollItem src="/images/books.svg" text={card2Text}></EnrollItem>
              <EnrollItem src="/images/boy2.svg" text={card3Text}></EnrollItem>
            </Grid>
          </Grid>
        </Grid>

        {/* Container for "For students, by students" Section */}
        <Grid container className={styles.forStudentsContainer} alignItems="center" justifyContent="center">
          <Image src="/images/studentsBubblesLeft.svg" layout="raw" width={100} height={100} className={styles.studentsBubblesLeft}></Image>
          <Image src="/images/studentsBubblesRight.svg" layout="raw" width={100} height={100} className={styles.studentsBubblesRight}></Image>
          <Image src="/images/studentsBubblesMid.svg" layout="raw" width={100} height={100} className={styles.studentsBubblesMid}></Image>

          <Grid item xs={12} sx={{zIndex: 2}}>

            <Image src="/images/gradHat.svg" height={150} width={150}></Image>
            <h3 className={styles.enrollTitle}>{forStudentsTitleText}</h3>
            <p className={styles.forStudentsText}>{ourPriorityText}</p>
            <hr className={styles.forStudentsHr}></hr>
          </Grid>
        </Grid>

        {/* Container for "Interested in getting started" section */}
        <Grid container className={styles.interestedContainer} justifyContent="center" id="interestedSection">
          <Image src="/images/interestedBubblesLeft.svg" layout="raw" width={100} height={100} className={styles.interestedBubblesLeft}></Image>
          <Image src="/images/interestedBubblesRight.svg" layout="raw" width={100} height={100} className={styles.interestedBubblesRight}></Image>

          <Grid container item className={styles.interestedBox} justifyContent="center">
            <Grid item xs={12}>
              <h3 className={styles.interestedTitle}>{interestedTitleText}</h3>
              <p className={styles.interestedText}>{interestedSubtitleText}</p>
            </Grid>
            <Grid container item className={styles.interestedSteps} spacing={2}>
              <InterestedStep 
                step="1" 
                title={step1TitleText}
                text={step1SubText}
              ></InterestedStep>
              <InterestedStep 
                step="2" 
                title={step2TitleText}
                text={step2SubText}
              ></InterestedStep>
              <InterestedStep 
                step="3" 
                title={step3TitleText}
                text={step3SubText}
              ></InterestedStep>
              <InterestedStep 
                step="4" 
                title={step4TitleText}
                text={step4SubText}
              ></InterestedStep>
              <InterestedStep 
                step="5" 
                title={step5TitleText}
                text={step5SubText}
              ></InterestedStep>
            </Grid>
            <Grid item xs={12}>
              {isEng ? <Image src="/images/email.svg" layout="raw" width={100} height={100} className={styles.emailImage}></Image>
                     : <Image src="/images/emailChinese.svg" layout="raw" width={100} height={100} className={styles.emailImage}></Image>}
              
            </Grid>
          </Grid>
        </Grid>

        {/* Container for discount section */}
        <Grid container className={styles.discountContainer} justifyContent="center">
          <Grid container item className={styles.discountBox} justifyContent="center">
            <Image src="/images/discount.svg" layout="raw" width={100} height={100} className={styles.discountImage}></Image>
            <Grid item xs={12}>
                <h3 className={styles.discountTitle}>{discountTitleText}</h3>
                <p className={styles.discountText}>{discountSubText}</p>
              </Grid>
          </Grid>
        </Grid>

        <Footer></Footer>

    </div>
  )
}

// Component for each of the cards in the "Enroll your child now!" section
function EnrollItem({src, text}) {
  return (
    <Grid container item alignContent="center" md={4} xs={12} className={styles.enrollItem}>
      <div className={styles.enrollItemContainer}>
        <Grid container spacing={2}>
          <Grid container item xs={5} md={12} alignContent="center" justifyContent="center">
            <Image src={src} width={100} height={100} className={styles.enrollItemImage}></Image>
          </Grid>
          <Grid container item xs={7} md={12} alignContent="center">
            <p className={styles.enrollItemText}>{text}</p>  
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

function InterestedStep({step, title, text}) {
  return(
    <Grid container item className={styles.interestedStep} xs={12}>
      <Grid container item xs={12} className={styles.interestedStepBox}>
        <div className={styles.interestedStepCircle}>
          <p className={styles.interestedStepNumber}>{step}</p>
        </div>
        <Grid item>
          <p className={styles.interestedStepTitle}>{title}</p>
          <p className={styles.interestedStepText}>{text}</p>
        </Grid>
      </Grid>
    </Grid>
  )
  
}