import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

function CadastroBalcao() {
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCPF] = useState();
  const [DataNasc, setDataNasc] = useState();

  const cadastrarBalcao = (e) => {
    e.preventDefault();

    const body = { 
      tipo:"balcao",
      nome, senha, telefone, email, cpf, DataNasc };

    fetch("https://pizzeria3.azurewebsites.net/api/auth/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        alert("Produto cadastrado com sucesso");
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar resultado");
      });
  };

  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <div id="content">
    <Box h="90vh">
      <form
       onSubmit={(e) => {
        cadastrarBalcao(e);
      }}
      >
      {/*Div com conteúdo centralizado*/}
      <Center
        as="header"
        h={150}
        bg="#8e1c1a"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8">
        Cadastro Balcão
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh-150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >

          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input 
                  id="nome" 
                  placeholder="Nome do Responsável" 
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">CPF</FormLabel>
                <Input
                id="nome" 
                placeholder="CPF" 
                value={cpf}
                onChange={(event) => setCPF(event.target.value)}
                 />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="celular">Celular</FormLabel>
                <Input 
                id="phone number" 
                placeholder="Celular" 
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" id="nome"
                 placeholder="exemplo@gmail.com" 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Senha</FormLabel>
                <Input id="nome" 
                placeholder="Senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}/>
              </Box>
            </HStack>
            <HStack spacing="4">
                    <Box w="100%">
                      <FormLabel htmlFor="dataNasc">Data de Nascimento</FormLabel>
                      <Input
                        id="dataNasc"
                        type="date"
                        // value={DataNasc}
                        onChange={(event) => setDataNasc(event.target.value)}
                      />
                    </Box>
                  </HStack>

            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="#8e1c1a"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{bg:"#7e1c1a"}}
              >
                Cadastrar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
      </form>
    </Box>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default CadastroBalcao





            