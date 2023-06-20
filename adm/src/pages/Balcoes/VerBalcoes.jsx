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
        setData(dataFromDB);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao obter dados do banco de dados");
      });
  }, []);


  const handleRemove = (CPF) => {
    fetch(`https://pizzeria3.azurewebsites.net/api/usuario/?CPF=${CPF}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const newArray = data.filter((item) => item.CPF !== CPF);
          setData(newArray);
          localStorage.setItem("cad_cliente", JSON.stringify(newArray));
        } else {
          throw new Error("Erro ao remover balcão");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao remover Balcão");
      });
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
      <Box maxW={1200} w="100%" h="100vh" py={10} px={2}>
        <Button bg="#8e1c1a" color="white" onClick={() => [setDataEdit({}), onOpen()]}>
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
                  Usuário
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
              {data.map(({ name, email, CPF, phone_number, password, user_name, date}, index) => (
                <Tr key={index} cursor="pointer" _hover={{ bg: "gray.100" }}>
                  <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{CPF}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{email}</Td> 
                  <Td maxW={isMobile ? 5 : 100}>{user_name}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{phone_number}</Td> 
                  <Td maxW={isMobile ? 5 : 100}>{password}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{date}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, CPF, email, user_name, phone_number, password, date, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(CPF)}
                    />
                  </Td>
                </Tr>
              ))}
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
    </section>
    </div>
  );
};

export default VerBalcoes;