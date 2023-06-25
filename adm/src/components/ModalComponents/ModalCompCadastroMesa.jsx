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
  const [numero, setNumero] = useState(dataEdit.numero || "");
  const handleSave = () => {
    if (!numero) return;
    if (name_AlreadyExists()) {
      return alert("Nome do produto já cadastrado!");
    }

    fetch("https://pizzeria3.azurewebsites.net/api/mesa")
      .then((response) => response.json())
      .then((dataFromDB) => {
        const body = {
          numero
        };


        fetch("https://pizzeria3.azurewebsites.net/api/mesa", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
          .then((response) => {
            if (response.ok) {
              alert("Produto cadastrado com sucesso");
              const newDataArray = !Object.keys(dataEdit).length
                ? [...dataFromDB, {numero}]
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
    if (dataEdit.numero !== numero && data?.length) {
      return data.find((item) => item.numero === numero);
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
          >Cadastro de Mesas</ModalHeader>
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={2}>
              <Box>
                <FormLabel><br />Número da Mesa</FormLabel>
                <Input
                  type="text"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
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

