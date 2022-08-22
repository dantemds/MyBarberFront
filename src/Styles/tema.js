const colorsTema = JSON.parse(window.localStorage.getItem('barbeariaAll'))

export const theme = {
    cores: {
        primaria: colorsTema.temas.corSecundaria,
        textoPrimario: '#fff',

        secundaria: colorsTema.temas.corPrimaria,
    },

    espacamento: [0, 4, 8, 12, 16, 24, 32, 64],

    sombras: {
        texto: '1px 2px 3px rgba(0, 0, 0, .2)',
        componentes: '0 0 10px'
    },

}