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
  const [valor, setValor] = useState(dataEdit.valor || "");
  const [category, setCategory] = useState(dataEdit.category || "");
  const [description, setDescription] = useState(dataEdit.description || "");
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = async (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    const image = await getBase64(e.target.files[0]);
    setImage(image);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
        if ((encoded.length % 4) > 0) {
          encoded += '='.repeat(4 - (encoded.length % 4));
        }
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }

  const handleSave = () => {
    if (!name || !valor || !category) return;
    if (name_AlreadyExists()) {
      return alert("Nome do produto já cadastrado!");
    }

    fetch("https://pizzeria3.azurewebsites.net/api/produto")
      .then((response) => response.json())
      .then((dataFromDB) => {
        const body = {
          nome: name,
          descricao: description,
          valor: valor,
          imagem: image,
          tipo: category,
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
                ? [...dataFromDB, { name, valor, category, description, file: imagePreview }]
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
                  placeholder="Digite o nome"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Preço</FormLabel>
                <Input
                  placeholder="Digite o preço"
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Categoria</FormLabel>
                <Input
                  placeholder="Digite a categoria"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Descrição</FormLabel>
                <Input
                  placeholder="Digite a descrição"
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
                {imagePreview ? (
                  <Box
                    as="img"
                    src={imagePreview}
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

