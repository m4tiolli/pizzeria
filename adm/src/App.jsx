import Login from './pages/Login/Login'
import "./App.css"
import Services from './pages/Services/Services'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CadastroBalcao from'./pages/Forms/CadastroBalcao'
import CadastroProduto from'./pages/Forms/CadastroProduto'


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

  ]);

  return <RouterProvider router={router} />;
}

export default App;
