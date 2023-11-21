import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Contact.module.scss'
import { Container, Grid, Button, Stack, Card, Icon, SvgIcon } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import DeleteIcon from '@mui/icons-material/Delete';
import WeChat from '../public/images/wechat.svg';
import Link from 'next/link';
import Head from 'next/head';
import { useLanguageContext } from '../context/LangContext';

export default function Contact() {
  const isEng = useLanguageContext().language;
  let contactText = isEng ? 'Contact' : '联系';
  let contactTitleText = isEng ? 'Contact Us' : '联系我们';
  let contactSubText = isEng ? 'Interested but have some more questions? Not sure where to start? No problem! Simply reach out to us on one of our many points of contact.' 
                        : '还有问题？请通过一下方式联系我们：';

  const pp = (
    <SvgIcon width="146" height="142" viewBox="0 0 146 142" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M96.4208 48.1617C98.7933 48.1617 101.105 48.3392 103.356 48.635C99.2191 31.0625 80.2391 17.75 57.4266 17.75C31.5725 17.75 10.585 34.79 10.585 55.7942C10.585 67.9233 17.5808 78.6325 28.47 85.6142L22.3258 97.625L39.1158 90.5842C42.705 91.8267 46.4766 92.8325 50.4916 93.365C49.9441 91.0575 49.64 88.6908 49.64 86.2058C49.5791 65.2608 70.5666 48.1617 96.4208 48.1617V48.1617ZM73 34.8492C73.7669 34.8492 74.5263 34.9961 75.2348 35.2815C75.9434 35.567 76.5872 35.9854 77.1295 36.5128C77.6718 37.0402 78.1019 37.6664 78.3954 38.3555C78.6889 39.0447 78.84 39.7833 78.84 40.5292C78.84 41.2751 78.6889 42.0137 78.3954 42.7028C78.1019 43.3919 77.6718 44.0181 77.1295 44.5455C76.5872 45.073 75.9434 45.4914 75.2348 45.7768C74.5263 46.0622 73.7669 46.2092 73 46.2092C71.4511 46.2092 69.9657 45.6107 68.8705 44.5455C67.7752 43.4803 67.16 42.0356 67.16 40.5292C67.16 39.0227 67.7752 37.578 68.8705 36.5128C69.9657 35.4476 71.4511 34.8492 73 34.8492V34.8492ZM41.7925 46.2683C40.2436 46.2683 38.7582 45.6699 37.663 44.6047C36.5677 43.5395 35.9525 42.0948 35.9525 40.5883C35.9525 39.0819 36.5677 37.6372 37.663 36.572C38.7582 35.5068 40.2436 34.9083 41.7925 34.9083C43.3413 34.9083 44.8268 35.5068 45.922 36.572C47.0172 37.6372 47.6325 39.0819 47.6325 40.5883C47.6325 42.0948 47.0172 43.5395 45.922 44.6047C44.8268 45.6699 43.3413 46.2683 41.7925 46.2683V46.2683Z" fill="#E4F9F5"/>
      <path d="M135.415 86.2056C135.415 69.4023 117.956 55.7939 96.4209 55.7939C74.8859 55.7939 57.4268 69.4023 57.4268 86.2056C57.4268 103.009 74.8859 116.617 96.4209 116.617C99.9493 116.617 103.356 116.144 106.58 115.434L127.628 124.25L120.328 110.05C129.453 104.488 135.415 95.9681 135.415 86.2056ZM84.6801 84.3123C83.5251 84.3123 82.3959 83.9792 81.4356 83.355C80.4752 82.7309 79.7267 81.8438 79.2846 80.8059C78.8426 79.768 78.727 78.626 78.9523 77.5242C79.1776 76.4224 79.7339 75.4103 80.5506 74.6159C81.3673 73.8215 82.4079 73.2806 83.5408 73.0614C84.6736 72.8423 85.8478 72.9547 86.915 73.3846C87.9821 73.8145 88.8942 74.5426 89.5359 75.4766C90.1776 76.4107 90.5201 77.5089 90.5201 78.6323C90.5809 81.7681 87.9043 84.3123 84.6801 84.3123ZM108.101 84.3123C106.552 84.3123 105.067 83.7139 103.971 82.6486C102.876 81.5834 102.261 80.1387 102.261 78.6323C102.261 77.1258 102.876 75.6811 103.971 74.6159C105.067 73.5507 106.552 72.9523 108.101 72.9523C109.65 72.9523 111.135 73.5507 112.23 74.6159C113.326 75.6811 113.941 77.1258 113.941 78.6323C113.941 80.1387 113.326 81.5834 112.23 82.6486C111.135 83.7139 109.65 84.3123 108.101 84.3123V84.3123Z" fill="#E4F9F5"/>
    </SvgIcon>
  );

  return (
    <div>
      <Head>
        <title>{contactText}</title>
        <meta name="description" content="Students to Students Tutoring Website - Contact" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* Navbar */}
      <Navbar></Navbar>

      <Grid container className={styles.contactContainer} alignItems="center">
      <Image src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Fundraw_contact_us_re_4qqt%20(1).svg?alt=media&token=805c3ee4-b84a-444a-8418-4efc35be2f89" layout="raw" width={100} height={100} className={styles.pencilDude}></Image>
        <Grid item container xs={12} md={6} spacing={2} className={styles.innerContainer}>
          <Grid item xs={12}>
            <h1 className={styles.title}>{contactTitleText}</h1>
            <p className={styles.subtitle}>{contactSubText}</p>
          </Grid>
          <div class="mx-auto grid grid-cols-3">
            <a href="mailto:online2020courses@gmail.com" class="text-white bg-[#5bc9a8] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Email</a>
            <a href="https://wechat.com" class="text-white bg-[#5bc9a8] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">WeChat</a>
            <a href="https://www.facebook.com/people/StudentstoStudents-Tutoring/100079228365424/" class="text-white bg-[#5bc9a8] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Facebook</a>
          </div>
        </Grid>
      </Grid>
  

    </div>
  )
}

