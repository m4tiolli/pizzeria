import { useNavigate } from 'react-router-dom'
import bg from '../../assets/bg-index.jpg'
import Header from '../../components/Header/Header'

import './Home.css'

function Home() {

    return (
        <div className='screen'>
            <Header/>
            <div className='bg' >
                <img className='back' src={bg} alt="" />
                <h1 className='title1'>Seja bem vindo a nossa pizzaria. Escolha sua pizza e seja feliz!</h1>
            </div>

            <div className="Search">
                <button className='btnSearch'>Pesquisar</button>
                <input></input>
            </div>

        </div>
    )
}
export default Home;