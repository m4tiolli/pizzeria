import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const handleSave = () => {
    if (!name) return;
    if (name_AlreadyExists()) {
      return alert("Nome do produto já cadastrado!");
    }
    fetch("https://pizzeria3.azurewebsites.net/api/produto")
      .then((response) => response.json())
      .then((dataFromDB) => {
        const body = {
          nome: number,
        };
        fetch("https://pizzeria3.azurewebsites.net/api/produto", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
          .then((response) => {
            if (response.ok) {
              alert("Produto cadastrado com sucesso");
              const newDataArray = !Object.keys(dataEdit).length
                ? [...dataFromDB, { name }]
                : [...dataFromDB];
              setData(newDataArray);
              onClose();
              window.location.reload();
            } else {
              throw new Error("Erro ao cadastrar produto");
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Erro ao cadastrar produto");
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao obter dados do banco de dados");
      });
  };
  const name_AlreadyExists = () => {
    if (dataEdit.name !== name && data?.length) {
      return data.find((item) => item.name === name);
    }
    return false;
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            background="#1d1d1f"
            color="#fff"
            text-align="center"
          >Cadastro de Produtos</ModalHeader>
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={2}>
              <Box>
                <FormLabel><br />Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalComp;

