import '../styles/globals.scss'
import { LanguageContextProvider } from '../context/LangContext';

function MyApp({ Component, pageProps }) {
  return <LanguageContextProvider><Component {...pageProps} /></LanguageContextProvider>
}

export default MyApp
