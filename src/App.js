import React, {
  useState
} from 'react';
import {
  ThemeProvider
} from 'styled-components'
import {
  LightTheme,
  DarkTheme
} from './style/themes'
import Page from './Page';

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false)

  return ( <
    ThemeProvider theme = {
      darkModeOn ? DarkTheme : LightTheme
    } >
    <
    Page darkModeOn = {
      darkModeOn
    }
    setDarkModeOn = {
      setDarkModeOn
    }
    /> <
    /ThemeProvider>
  );
}

export default App;