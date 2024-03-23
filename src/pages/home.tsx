import { Box, Image, VStack, Input, Button, Text, Spinner } from "@chakra-ui/react";
import React, { useState } from 'react';
import TesteImage from "../images/teste_agora_mesmo.png";
import FooterImage from "../images/footer_image.png";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const Home: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {

    setIsLoading(true);

    setTimeout(() => {
      window.location.href = '/contatos';
    }, 5000);
  };

  return (
    <Box>
      <Box bg="#00a86b" h="90px" w="100%" p={4} color="white">
      </Box>
      <VStack>
        <Image src={TesteImage} alt="Dan Abramov" />
      </VStack>
      <VStack>
        <Input placeholder="Cod País + Whatsapp" maxW="80%" />
        {isLoading ? (
          <Spinner />
          ) : (
          <Button w="80%" colorScheme="green" onClick={handleClick}>
            Rastrear agora
          </Button>
        )}
        <Text mt={8}>*Esta Ferramenta é 100% anônima.</Text>
        <Text>Funciona em todos os sistemas operacionais.</Text>
      </VStack>
      <Box mt={2} bg="black" h="230px" w="100%" p={4} color="white">
        <VStack>
          <Image src={FooterImage} alt="Dan Abramov" />
          <Text textColor="white">
            Copyright {getCurrentYear()} - App Espião.<br></br>
            Todos os Direitos Reservados.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
