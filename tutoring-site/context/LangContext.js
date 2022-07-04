import { createContext, useContext, useEffect, useState } from 'react'; 

const LanguageContext = createContext();

export function LanguageContextProvider(props) {
  const [language, setLanguage] = useState(true);

  return <LanguageContext.Provider value={{language, setLanguage}}>{props.children}</LanguageContext.Provider>;
}

export const useLanguageContext = () => useContext(LanguageContext);