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

import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const drawerWidth = 240;
const navItems = ['Home', 'Courses', 'Events', 'Calendar', 'Contact'];
const navLink = ['/', '/courses', '/events', '/calendar', '/contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const lang = useLanguageContext().language;
  const changeLang = useLanguageContext().setLanguage;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLanguage = () => {
    if(lang == 'chinese') {
      changeLang('english');
    } else {
      changeLang('chinese');
    }
  }

  // Mobile Navbar Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" className={styles.logo} sx={{ my: 2, mx: '3rem'}}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <Link href={`${navLink[index]}`} >
                <a className={styles.navTitleMobile}>
                  {item}
                </a>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: 'absolute'}}>

      {/* Desktop Navbar */}
      <AppBar component="nav" className={styles.navbar}>
        <Toolbar>
          {/* Hamburger Menu */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            className={styles.navTitleDesktop}
          >
            <MenuIcon />
          </IconButton>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
            className={styles.logo}
          >
            Logo
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button key={item} className={styles.navTitleDesktop}>
                <Link href={`${navLink[index]}`}>
                  <a>
                    {item}
                  </a>
                </Link>
              </Button>
            ))}
          </Box>
          <Box onClick={changeLanguage} className={styles.toggle}>
            <Grid container className={styles.languageToggle}>
              <Grid item xs={6} className={styles.china} sx={lang == 'english' ? {opacity: 0.5} : {opacity: 1}}>
                
              </Grid>
              <Grid item xs={6} className={styles.canada} sx={lang != 'english' ? {opacity: 0.5} : {opacity: 1}}>

              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Navbar */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#11999E'},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />    
      </Box>
    </Box>
  );
}

export default Navbar;
