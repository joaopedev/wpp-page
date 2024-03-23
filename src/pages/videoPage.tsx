import {
  Box,
  VStack,
  Text,
  AspectRatio,
  Progress,
  Button,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import * as React from "react";
import { Link } from 'react-router-dom';

export const VideoPage: React.FC = () => {

  const handleClick = () => {
      window.location.href = '/checkout';
  }

  return (
    <Box>
      <Box bg="Yellow" h="60px" w="100%" p={4} color="white">
        <VStack>
          <Text color="black" fontSize="2xl" as="b">
            {" "}
            APLICATIVO FUNCIONA EM TODOS OS PAÍSES DO MUNDO
          </Text>
        </VStack>
      </Box>
      <VStack>
        <Text as="b" mt={8}>
          Acesse o Whatsapp, Instagram, Facebook, Ligações, Áudios, Fotos,
          Vídeos e Localização de qualquer Celular usando este APlicativo apenas
          com o numero
        </Text>
      </VStack>
      <Box>
        <AspectRatio ml="16%" maxW="70%" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>

        <Stack mt={7} ml="35%">
          <Progress maxW="50%" value={80} />
          <Link to="/checkout">
          <Button w="50%" colorScheme="green" onClick={handleClick}>
            Quero ver o Resultado!
          </Button>
          </Link>
        </Stack>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          <AspectRatio ml="16%" maxW="70%" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
          <AspectRatio ml="16%" maxW="70%" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
          <AspectRatio ml="16%" maxW="70%" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
          <AspectRatio ml="16%" maxW="70%" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
          <AspectRatio ml="16%" maxW="70%" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
          <AspectRatio ml="16%" maxW="70%" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default VideoPage;
