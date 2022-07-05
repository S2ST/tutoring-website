import Container from '@mui/material/Container';
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <>
      <Container maxWidth={false} className={styles.footer}>
        <p className={styles.text}>Students to Students Tutoring. 2022.</p>
      </Container>
    </>
  )
}