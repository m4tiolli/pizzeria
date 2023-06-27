import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

const ModalCompCadastroBalcao = ({ isOpen, onClose, data, setData, dataEdit }) => {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (Object.keys(dataEdit).length !== 0) {
      setName(dataEdit.nome);
      setCPF(dataEdit.cpf);
      setEmail(dataEdit.email);
      setPhone_number(dataEdit.telefone);
      setPassword(dataEdit.senha);
      setDate(dataEdit.dataNasc);
    } else {
      clearFields();
    }
  }, [dataEdit]);

  const clearFields = () => {
    setName("");
    setCPF("");
    setEmail("");
    setPhone_number("");
    setPassword("");
    setDate("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(dataEdit).length !== 0) {
      const newArray = data.map((item, index) => {
        if (index === dataEdit.index) {
          return {
            name,
            CPF,
            email,
            phone_number,
            password,
            date,
          };
        }
        return item;
      });
      setData(newArray);
      localStorage.setItem("cad_cliente", JSON.stringify(newArray));
    } else {
      const newItem = {
        name,
        CPF,
        email,
        phone_number,
        password,
        date,
      };
      setData([...data, newItem]);
      localStorage.setItem(
        "cad_cliente",
        JSON.stringify([...data, newItem])
      );
    }

    const body = {
  tipo: "balcao",
  nome: name,
  cpf: CPF,
  email,
  telefone: phone_number,
  senha: password,
  dataNasc: date,
};

    console.log(body);
    debugger;
    fetch("https://pizzeria3.azurewebsites.net/api/auth/cadastrar", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          alert("Balcão/Usuário cadastrado com sucesso");
        } else {
          throw new Error("Erro ao cadastrar o Balcão/Usuário 1");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao cadastrar o Balcão/Usuário 2");
      });

    clearFields();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
           background="#1d1d1f"
           color="#fff"
           text-align="center"
        >Cadastro de Balcão</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                placeholder="Digite o nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>CPF</FormLabel>
              <Input
                type="text"
                placeholder="Digite o CPF"
                value={CPF}
                onChange={(event) => setCPF(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Digite o email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Celular</FormLabel>
              <Input
                type="tel"
                placeholder="Digite o número de celular"
                value={phone_number}
                onChange={(event) => setPhone_number(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Data de Nascimento</FormLabel>
              <Input
                type="date"
                placeholder="Digite a data de nascimento"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="green" type="submit">
              Salvar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalCompCadastroBalcao;
