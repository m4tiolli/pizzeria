import { useState, useEffect } from 'react';
import jwt from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export async function SalvarJWT(jwtData) {
  const userData = jwt(jwtData);

  await localStorage.setItem('@jwt', jwtData);
  await localStorage.setItem('@userData', JSON.stringify(userData));
}

export async function HeaderRequisicao() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    verificarLogin();
  }, []);

  async function verificarLogin() {
    const isUsuarioLogado = await ChecarLoginUsuario();
    setUsuarioLogado(isUsuarioLogado);
  }

  if (!usuarioLogado) {
    navigate('Autentication');
  }

  const token = await localStorage.getItem('@jwt');
  return new Headers({
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
  });
}

export async function ChecarLoginUsuario() {
  const token = await localStorage.getItem('@jwt');
  if (!token) {
    return false;
  }

  const userData = JSON.parse(await localStorage.getItem('@userData'));
  const actualDate = Date.parse(new Date()) / 1000;

  if (actualDate > userData.exp) {
    // usuário expirado
    await localStorage.removeItem('@jwt');
    return false;
  }

  return true;
}

export async function DadosUsuario() {
  return JSON.parse(await localStorage.getItem('@userData'));
}