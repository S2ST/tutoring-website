import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Grid, Button, Stack, Card } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useLanguageContext } from '../context/LangContext';
import Typewriter from 'typewriter-effect/dist/core';

export default function Home() {
  const isEng = useLanguageContext().language;

  let homeText = 'Home';
  let titleText = 'S2S Tutoring';
  let subtitleText = "High-quality, affordable online courses for ALL.";
  let searchCoursesButtonText = 'Search Courses';
  let enrollTitleText = 'Enroll your child now!';
  let missionText = 'Our mission is to provide extracurricular education to as many students as possible at an affordable price.';
  let card1TitleText ='From Students to Students';
  let card2TitleText='Affordable for All';
  let card3TitleText='Qualified Tutors';
  let card4TitleText='Any Course, Any Age';
  let card1Text = 'We understand what it’s like to be a student. That’s why we’re here to help.';
  let card2Text = 'Our courses are affordable for all incomes–with revenue going back to our highschool or university student tutors.';
  let card3Text = 'Our tutors are from the most prestigious universities in Canada and the US with years of teaching experience.';
  let card4Text= 'We have both academic and interest courses for students G1-12, of all class sizes. Check them out under the “Courses” tab!';
  let forStudentsTitleText = 'Created for students, by students.';
  let ourPriorityText = 'Students to Students (S2S) Tutoring informally launched in April of 2020 during the coronavirus pandemic with the aim of providing affordable extracurricular to as many students as possible. Our courses soon gained recognition across social media, thanks to their high quality and affordability. Since then, we have worked with over one hundred tutors, including those from Harvard, MIT, Brown, Caltech, University of Toronto, McGill, UBC, Waterloo, McMaster and from the prestigious International Baccalaureate Program. We hope to continue inspiring a love for learning in students for the years to come.';
  let helped ='STUDENTS HELPED';
  let taught='HOURS TAUGHT';
  let paid='PAID TO STUDENT TUTORS';
  let hear='Hear from the S2S community!'
  let interestedTitleText = 'Interested in getting started?';
  let interestedSubtitleText = 'Simple. Just follow these two steps:';
  
  let step1 = 'Step 1';
  let step2 = 'Step 2';
  let step1TitleText = 'Look for a suitable course.';
  let step1SubText = 'Navigate to the “Courses” page and use the grade filter to find the courses tailored to your child’s grade.';
  let step2TitleText = 'Email online2020courses@gmail.com, and please include student name, contact information, and the courses selected.';
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
    subtitleText = '适合所有人的高质量低价格的在线课程。';
    searchCoursesButtonText = '搜索课程';
    enrollTitleText = '欢迎大家报名！';
    missionText = '我们的宗旨是以便宜的价格为尽可能多的学生提供课外教育。';
    card1TitleText ='从学生到学生';
    card2TitleText='人人都能负担得起';
    card3TitleText='最佳导师';
    card4TitleText='任何课程、任何年龄';
    card1Text = '作为学生，我们理解学生的感受，所以我们愿意为学生们提供帮助！';
    card2Text = '我们的课程适合所有收入人群。';
    card3Text = '我们的导师来自加拿大和美国最负盛名的大学，拥有多年的教学经验。';
    card4Text = '我们为 1到12年级G1-12 学生提供各类学术和兴趣课程，请点击“课程”选项卡查看。';
    forStudentsTitleText = '我们的任务';
    ourPriorityText = 'S2S (StudentstoStudents) Tutoring 机构于 2020 年 4 月在新冠大流行期间正式启动，旨在为尽可能多的学生提供负担得起的课外活动。由于其高质量和实惠的价格，我们的课程很快在获得了学生和家长的认可。至今，我们与来自哈佛大学、麻省理工学院、加州理工学院、多伦多大学、麦吉尔大学、UBC大学、滑铁卢大学、麦克马斯特大学的一百多名导师合作。我们希望培养学生对学习的热爱。';
    helped ='学生';
    taught='授课时间';
    paid='支付给学生导师';
    hear='Hear from the S2S community!'
    interestedTitleText = '如何注册课程？';
    interestedSubtitleText = '很简单，只需完成下面两个步骤：';

    step1 = '步骤1';
    step2 = '第2步';
    step1TitleText = '到 “课程” 页面查找合适的课程。';
    step1SubText = '导航到“课程”页面并使用成绩过滤器查找适合您孩子成绩的课程。';
    step2TitleText = 'E-transfer学费到 online2020courses@gmail.com，请注明学生名字，联系方式和所选课程。';
    step2SubText = '找到一门适合您和您孩子喜欢的课程。点击“查看详细信息”了解有关课程的更多信息';

    // step1TitleText = '浏览我们提供的课程';
    // step1SubText = '导航到 “课程” 页面并使用 “年级” 过滤器查找适合您孩子的课程。';
    // step2TitleText = '选择一门课程';
    // step2SubText = '找到适合您和您孩子喜欢的课程。 点击 “查看详情” 了解更多课程信息。';
    // step3TitleText = '参加试听课';
    // step3SubText = '免费参加试听课，看看该课程是否适合您的孩子。 详细信息将会显示在课程的 “查看详情” 的页面下。';
    // step4TitleText = '使用电子转账付款'
    // step4SubText = '请将正确的金额发送至 online2020courses@gmail.com 邮件地址。 价格当然可以在详细信息中找到。';
    // step5TitleText = '发送电子邮件给我们！';
    // step5SubText = '请填好以下信息，将它发送至 online2020courses@gmail.com 的邮件地址。';

    discountTitleText = '推荐优惠';
    discountSubText = '欢迎推荐您的朋友们来一起学习！我们会给推荐者提供高达20%的折扣。比如您推荐的朋友新报了$100的课程，您自己将获得$20的学费折扣。';
  }

  useEffect(() => {
    // Your JavaScript code here
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(1000)
      .typeString('Welcome to <span style="color: #5bc9a8;">S2S Tutoring</span>.')
      .pauseFor(300)
      .deleteChars(24)
      .typeString('For students. ')
      .pauseFor(300)
      .typeString('<span style="color: #5bc9a8;">By students.</span>')
      .pauseFor(1000)
      .start();
  }, []); // The empty dependency array ensures this effect runs only once after mounting



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
        <script src="https://cdn.tailwindcss.com"></script>
        <Script src="document.documentElement.classNameList.add(&apos js &apos)"/>
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
        <Script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></Script>
        <Script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></Script>
      
        <div className="">
        <div className="relative isolate px-6 pt-14 lg:px-8">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
  rel="stylesheet"
/>


    <div className="-z-10 absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#04c2bf] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
    <section className="mt-20 xl:mt-32">
        <div className="py-8 lg:py-20">
            <div className="flex flex-col items-center">
                <h1 id="app" className="text-center max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl text-black"></h1>
                <p className="text-center max-w-2xl mb-6 text-gray-600 lg:mb-8 md:text-lg lg:text-base text-sm leading-8 text-gray-600">{subtitleText}</p>
                <div class="flex flex-col items-center">
                  <a href="/Courses" className="z-30 rounded-md bg-[#5bc9a8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#44ab8c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{searchCoursesButtonText}</a>
                </div>
            </div>
               
        </div>
    </section>

    <div className="-z-10 absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#04c2bf] to-[#6cf0c8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
    </div>
  </div>
</div>


  {/* Container for "For students, by students" Section */}
  <div className=" py-24 sm:py-32 border-b">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-24 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className="relative pl-20 delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0">
          <dt className="text-md font-bold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-[#5bc9a8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            </div>
            {card1TitleText}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">{card1Text}</dd>
        </div>
        <div className="relative pl-20 delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0">
          <dt className="text-md font-bold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-[#5bc9a8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
            {card2TitleText}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">{card2Text}</dd>
        </div>
        <div className="relative pl-20 delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0">
          <dt className="text-md font-bold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-[#5bc9a8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            </div>
            {card3TitleText}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">{card3Text}</dd>
        </div>
        <div className="relative pl-20 delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0">
          <dt className="text-md font-bold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-[#5bc9a8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            {card4TitleText}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">{card4Text}</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

        <section className="border-b">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{forStudentsTitleText}</h2>
                <p className="mb-4">{ourPriorityText}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg delay-[300ms] duration-[600ms] taos:translate-y-[-200px] taos:opacity-0" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2FforStudents1.jpg?alt=media&token=a1b9d150-4daa-400a-be78-be48c6eaca93&_gl=1*15hs90k*_ga*MTQ4ODU4NDg0NC4xNjk5MDY5Nzg0*_ga_CW55HF8NVT*MTY5OTA3MjAyMi4yLjAuMTY5OTA3MjAyMi42MC4wLjA." alt="office content 1"></img>
                <img className="mt-4 w-full lg:mt-10 rounded-lg delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2FforStudents2.png?alt=media&token=7d9bf9a0-f1f8-4337-bd58-a6980235a2f0&_gl=1*nqsifr*_ga*MTQ4ODU4NDg0NC4xNjk5MDY5Nzg0*_ga_CW55HF8NVT*MTY5OTA3MjAyMi4yLjEuMTY5OTA3MjA5NS42MC4wLjA." alt="office content 2"></img>
            </div>
        </div>
      </section>
      <div className="py-12 sm:py-16 border-b">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0">
        <dt className="text-base leading-7 text-gray-600">{helped}</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">2,000+</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 delay-[600ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0">
        <dt className="text-base leading-7 text-gray-600">{taught}</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">5500+</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 delay-[900ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0">
        <dt className="text-base leading-7 text-gray-600">{paid}</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$195,000</dd>
      </div>
    </dl>
  </div>
</div>
<section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{hear}</h2>
      </div> 
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-5 max-w-2xl text-gray-500">
                  <p className="my-4">我家儿子喜歡這个小老师！他说比我每个月送他去$500块钱一个月的补习学校的老師那还教的更有兴趣些！</p>
              </blockquote>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
              <blockquote className="mx-auto mb-5 max-w-2xl text-gray-500">
                  <p className="my-4">"你好，今天孩子收到IB录收通知书，我們非常開心，謝謝你们為我们所做的一切。謝謝</p>
              </blockquote> 
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                  <p className="my-4">Thank you so so much to all the organizers for taking the time for everything. I am in 10th grade and I feel like so many of my queries have been solved. Your courses made me feel motivated in going towards my strengths, my goals, and my passions. Thank you 😊</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <div className="space-y-0.5 font-medium">
                      <div>Student</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                  <p className="my-4">"My daughter loves your courses! She especially likes being taught by tutors that can relate to her, and she’s learned so much from them! Keep up your work! 🙏🙏🙏</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <div className="space-y-0.5 font-medium">
                      <div>Parent</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                  <p className="my-4">S2S Tutoring is an outstanding student organization that I wholeheartedly recommend. Their team of dedicated tutors, flexibility in teaching style, and low pricing make them a top choice for anyone seeking academic support. I am genuinely impressed with their commitment to empowering students, and I am grateful for the assistance they provided my son for the past three years. You’ve made a positive impact on the educational journeys of so many students!</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <div className="space-y-0.5 font-medium">
                      <div>Parent</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                  <p className="my-4">"I just received my IB acceptance letter!!! Your webinar inspired me to apply and taught me so much about the program! Thank you so much :)</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <div className="space-y-0.5 font-medium">
                      <div>Student</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
    </div>
</section>

<div className="p-4 border border-gray-200 shadow-lg rounded-lg sm:p-8 m-4 bg-gray-100">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 text-center">{interestedTitleText}</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg text-center">{interestedSubtitleText}</p>

<div className="flex justify-center">
<ol className="relative border-l border-gray-200">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{step1}</time>
        <h3 className="text-lg font-semibold text-gray-900">{step1TitleText}</h3>
        <p className="mb-4 text-base font-normal text-gray-500">{step1SubText}</p>
        <a href="/Courses" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">{searchCoursesButtonText}<svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{step2}</time>
        <h3 className="text-lg font-semibold text-gray-900">{step2TitleText}</h3>
        <p className="text-base font-normal text-gray-500">{step2SubText}</p>
    </li>
</ol>
</div>

</div>
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
      <Grid container alignItems="center" item xs={12} className={styles.interestedStepBox}>
        <Grid item className={styles.interestedStepCircle}>
          <p className={styles.interestedStepNumber}>{step}</p>
        </Grid>
        <Grid item>
          <p className={styles.interestedStepTitle}>{title}</p>
          {/* <p className={styles.interestedStepText}>{text}</p> */}
        </Grid>
      </Grid>
    </Grid>
  )
  
}
