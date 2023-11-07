import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useLanguageContext } from '../context/LangContext';
import Image from 'next/image'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const navItemsEnglish = ['Home', 'Courses', 'Events', 'Calendar', 'Contact'];
const navItemsChinese = ['主页', '课程', '事件', '日历', '联系'];
const navLink = ['/', '/Courses', '/Events', '/Calendar', '/Contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const lang = useLanguageContext().language; // True means English and False means Chinese
  const changeLang = useLanguageContext().setLanguage;

  let navHome = 'Home'
  let navCourses = 'Courses'
  let navEvents = 'Events'
  let navCalendar= 'Calendar'
  let navContact = 'Contact'
  let navTeam = 'Team'

  if(!lang) {
    navHome = '主页'
    navCourses = '课程'
    navEvents = '事件'
    navCalendar= '日历'
    navContact = '联系'
    navTeam = '团队'
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLanguage = () => {
    if(lang) {
      changeLang(false);
    } else {
      changeLang(true);
    }
  } 

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="bg-white">
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-10 w-auto" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2FUntitled%20design.png?alt=media&token=5daa726d-b85c-4b1e-967c-e2c58bf1fac3&_gl=1*1sdoco8*_ga*MTQ4ODU4NDg0NC4xNjk5MDY5Nzg0*_ga_CW55HF8NVT*MTY5OTE0MTcxNi40LjEuMTY5OTE0MTczMC40Ni4wLjA." alt=""></img>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">{navHome}</a>
        <a href="/Team" className="text-sm font-semibold leading-6 text-gray-900">{navTeam}</a>
        <a href="/Courses" className="text-sm font-semibold leading-6 text-gray-900">{navCourses}</a>
        <a href="/Events" className="text-sm font-semibold leading-6 text-gray-900">{navEvents}</a>
        <a href="/Calendar" className="text-sm font-semibold leading-6 text-gray-900">{navCalendar}</a>
        <a href="/Contact" className="text-sm font-semibold leading-6 text-gray-900">{navContact}</a>
      </div>
      <div className="lg:flex lg:flex-1 lg:justify-end">
          <Box onClick={changeLanguage} className={styles.toggle}>
            <Grid container className={styles.languageToggle}>
              <Grid item xs={6} className={styles.china} sx={lang ? {opacity: 0.5} : {opacity: 1}}></Grid>
              <Grid item xs={6} className={styles.canada} sx={!lang ? {opacity: 0.5} : {opacity: 1}}></Grid>
            </Grid>
          </Box>
      </div>
    </nav>
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
          </a>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{navHome}</a>
              <a href="/Team" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{navTeam}</a>
              <a href="/Courses" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{navCourses}</a>
              <a href="/Events" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{navEvents}</a>
              <a href="/Calendar" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{navCalendar}</a>
              <a href="/Contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{navContact}</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </header>
  </div>


  );
}

export default Navbar;
