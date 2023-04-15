import Login from './pages/Login/Login'
import "./App.css"
import Services from './pages/Services/Services'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CadastroBalcao from'./pages/Forms/CadastroBalcao'
import CadastroProduto from'./pages/Forms/CadastroProduto'
import Economia from './pages/Economia/Economia';
import Estoque from './pages/Estoque/Estoque';
import VerEstoque from './pages/Estoque/VerEstoque';
import TelaInicial from './pages/PaginaInicial/TelaInicial';
import Produtos from './pages/Produtos/Produtos';
import VerProdutos from './pages/Produtos/VerProdutos'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TelaInicial/>,
    },
    
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/Services",
      element: <Services />,
    },

    {
      path:"/CadastroBalcao",
      element:<CadastroBalcao/>
    },
    {
      path:"/CadastroProduto",
      element:<CadastroProduto/>
    },
    {
      path:"/Economia",
      element:<Economia/>
    },
    {
      path:"/Estoque",
      element:<Estoque/>
    },
    {
      path:"/VerEstoque",
      element:<VerEstoque/>
    },
    {
      path: "/Produtos",
      element: <Produtos/>,
    },
    {
      path: "/VerProdutos",
      element: <VerProdutos/>,
    },
    
  
 

  ]);

  return <RouterProvider router={router} />;
}

export default App;
