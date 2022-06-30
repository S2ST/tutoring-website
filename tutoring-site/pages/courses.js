import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Courses.module.scss'
import { Container, Grid, Button, Stack, Card, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Courses() {
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
          <BsFillArrowRightCircleFill className={styles.arrowButton}/></span></p>
        </Grid>
        <Grid item>
            hi
        </Grid>
      </Grid>

      {/* Bottom half section */}
      <Grid container className={styles.botSection}>
        <Typography>
          hi
        </Typography>
      </Grid>
    </>
  )
}