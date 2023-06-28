import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.png";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "../../components/ModalComponents/ModalCompCadastroProduto.jsx";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Lottie from "react-lottie";
import pizzaAnimation from "../../assets/Pizzaloading.json";
import Footer from "../../components/Footer/Footer";

const VerProdutos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    fetch("https://pizzeria3.azurewebsites.net/api/produto")
      .then((response) => response.json())
      .then((dataFromDB) => {
        setData(dataFromDB);
        setIsLoading(false); // Quando os dados são carregados, definimos isLoading como false
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao obter dados do banco de dados");
        setIsLoading(false); // Em caso de erro, também definimos isLoading como false
      });
  }, []);

  const handleRemove = (id) => {
    fetch(`https://pizzeria3.azurewebsites.net/api/produto/?id=${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          const newArray = data.filter((item) => item.id !== id);
          setData(newArray);
          localStorage.setItem("cad_cliente", JSON.stringify(newArray));
        } else {
          throw new Error("Erro ao remover produto");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao remover produto");
      });
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: pizzaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
        rel="stylesheet"
      />
      <Header></Header>
      <Sidebar></Sidebar>
      <section id="content">
        <Flex
          h="100vh"
          align="center"
          justify="center"
          fontSize="20px"
          fontFamily="poppins"
        >
          <Box maxW={1000} w="100%" h="100vh" py={10} px={2}>
            <Button
              bg="#8e1c1a"
              color="white"
              onClick={() => [setDataEdit({}), onOpen()]}
            >
              NOVO PRODUTO
            </Button>

            <Box overflowY="auto" height="100%">
              {isLoading ? (
                <Flex align="center" justify="center" height="100%">
                  {/* Renderizar animação Lottie enquanto isLoading for verdadeiro */}
                  <Lottie options={lottieOptions} height={200} width={200} />
                </Flex>
              ) : (
                <Table mt="6">
                  <Thead>
                    <Tr>
                      <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                        Nome
                      </Th>
                      <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                        Preço
                      </Th>
                      <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                        Categoria
                      </Th>
                      <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                        Descrição
                      </Th>
                      <Th p={0}></Th>
                      <Th p={0}></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map(
                      ({ id, nome, valor, tipo, descricao }, index) => (
                        <Tr
                          key={index}
                          cursor="pointer"
                          _hover={{ bg: "gray.100" }}
                        >
                          <Td maxW={isMobile ? 5 : 100}>{nome}</Td>
                          <Td maxW={isMobile ? 5 : 100}>{valor}</Td>
                          <Td maxW={isMobile ? 5 : 100}>{tipo}</Td>
                          <Td maxW={isMobile ? 5 : 100}>{descricao}</Td>

                          <Td p={0}>
                            {/* <EditIcon
                              fontSize={20}
                              onClick={() => [
                                setDataEdit({
                                  nome,
                                  valor,
                                  tipo,
                                  descricao,
                                  index,
                                }),
                                onOpen(),
                              ]}
                            /> */}
                          </Td>
                          <Td p={0}>
                            <DeleteIcon
                              fontSize={20}
                              onClick={() => handleRemove(id)}
                            />
                          </Td>
                        </Tr>
                      )
                    )}
                  </Tbody>
                </Table>
              )}
            </Box>
          </Box>
          {isOpen && (
            <ModalComp
              isOpen={isOpen}
              onClose={onClose}
              data={data}
              setData={setData}
              dataEdit={dataEdit}
              setDataEdit={setDataEdit}
              // refresh={refresh}
            />
          )}
        </Flex>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default VerProdutos;
