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
import { Link } from "react-router-dom";

export const VideoPage: React.FC = () => {
  const [progress, setProgress] = React.useState(0);
  const handleClick = () => {
    window.location.href = "/checkout";
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress <= 100 ? newProgress : prevProgress;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          Vídeos e Localização de qualquer Celular usando este Aplicativo apenas
          com o numero
        </Text>
      </VStack>
      <Box mt={3}>
        <AspectRatio ml="16%" maxW="70%" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <Stack mt={4} ml={"30%"}>
        <Progress colorScheme='green' height="32px" maxW="60%" value={progress} />
        </Stack>
        <Stack mt={7} ml="35%">
          
          <Link to="/checkout">
            <Button w="50%" colorScheme="green" onClick={handleClick}>
              Quero ver o Resultado!
            </Button>
          </Link>
        </Stack>
        <SimpleGrid mt={5} columns={[1, 2]} spacing={2}>
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
