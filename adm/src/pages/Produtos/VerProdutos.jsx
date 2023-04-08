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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp.jsx";

const VerProdutos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (product_code) => {
    const newArray = data.filter((item) => item.product_code !== product_code);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };

  return (

<div>
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">Pizzeria</h1>
      </div>

    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
    >
      <Box maxW={1000} w="100%" h="100vh" py={10} px={2}>
        <Button bg="#8e1c1a" color="white" onClick={() => [setDataEdit({}), onOpen()]}>
          NOVO PRODUTO
        </Button>

        <Box overflowY="auto" height="100%">
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
                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                  Código
                </Th>
                
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, price, category, description, product_code }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{price}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{category}</Td> 
                  <Td maxW={isMobile ? 5 : 100}>{description}</Td> 
                  <Td maxW={isMobile ? 5 : 100}>{product_code}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, price, category, description, product_code, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(product_code)}
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
    </div>
  );
};

export default VerProdutos;