import { Box, VStack, Text, Image, Flex, Stack } from "@chakra-ui/react";
import * as React from "react";
import PrintImage from "../images/print_wpp.png";
import ValorDesc from "../images/valor_desc.png";
import CompraSegura from "../images/image_compra_garantida.png";
import CompraSegura2 from "../images/image_compra_garantida_2.png";
import Garantia from "../images/garantia.png";
import FooterImage from "../images/footer_image.png";
import Comentarios from "../images/comentarios_mobile.png";
import BreathableButton from "../components/breathableButton";
import PrimeiroVideoPaginaTres from "../videos/primeirovideopaginatres.mp4";
import SegundoVideoPaginaTres from "../videos/segundovideopaginatres.mp4";
import FotoPrimeiroVideo from "../images/primeirovideopag3.png";
import FotoSegundoVideo from "../images/segundovideopag3.png";
import ReactPlayer from 'react-player';

const getRandomNumber = () => {
  return Math.floor(Math.random() * (180 - 80 + 1)) + 80;
};


const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const CheckOut: React.FC = () => {

  const getUTMParameters = (): Record<string, string> => {
    const utmParametersString = sessionStorage.getItem('utmParameters') || '{}';
    return JSON.parse(utmParametersString);
  };

  const buildPurchaseURL = (): string => {
    const utmCampaign = getUTMParameters().utm_campaign; 

    let purchaseURL = 'https://app.monetizze.com.br/checkout/KGX357636';

    if (utmCampaign) {
      purchaseURL += `?utm_campaign=${encodeURIComponent(utmCampaign)}`;
    }

    return purchaseURL;
  };

  
  
  const handleClick = () => {
    const purchaseURL = buildPurchaseURL();
    window.open(purchaseURL, '_blank');
  };


  const licenseCount = getRandomNumber();

  return (
    <Box>
      <Box bg="Yellow" h="30%" w="100%" p={4} color="white">
        <VStack>
          <Text color="black" fontSize="2xl" as="b">
            RESTAM: {licenseCount} LICENÇAS DISPONÍVEIS
          </Text>
        </VStack>
      </Box>
      <Box>
        <VStack>
          <Text color="black" fontSize="30">
            FORAM ENCONTRADAS
          </Text>
          <Text color="red" fontSize="30" as="b">
            12 CONVERSAS
          </Text>
          <Text color="red" fontSize="30">
            COMPROMETEDORAS
          </Text>
          <Text textAlign="center" m={4} color="black" fontSize="18" justifyContent="center">
            PARA TER ACESSO AS CONVERSAS FINALIZE SEU CADASTRO PAGANDO UMA TAXA{" "}
            SIMBÓLICA PARA MANTER NOSSO SITE NO AR E SEU APP ESPIÃO FUNCIONANDO
          </Text>
          <Text
            m={3}
            color="black"
            fontSize="xl"
            as="b"
            textAlign="center"
            textDecoration={"underline"}
          >
            VOCÊ VAI PRECISAR APENAS DO NÚMERO PARA MONITORAR <br></br> NÃO
            PRECISA TER ACESSO AO CELULAR PARA MONITORAR
          </Text>
        </VStack>
        <VStack spacing={1} mt={4}>
          <Image src={PrintImage} alt="print whatsapp" />
        </VStack>
        <VStack p={2} mt={4}>
          <Text textAlign="center" color="green" fontSize="20" as="b">
            ÚLTIMAS 7 LICENÇAS COM DESCONTO SEM REGISTRO NA FATURA DO CARTÃO
          </Text>
        </VStack>
        <VStack spacing={1}>
          <Image mb={3} src={ValorDesc} alt="desconto" />
          <BreathableButton onClick={handleClick} />
          <Image m={3} src={CompraSegura} alt="compra segura" />
          <Image src={Comentarios} alt="comentarios"/>
        </VStack>
        <VStack>
          <Text
            color="green"
            fontSize="20"
            as="b"
            textAlign="center"
            mt={3}
          >
            ÚLTIMAS 7 LICENÇAS COM DESCONTO SEM REGISTRO NA FATURA DO CARTÃO
          </Text>
          <Image src={ValorDesc} alt="desconto" />
          <BreathableButton onClick={handleClick} />
          <Image p={3} src={CompraSegura} alt="compra segura" />
        </VStack>
      </Box>
      <Box  bg={"gray"}>
        <VStack m={2}>
          <Text fontSize="3xl" as="b" color={"white"}>
            GARANTIA BLINDADA
          </Text>
        </VStack>
        <VStack>
          <Flex align="center" m={3}>
            <Image src={Garantia} alt="garantia" width={"40%"} />
            <VStack>
              <Text textAlign="center" color={"white"} fontSize={20}>
                CASO NÃO GOSTE DO APP <br /> ESPIÃO VOCÊ TEM 30 DIAS DE
                GARANTIA, <br /> BASTA NOS CHAMAR <br /> NO WHATSAPP
              </Text>
            </VStack>
          </Flex>
        </VStack>
        <VStack m={2}>
          <Text color="white" fontSize="20" as="b" textAlign="center">
            ÚLTIMAS 7 LICENÇAS COM DESCONTO SEM REGISTRO NA FATURA DO CARTÃO
          </Text>
          <Image src={ValorDesc} alt="desconto" />
          <BreathableButton onClick={handleClick} />
          <Image m={2} src={CompraSegura2} alt="compra segura" />
        </VStack>
      </Box>
      <Box bg={"white"}>
        <VStack m={2} mt={4}>
          <Text textAlign="center" color={"black"} fontSize="2xl" as={"b"}>
            PESSOAS QUE USAM APP ESPIÃO
          </Text>
        </VStack>
        <Stack mt={3}>
          <div style={{ marginLeft: "16%" }}>
              <ReactPlayer
                url={PrimeiroVideoPaginaTres}
                controls
                width="80%"
                height={200}
                light={FotoPrimeiroVideo}
              />
          </div>
        </Stack>
        <VStack mt={5}>
          <Text color="green" fontSize="20" as="b" textAlign="center">
            ÚLTIMAS 7 LICENÇAS COM DESCONTO SEM REGISTRO NA FATURA DO CARTÃO
          </Text>
          <Image mb={2} src={ValorDesc} alt="desconto" />
          <BreathableButton onClick={handleClick} />
          <Image m={2} src={CompraSegura} alt="compra segura" />
        </VStack>
        <Stack mt={4}>
          <div style={{ marginLeft: "16%" }}>
            <ReactPlayer
              url={SegundoVideoPaginaTres}
              controls
              width="80%"
              height={200}
              light={FotoSegundoVideo}
            />
          </div>
        </Stack>
        <VStack mt={4}>
          <Text color="green" fontSize="20" as="b" textAlign="center">
            ÚLTIMAS 7 LICENÇAS COM DESCONTO SEM REGISTRO NA FATURA DO CARTÃO
          </Text>
          <Image mb={2} src={ValorDesc} alt="desconto" />
          <BreathableButton onClick={handleClick} />
          <Image m={2} src={CompraSegura} alt="compra segura" />
        </VStack>
      </Box>
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

export default CheckOut;
