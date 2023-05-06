import './SelectEnde.css';
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom'

function SelectEnde (){
    const navigate = useNavigate();

    function navFormasPagamento() {
        navigate("/FormasPagamento")
    }
    function navCadastroEnde() {
        navigate("/CadastroEnde")
    }
    return(
        <div id='enderecoprincipal'>
            <Header/>
            <div className='enderecocontainer'>
                <h1 className='txtSeleEnd'>Selecionar Endereço</h1>
                <input type='radio' value='Casa' className='casa'/>Casa
                <input type='radio' value='Trabalho' className='trabalho'/>Trabalho
                <button className='btnAdd+' onClick={navCadastroEnde}>adicionar novo +</button>
                <button className='btnAvancar' onClick={navFormasPagamento}>avancar</button>
            </div>
        </div>
          )
}

export default SelectEnde;