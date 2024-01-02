import React, { useEffect } from 'react'

import { GlobalContext } from './Contexts/GlobalContext';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/global'
import temaDefault from './Styles/temaDefault';

import Rotas from "./Routes/routes";

import { isExist } from './Utils/functions';
import { applyTema } from './Styles/applyTema';

import CookieConsent from "react-cookie-consent"
import { useState } from 'react';

function App() {
  const { dadosTenantBarbearia, tema, setTema } = React.useContext(GlobalContext)
  useEffect(() => {
    setTema(applyTema(dadosTenantBarbearia))
    document.title = dadosTenantBarbearia ? dadosTenantBarbearia.nomeBarbearia : 'Minha Barbearia Online'

  }, [dadosTenantBarbearia])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isExist(tema, temaDefault)}>
        <Rotas />
      </ThemeProvider>

      <CookieConsent
        location="bottom"
        buttonText="Eu concordo!"
        style={{ background: "#202020" }}
        buttonStyle={{ color: "#202020", fontSize: "13px", backgroundColor: "#fafafa" }}
        expires={150}
      >
        Este site utiliza cookies. Ao continuar navegando neste site, você concorda em utilizar cookies para melhorar sua navegação.
      </CookieConsent>
    </>
  );
}

export default App;
