import './App.css';
import Login from './Pages/Login/User_Login';
import Tela_principal from './Pages/TelaPrincipal/User_TelaPrincipal';
import TelaDelivery from './Pages/TelaDelivery/TelaDelivery';
import TelaMesas from './Pages/TelaMesas/TelaMesas';
import TelaRetirar from './Pages/TelaRetirar/TelaRetirar';
import TelaUser from './Pages/TelaUser/TelaUser';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Tela_principal />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/retirar",
      element: <TelaRetirar/>
    },
    {
      path: "/mesas",
      element: <TelaMesas/>
    },
    {
      path: "/delivery",
      element: <TelaDelivery/>
    },
    {
      path: "/user",
      element: <TelaUser/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
