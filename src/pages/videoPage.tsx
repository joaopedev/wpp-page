import {
  Box,
  VStack,
  Text,
  Progress,
  Stack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import VideoAPP from "../videos/appespiao.mp4";
import FooterImage from "../images/footer_image.png";
import ResulthableButton from "../components/resulthableButton";
import PrimeiroVideoEspiao from "../videos/primeirovideoespiao.mp4";
import SegundoVideoEspiao from "../videos/segundovideoespiao.mp4";
import TerceiroVideoEspiao from "../videos/terceirovideoespiao.mp4";
import QuartoVideoEspiao from "../videos/quartovideoespiao.mp4";
import QuintoVideoEspiao from "../videos/quintovideoespiao.mp4";
import SextoVideoEspiao from "../videos/sextovideoespiao.mp4";

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
      <VStack m={4}>
        <Text as="b" mt={8}>
          Acesse o Whatsapp, Instagram, Facebook, Ligações, Áudios, Fotos,
          Vídeos e Localização de qualquer Celular usando este Aplicativo apenas
          com o numero
        </Text>
      </VStack>
      <Box mt={3}>
        <Box ml="18%">
          <video controls autoPlay width="80%">
            <source src={VideoAPP} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </Box>
        <Stack mt={4} ml={"30%"}>
          <Progress
            colorScheme="green"
            height="32px"
            maxW="60%"
            value={progress}
          />
          <Text ml={"30%"}>{progress >= 2 ? `${progress}%` : "2%"}</Text>
        </Stack>
        {progress === 100 && (
          <Stack mt={7} ml="45%">
            <Link to="/checkout">
              <ResulthableButton onClick={handleClick} />
            </Link>
          </Stack>
        )}
        <SimpleGrid mt={5} columns={[1, 2]} spacing={2}>
          <Box ml="16%">
            <video controls width="80%">
              <source src={PrimeiroVideoEspiao} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </Box>
          <Box ml="16%">
            <video controls width="80%">
              <source src={SegundoVideoEspiao} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </Box>
          <Box ml="16%">
            <video controls width="80%">
              <source src={TerceiroVideoEspiao} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </Box>
          <Box ml="16%">
            <video controls width="80%">
              <source src={QuartoVideoEspiao} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </Box>
          <Box ml="16%">
            <video controls width="80%">
              <source src={QuintoVideoEspiao} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </Box>
          <Box ml="16%">
            <video controls width="80%">
              <source src={SextoVideoEspiao} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </Box>
        </SimpleGrid>
        <Box mt={5} bg="black" h="230px" w="100%" p={4} color="white">
          <VStack>
            <Image src={FooterImage} alt="Dan Abramov" />
            <Text textColor="white">
              Copyright 2023 - App Espião.<br></br>
              Todos os Direitos Reservados.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPage;
