import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

function CadastroBalcao() {
  return (
    <Box h="100vh">
      {/*Div com conteúdo centralizado*/}
      <Center
        as="header"
        h={150}
        bg="#8e1c1a"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8">

        Pizzeria
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh-150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >

          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome do Responsável</FormLabel>
                <Input id="nome" placeholder="Nome do Responsável" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">CPF</FormLabel>
                <Input id="nome" placeholder="CPF" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Celular</FormLabel>
                <Input id="email" type="email" placeholder="Celular" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome do Usuário</FormLabel>
                <Input id="nome" placeholder="Nome do usuário" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Senha</FormLabel>
                <Input id="nome" placeholder="Senha" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Endereço</FormLabel>
                <Input id="nome" placeholder="Endereço" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">CEP</FormLabel>
                <Input id="nome" placeholder="CEP" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Bairro</FormLabel>
                <Input id="nome" placeholder="Bairro" />
              </Box>
    
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Cidade</FormLabel>
                <Input id="nome" placeholder="Cidade" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Estado</FormLabel>
                <Input id="email" type="email" placeholder="Estado" />
              </Box>
            </HStack>

            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="#8e1c1a"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{bg:"#7e1c1a"}}
              >
                Cadastrar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default CadastroBalcao
