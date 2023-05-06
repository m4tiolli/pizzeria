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
    const [price, setPrice] = useState(dataEdit.price || "");
    const [category, setCategory] = useState(dataEdit.category || "");
    const [description, setDescription] = useState(dataEdit.description || "");
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
      setFile(URL.createObjectURL(e.target.files[0]));
    };

    const handleSave = () => {
      if (!name || !price  || !category) return;
      if (name_AlreadyExists()) {
        return alert("Nome do produto já cadastrado!");
      }
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, price, category, description};
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { name, price, category, description}]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
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
             background = "#1d1d1f"
             color = "#fff"
             text-align = "center"
             >Cadastro de Produtos</ModalHeader>
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={2}>
                <Box>
                  <FormLabel><br/>Nome</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Preço</FormLabel>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Categoria</FormLabel>
                  <Input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Box>
                <Box>
                <FormLabel>Descrição</FormLabel>
                  <Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Box>
                
                <FormLabel htmlFor="imagem">
                  Selecione uma imagem para o produto
                </FormLabel>
                <Box
                  w="60px"
                  h="60px"
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
                    <Box as="span" fontSize="13">
                      Clique p/ selecionar a imagem
                    </Box>
                  )}
                </Box>
                <Input
                  type="file"
                  accept="image/*"
                  id="imagem"
                  display="none"
                  onChange={handleFileChange}
                />
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
  