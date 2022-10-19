import React, { useState } from 'react'

import { ServicoContext, ServicoProvider } from "./Contexts/ServicoContext";
import Rotas from "./Routes/routes";

import GlobalStyle from './Styles/global'
import { ThemeProvider } from 'styled-components';
import theme from './Styles/tema';
import theme2 from './Styles/tema copy';
import { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalProvider } from './Contexts/GlobalContext';


function App() {

  const { idBarbearia } = React.useContext(ServicoContext)

  const [barbeariaAll, setBarbeariaAll] = useState(null)
  const [tema, setTema] = useState(theme)


  const myTimeout = () => setTimeout(() => {
    console.log(JSON.parse(window.localStorage.getItem('barbeariaAll')))

    setBarbeariaAll(JSON.parse(window.localStorage.getItem('barbeariaAll')))
  }, 700)

  useEffect(() => {
    // window.localStorage.clear()
  }, [0])

  useEffect(() => { myTimeout() }, [idBarbearia])

  useEffect(() => {
    if (barbeariaAll)
      setTema(theme2({
        corPrimaria: barbeariaAll.temas ? barbeariaAll.temas.corPrimaria : "#000",
        corSecundaria: barbeariaAll.temas ? barbeariaAll.temas.corSecundaria : "#000"
      }))

  }, [barbeariaAll])


  return (

    <>
      <GlobalStyle />
      <ThemeProvider theme={tema}>
        <GlobalProvider>
          <ServicoProvider>
            <Rotas />
          </ServicoProvider>
        </GlobalProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
