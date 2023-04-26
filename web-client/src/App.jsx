import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import Produtos from './pages/Produtos/Produtos';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';
import RecuperarSenha2 from './pages/RecuperarSenha2/RecuperarSenha2';
import SelectEnde from './pages/SelectEnde/SelectEnde';
import Carrinho from './pages/Carrinho/Carrinho';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/Produtos",
      element: <Produtos />,
    },
    {
      path: "/RecuperarSenha",
      element: <RecuperarSenha/>
    },
    {
      path: "/RecuperarSenha2",
      element: <RecuperarSenha2/>
    },
    {
      path: "/SelectEnde",
      element: <SelectEnde/>
    },
    {
      path: "/Carrinho",
      element: <Carrinho/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
