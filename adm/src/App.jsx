import Login from './pages/Login/Login.jsx'
import "./App.css"
import Services from './pages/Services/Services'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CadastroBalcao from'./pages/Forms/CadastroBalcao'
import CadastroProduto from'./pages/Forms/CadastroProduto'
import Economia from './pages/Economia/Economia';
import Estoque from './pages/Estoque/Estoque';
import VerEstoque from './pages/Estoque/VerEstoque';

import Produtos from './pages/Produtos/Produtos';
import VerProdutos from './pages/Produtos/VerProdutos'
import VerEconomia from './pages/Economia/VerEconomia.jsx';
import VerBalcoes from './pages/Balcoes/VerBalcoes'
import VerMesas from './pages/Mesas/VerMesas'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
    {
      path: "/VerEconomia",
      element: <VerEconomia/>,
    },
    {
      path: "/VerBalcoes",
      element: <VerBalcoes/>,
    },
    {
      path: "/VerMesas",
      element: <VerMesas/>,
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
