import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "../../components/ModalComponents/ModalCompCadastroBalcao";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const VerBalcoes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    fetch("https://pizzeria3.azurewebsites.net/api/usuario")
      .then((response) => response.json())
      .then((dataFromDB) => {
        // Filtrar usuários do tipo "balcao"
        const balcaoData = dataFromDB.filter((user) => user.tipo === "balcao");
        setData(balcaoData);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao obter dados do banco de dados");
      });
  }, []);

  const handleRemove = (id) => {
    fetch(`https://pizzeria3.azurewebsites.net/api/usuario?id=` + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Balcão removido com sucesso");
          // window.location.reload();
        } else {
          throw new Error("Erro ao remover balcão");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao remover balcão");
      });
  };

  // const handleEdit = (id, newData) => {
  //   handleRemove(id); // Remove o usuário antigo
  
  //   fetch(`https://pizzeria3.azurewebsites.net/api/usuario/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newData),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         alert("Usuário atualizado com sucesso");
  //         const updatedData = data.map((user) => {
  //           if (user.id === id) {
  //             return { ...user, ...newData };
  //           }
  //           return user;
  //         });
  //         setData(updatedData);
  //         onClose();
  //       } else {
  //         throw new Error("Erro ao atualizar usuário");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Erro ao atualizar usuário");
  //     });
  // };
  

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
          <Box maxW={1200} w="100%" h="100vh" py={10} px={2}>
            <Button
              bg="#8e1c1a"
              color="white"
              onClick={() => [setDataEdit({}), onOpen()]}
            >
              NOVO BALCAO
            </Button>

            <Box overflowY="auto" height="100%">
              <Table mt="6">
                <Thead>
                  <Tr>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                      Nome
                    </Th>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                      CPF
                    </Th>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                      Email
                    </Th>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                      Celular
                    </Th>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                      Senha
                    </Th>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                      Dat.Nasc
                    </Th>
                    <Th p={0}></Th>
                    <Th p={0}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(
                    (
                      { id, nome, email, cpf, telefone, senha, dataNasc },
                      index
                    ) => (
                      <Tr
                        key={index}
                        cursor="pointer"
                        _hover={{ bg: "gray.100" }}
                      >
                        <Td maxW={isMobile ? 5 : 100}>{nome}</Td>
                        <Td maxW={isMobile ? 5 : 100}>{cpf}</Td>
                        <Td maxW={isMobile ? 5 : 100}>{email}</Td>
                        <Td maxW={isMobile ? 5 : 100}>{telefone}</Td>
                        <Td maxW={isMobile ? 5 : 100}>{senha}</Td>
                        <Td maxW={isMobile ? 5 : 100}>{dataNasc}</Td>
                        <Td p={0}>
                          {/* <EditIcon
                            fontSize={20}
                            onClick={() => [
                              setDataEdit({
                                nome,
                                email,
                                cpf,
                                telefone,
                                senha,
                                dataNasc,
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
            />
          )}
        </Flex>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default VerBalcoes;
