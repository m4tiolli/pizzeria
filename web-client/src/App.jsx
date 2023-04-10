import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import Cardapio from './pages/Pizzas/Pizzas';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';
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
      path: "/Pizzas",
      element: <Cardapio />,
    },
    {
      path: "/RecuperarSenha",
      element: <RecuperarSenha/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
