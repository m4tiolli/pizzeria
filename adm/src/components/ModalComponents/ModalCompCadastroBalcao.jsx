import { useState } from "react";
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

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [CPF, setCPF] = useState(dataEdit.CPF || "");
  const [email, setEmail] = useState(dataEdit.email || "");
  const [phone_number, setPhone_number] = useState(dataEdit.phone_number || "");
  const [user_name, setUser_name] = useState(dataEdit.user_name || "");
  const [password, setPassword] = useState(dataEdit.password || "");
  const [date, setDate] = useState(dataEdit.date || "");
  const [tipo, setTipo] = useState("balconista");

  const handleSave = async () => {
    if (!name || !CPF || !email || !phone_number || !user_name || !password || !date) return;
    if (CPFAlreadyExists()) {
      return alert("CPF já cadastrado!");
    }

    try {
      const response = await fetch("https://pizzeria3.azurewebsites.net/api/auth/cadastrar", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify({
          name,
          CPF,
          email,
          phone_number,
          user_name,
          password,
          datanasc: date,
          tipo
        }),
      });

      if (!response.ok) {
        throw new Error("Ocorreu um erro ao fazer o POST.");
      }

      const responseData = await response.json();
      console.log(responseData);

      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), responseData]
        : [...(data ? data : [])];

      setData(newDataArray);
      onClose();
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao cadastrar o balcão.");
    }
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
          <ModalHeader background="#1d1d1f" color="#fff" textAlign="center">
            Cadastro de Balcões
          </ModalHeader>
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={2} top={4}>
              <Box h="80vh">
                <Flex align="center" justify="center" bg="blackAlpha.200">
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
                          <Input
                            placeholder="Nome do Responsável"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Box>
                      </HStack>
                      <HStack spacing="4">
                        <Box w="100%">
                          <FormLabel htmlFor="CPF">CPF</FormLabel>
                          <Input
                            id="CPF"
                            placeholder="CPF"
                            type="text"
                            value={CPF}
                            onChange={(e) => setCPF(e.target.value)}
                          />
                        </Box>
                        <Box w="100%">
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            id="email"
                            placeholder="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Box>
                      </HStack>
                      <HStack spacing="4">
                        <Box w="100%">
                          <FormLabel htmlFor="user_name">
                            Nome do Usuário
                          </FormLabel>
                          <Input
                            id="user_name"
                            placeholder="Nome do usuário"
                            type="text"
                            value={user_name}
                            onChange={(e) => setUser_name(e.target.value)}
                          />
                        </Box>
                      </HStack>
                      <HStack spacing="4">
                        <Box w="100%">
                          <FormLabel htmlFor="password">Senha</FormLabel>
                          <Input
                            id="senha"
                            placeholder="Senha"
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Box>
                      </HStack>
                      <HStack spacing="4">
                        <Box w="100%">
                          <FormLabel htmlFor="phone_number">Celular</FormLabel>
                          <Input
                            id="celular"
                            placeholder="Celular"
                            type="number"
                            value={phone_number}
                            onChange={(e) => setPhone_number(e.target.value)}
                          />
                        </Box>
                      </HStack>
                      <HStack spacing="4">
                        <Box w="100%">
                          <FormLabel htmlFor="date">
                            Data de Nascimento
                          </FormLabel>
                          <Input
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
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
