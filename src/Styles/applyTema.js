import { isExist } from '../Utils/functions';
import temaBarbearia from './temaBarbearia';

export function applyTema(dadosTenantBarbearia) {
    if (dadosTenantBarbearia)
      return temaBarbearia({
        corPrimaria: isExist(dadosTenantBarbearia.temas.corPrimaria, "#000"),
        corSecundaria: isExist(dadosTenantBarbearia.temas.corSecundaria, "#000")
      })
}