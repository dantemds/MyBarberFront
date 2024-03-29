export default function Tema(props) {

    return {
        cores: {
            primaria: props.corSecundaria,
            textoPrimario: '#fff',

            secundaria: props.corPrimaria,
            ternaria: props.corTernaria,
            quartenaria: props.corQuartenaria,
        },

        espacamento: [0, 4, 8, 12, 16, 24, 32, 64],

        sombras: {
            texto: '1px 2px 3px rgba(0, 0, 0, .2)',
            componentes: '0 0 10px'
        },

    }
}

