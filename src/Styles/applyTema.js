import temaBarbearia from './temaBarbearia';

export function applyTema(dadosTenantBarbearia) {
    if (dadosTenantBarbearia)
      return temaBarbearia({
        corPrimaria: dadosTenantBarbearia.temas !== null ? dadosTenantBarbearia.temas.corPrimaria : "#000",
        corSecundaria: dadosTenantBarbearia.temas !== null ? dadosTenantBarbearia.temas.corSecundaria : "#000",
        corTernaria: dadosTenantBarbearia.temas !== null ? dadosTenantBarbearia.temas.corTernaria : "#000",
        corQuartenaria: dadosTenantBarbearia.temas !== null ? dadosTenantBarbearia.temas.corQuartenaria : "#000"
      })
}