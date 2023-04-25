import Header from '../../components/Header/Header'

export default function ListarPizzas(){
    const navigate = useNavigate();
    UseEffect(() => {
        fetch("https://localhost:44383/api/pizza"){
            method: 
            "GET",
        }
        
            .then((response) => response.jason())
            .then((jason) => {setUsuarios(jason);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar Produto");  
            });
})

export default function Pizzas(){
    return(
        <div>
            <Header />
            <div></div>
        </div>
    )
}