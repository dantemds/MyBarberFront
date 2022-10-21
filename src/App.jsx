import React, { useEffect } from 'react'

import { ServicoProvider } from "./Contexts/ServicoContext";
import { GlobalContext } from './Contexts/GlobalContext';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/global'
import temaDefault from './Styles/temaDefault';

import Rotas from "./Routes/routes";

import { isExist } from './Utils/functions';
import { applyTema } from './Styles/applyTema';

function App() {
  const { dadosTenantBarbearia, tema, setTema } = React.useContext(GlobalContext)

  useEffect(() => {
    window.localStorage.clear()
  }, [0])

  useEffect(() => {
    setTema(applyTema(dadosTenantBarbearia))
  }, [dadosTenantBarbearia])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isExist(tema, temaDefault)}>
        <ServicoProvider>
          <Rotas />
        </ServicoProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
