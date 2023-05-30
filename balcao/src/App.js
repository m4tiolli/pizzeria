import './App.css';
import './Pages/Login/User_Login';
import Tela_principal from './Pages/TelaPrincipal/User_TelaPrincipal';
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
