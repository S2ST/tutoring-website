import '../styles/globals.scss'
import { LanguageContextProvider } from '../context/LangContext';
import { StyledEngineProvider } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react'


function MyApp({ Component, pageProps }) {


  return <StyledEngineProvider injectFirst><LanguageContextProvider><Component {...pageProps} /></LanguageContextProvider></StyledEngineProvider>
}

export default MyApp
