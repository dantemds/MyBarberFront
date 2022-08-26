import { MapaSC } from './style'

export default function Mapa() {

  const barbeariaAll = JSON.parse(window.localStorage.getItem('barbeariaAll'))

    return (
        <MapaSC id="Mapa-Section">
            <h1>Estamos aqui!</h1>
            <div>
                <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY_GOOGLE_MAPS}&q=${barbeariaAll.enderecos.logradouro.replace(/ /g, '+')},${barbeariaAll.enderecos.numero}`} loading="lazy"></iframe>
            </div>
        </MapaSC>
    )
}