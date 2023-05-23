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
import ModalComp from "../.././components/ModalCompCadastroMesa.jsx";

const VerProdutos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    fetch("https://pizzeria3.azurewebsites.net/api/pizza")
      .then((response) => response.json())
      .then((dataFromDB) => {
        setData(dataFromDB);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao obter dados do banco de dados");
      });
  }, []);


  const handleRemove = (id) => {
    fetch(`https://pizzeria3.azurewebsites.net/api/pizza/?id=${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          const newArray = data.filter((item) => item.id !== id);
          setData(newArray);
          localStorage.setItem("cad_cliente", JSON.stringify(newArray));
        } else {
          throw new Error("Erro ao remover a mesa");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao remover a mesa");
      });
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
          <Button
            bg="#8e1c1a"
            color="white"
            onClick={() => [setDataEdit({}), onOpen()]}
          >
            NOVA MESAS
          </Button>

          <Box overflowY="auto" height="100%">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                    Número das mesas
                  </Th>
                  <Th p={0}></Th>
                  <Th p={0}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(({ id, nome}, index) => (
                  <Tr
                    key={index}
                    cursor="pointer"
                    _hover={{ bg: "gray.100" }}
                  >
                    <Td maxW={isMobile ? 5 : 100}>{nome}</Td>                
    
                  <Td p={0}>
                  </Td>
                  
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(id)}
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
          // refresh={refresh}
        />
      )}
    </Flex>
    </div>
  );
};

export default VerProdutos;