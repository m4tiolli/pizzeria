import Header from '../../components/Header/Header'
import btnpesquisa from '../../assets/searchnormal1.png'
import delivery from '../../assets/delivery.png';
import cardapio from '../../assets/cardapio.png';

import './Home.css'

function Home() {

    return (
        <div className='screen'>
            <Header/>
                <h1 className='title1'>welcome to our pizzeria. choose a pizza and be happy!</h1>
            <div className="search">
                <div className='blockpesquisa'>
                    <img src={btnpesquisa} className='imgpesquisa' alt="" />
                    <input className='inputpesquisa' type="text" placeholder='search for some pizza...' />
                </div>
                <button className='btnSearch'>search</button>
            </div>
            <div className='options'>
                <div className='cardapio'>
                    <img src={cardapio} className='icon' alt=''/>
                    <button className='button btncardapio'>search</button>
                </div>
                <div className='delivery'>
                    <img src={delivery} className='icon' alt=''/>
                    <button className='button btndelivery'>delivery</button>
                </div>
            </div>

        </div>
    )
}
export default Home;