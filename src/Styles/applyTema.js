import temaBarbearia from './temaBarbearia';

export function applyTema(dadosTenantBarbearia) {
    if (dadosTenantBarbearia)
      return temaBarbearia({
        corPrimaria: dadosTenantBarbearia.temas !== null ? dadosTenantBarbearia.temas.corPrimaria : "#000",
        corSecundaria: dadosTenantBarbearia.temas !== null ? dadosTenantBarbearia.temas.corSecundaria : "#000"
      })
}