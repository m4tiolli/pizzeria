import React, { useState } from "react";
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
import Footer from "../../components/Footer/Footer";

function CadastroProduto() {
  const [nome, setNome] = useState();
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState();
  const [tipo, setTipo] = useState();
  const [imagem, setImagem] = useState();

  const cadastrarProduto = (e) => {
    e.preventDefault();

    const body = { nome, descricao, valor, imagem, tipo };

    fetch("https://pizzeria3.azurewebsites.net/api/produto", {
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
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    (e) => setImagem(e.target.value);
  };

  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <div id="content">
    <Box h="100vh">
      <form
        onSubmit={(e) => {
          cadastrarProduto(e);
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
          pb="8"
        >
          Cadastro Produto
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
                  <FormLabel htmlFor="nome">Nome do Produto</FormLabel>
                  <Input
                    id="nome"
                    placeholder="Nome do Produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="valor">Preço</FormLabel>
                  <Input
                    id="valor"
                    placeholder="Preço"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="categoria">Categoria</FormLabel>
                  <Input
                    id="categoria"
                    placeholder="Categoria"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="descricao">Descrição</FormLabel>
                  <Input
                    id="descricao"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </Box>
              </HStack>

              <Box w="100%" mt="4">
                <Flex align="center" flexDir="column">
                  <FormLabel htmlFor="imagem">
                    Selecione uma imagem para o produto
                  </FormLabel>
                  <Box
                    w="120px"
                    h="120px"
                    bg="gray.100"
                    borderRadius="md"
                    mt="2"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    onClick={() => document.getElementById("imagem").click()}
                  >
                    {file ? (
                      <Box
                        as="img"
                        src={file}
                        alt="Imagem do produto"
                        maxW="100%"
                        maxH="100%"
                      />
                    ) : (
                      <Box as="span" fontSize="sm">
                        Clique para selecionar a imagem
                      </Box>
                    )}
                  </Box>
                  <Input
                    type="file"
                    accept="image/*"
                    id="imagem"
                    display="none"
                    value={imagem}
                    onChange={handleFileChange}
                  />
                </Flex>
              </Box>

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
                  _hover={{ bg: "#7e1c1a" }}
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
  );
}
export default CadastroProduto;
