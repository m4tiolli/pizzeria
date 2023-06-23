import "./App.css";
import Login from "./Pages/Login/User_Login";
import Tela_principal from "./Pages/TelaPrincipal/User_TelaPrincipal";
import TelaDelivery from "./Pages/TelaDelivery/TelaDelivery";
import TelaRetirar from "./Pages/TelaRetirar/TelaRetirar";
import TelaUser from "./Pages/TelaUser/TelaUser";
import TelaPedido from "./Pages/TelaPedido/TelaPedido";
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
      element: <TelaRetirar />,
    },
    {
      path: "/delivery",
      element: <TelaDelivery />,
    },
    {
      path: "/user",
      element: <TelaUser />,
    },
    {
      path: "/pedido",
      element: <TelaPedido />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
