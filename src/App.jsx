import React, { useEffect } from 'react'

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
    setTema(applyTema(dadosTenantBarbearia))
    document.title = dadosTenantBarbearia ? dadosTenantBarbearia.nomeBarbearia : 'Minha Barbearia Onlie'
  }, [dadosTenantBarbearia])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isExist(tema, temaDefault)}>
        <Rotas />
      </ThemeProvider>
    </>
  );
}

export default App;
