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
    Center,
    HStack
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [CPF, setCPF] = useState(dataEdit.CPF || "");
    const [email, setEmail] = useState(dataEdit.email || "");
    const [phone_number, setPhone_number] = useState(dataEdit.phone_number || "");
    const [user_name, setUser_name] = useState(dataEdit.user_name || "");
    const [password, setPassword] = useState(dataEdit.password || "");
    const [CEP, setCEP] = useState(dataEdit.CEP || "");
    
   
    const handleSave = () => {
      if (!name || !CPF  || !email || !phone_number || !user_name || !password || !CEP ) return;
  
      if (CPFAlreadyExists()) {
        return alert("CPF já cadastrado!");
      }
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, CPF, email, phone_number, user_name, password, CEP };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { name, CPF, email, phone_number, user_name, password, CEP }]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_balcao", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const CPFAlreadyExists = () => {
      if (dataEdit.CPF !== CPF && data?.length) {
        return data.find((item) => item.CPF === CPF);
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
             >Cadastro de Balcões</ModalHeader>
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={2} top={4}>
                
              <Box h="80vh">
      {/*Div com conteúdo centralizado*/}
     
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          position="relative"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >

          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Nome do Responsável</FormLabel>
                <Input placeholder="Nome do Responsável" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">CPF</FormLabel>
                <Input id="CPF" placeholder="CPF" 
                type="text"
                value={CPF}
                onChange={(e) => setCPF(e.target.value)} />
              
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" placeholder="Email" 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="use_name">Nome do Usuário</FormLabel>
                <Input id="user_name" placeholder="Nome do usuário" 
                type="text"
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}/>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Input id="senha" placeholder="Senha" 
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="phone_number">Celular</FormLabel>
                <Input id="celular" placeholder="Celular" 
                type="number"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}/>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="CEP">CEP</FormLabel>
                <Input id="nome" placeholder="CEP" 
                type="number"
                value={CEP}
                onChange={(e) => setCEP(e.target.value)}/>
              </Box>
            </HStack>
          </FormControl>
        </Center>
      </Flex>


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
  