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
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [price, setPrice] = useState(dataEdit.price || "");
    const [category, setCategory] = useState(dataEdit.category || "");
    const [product_code, setProduct_code] = useState(dataEdit.product_code || "");
    const [description, setDescription] = useState(dataEdit.description || "");
    
    const handleSave = () => {
      if (!name || !price  || !category || !product_code) return;
  
      if (product_codeAlreadyExists()) {
        return alert("Código do produto já cadastrado!");
      }
  //////////////////////////////////////////////////////////////////////
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, price, category, description, product_code };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { name, price, category, description, product_code }]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const product_codeAlreadyExists = () => {
      if (dataEdit.product_code !== product_code && data?.length) {
        return data.find((item) => item.product_code === product_code);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Produtos</ModalHeader>
           
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel><br/><br/>Nome</FormLabel>
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
                <Box>
                  <FormLabel>Código do Produto</FormLabel>
                  <Input
                    type="text"
                    value={product_code}
                    onChange={(e) => setProduct_code(e.target.value)}
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
  