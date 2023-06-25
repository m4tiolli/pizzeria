import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Produtos from "./pages/Produtos/Produtos";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha";
import RecuperarSenha2 from "./pages/RecuperarSenha2/RecuperarSenha2";
import SelectEnde from "./pages/SelectEnde/SelectEnde";
import Carrinho from "./pages/Carrinho/Carrinho";
import FormasPagamento from "./pages/FormasPagamento/FormasPagamento";
import CadastroEnde from "./pages/CadastroEnde/CadastroEnde";
import Alterar from "./pages/Alterar/Alterar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search/Search";
import Pix from "./pages/Pix/Pix";
import Cartao from "./pages/Cartao/Cartao";

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
      element: <RecuperarSenha />,
    },
    {
      path: "/RecuperarSenha2",
      element: <RecuperarSenha2 />,
    },
    {
      path: "/SelectEnde",
      element: <SelectEnde />,
    },
    {
      path: "/Carrinho",
      element: <Carrinho />,
    },
    {
      path: "/FormasPagamento",
      element: <FormasPagamento />,
    },
    {
      path: "/CadastroEnde",
      element: <CadastroEnde />,
    },
    {
      path: "/Alterar",
      element: <Alterar />,
    },
    {
      path: "/Search",
      element: <Search />,
    },
    {
      path: "/Pix",
      element: <Pix />,
    },
    {
      path: "/Cartao",
      element: <Cartao/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
