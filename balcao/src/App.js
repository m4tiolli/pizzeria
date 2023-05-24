import Login from './components/User/Login/User_Login';
import './App.css';
import Tela_principal from './components/User/TelaPrincipal/User_TelaPrincipal';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Tela_principal />,
    },
    // {
    //   path: "/estoque",
    //   element: <Tela_Estoque />,
    // },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
