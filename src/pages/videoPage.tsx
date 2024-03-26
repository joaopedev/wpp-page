import {
  Box,
  VStack,
  Text,
  Progress,
  Stack,
  SimpleGrid,
  Image,
  Avatar,
} from "@chakra-ui/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import VideoAPP from "../videos/appespiao.mp4";
import FooterImage from "../images/footer_image.png";
import ResulthableButton from "../components/resulthableButton";
import PrimeiroVideoEspiao from "../videos/primeirovideoespiao.mp4";
import SegundoVideoEspiao from "../videos/segundovideoespiao.mp4";
import TerceiroVideoEspiao from "../videos/terceirovideoespiao.mp4";
import QuartoVideoEspiao from "../videos/quartovideoespiao.mp4";
import QuintoVideoEspiao from "../videos/quintovideoespiao.mp4";
import SextoVideoEspiao from "../videos/sextovideoespiao.mp4";
import WallpapperWpp from "../images/whatappimage.png";

export const VideoPage: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState<string | null>(null);
  const handleClick = () => {
    navigate("/checkout");
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress <= 100 ? newProgress : prevProgress;
      });
    }, 2000);
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Box bg="Yellow" h="30%" w="100%" p={4} color="white">
        <VStack>
          <Text color="black" fontSize="2xl" as="b">
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
      <Box  mt={3}>
        <VStack>
          <video controls autoPlay width="80%">
            <source src={VideoAPP} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </VStack>
        <Stack mt={4} ml={"27%"}>
          <Progress
            colorScheme="green"
            height="32px"
            maxW="60%"
            value={progress}
          />
          <Text ml={"29%"}>{progress >= 2 ? `${progress}%` : "2%"}</Text>
        </Stack>
        {progress < 100 ? (
          <VStack m={2}>
            <Text>
              Aguarde! Estamos levantando as informações sobre o contato.
            </Text>
          </VStack>
        ) : null}

        {progress === 100 && (
          <VStack mt={7}>
            <ResulthableButton onClick={handleClick} />
          </VStack>
        )}
        {progress < 100 ? (
          <Stack
            h="590px"
            borderRadius={2}
            m={5}
            backgroundImage={WallpapperWpp}
            mt={5}
          >
            <VStack>
              <Text as="b" mt={6} fontSize="sm" color="green.500">
                {phoneNumber}
              </Text>
              <Avatar size="2xl" mt={2} src="https://bit.ly/broken-link" />
            </VStack>
            <VStack>
              <Text mt={2} fontSize="sm" color="gray.500">
                Analisando...
              </Text>
            </VStack>
            <Progress
              mt={2}
              ml="39%"
              height="17px"
              maxW="20%"
              colorScheme="green"
              value={progress}
            />
          </Stack>
        ) : null}
        {progress === 100 && (
          <VStack mt={3}>
          <Text p={5} as="b">Veja os comentários dos nossos clientes! </Text>
          </VStack>
        )}
        {progress === 100 && (
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
        )}
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
