import {
    Box,
    VStack,
    Text,
    Image,
    Flex,
    AspectRatio,
    Button,
    Stack,
  } from "@chakra-ui/react";
import * as React from "react";
import PrintImage from "../images/print_wpp.png";
import ValorDesc from "../images/valor_desc.png";
import CompraSegura from "../images/image_compra_garantida.png";
import CompraSegura2 from "../images/image_compra_garantida_2.png";
import Garantia from "../images/garantia.png";
import FooterImage from "../images/footer_image.png";

const getCurrentYear = () => {
    return new Date().getFullYear();
  };

export const CheckOut: React.FC = () => {
    return (
        <Box>
            <Box bg="Yellow" h="60px" w="100%" p={4} color="white">
                <VStack>
                    <Text color="black" fontSize="2xl" as="b">
                    {" "}
                    RESTAM: N LICENÇAS DISPONÍVEIS
                    </Text>
                </VStack>
            </Box>
            <Box>
                <VStack>
                    <Text color='black' fontSize='30' justifyContent="center">
                        FORAM ENCONTRADAS
                    </Text>
                </VStack>
                <VStack>
                    <Text color='red' fontSize='30' as='b' justifyContent="center">
                        12 CONVERSAS 
                    </Text>
                </VStack>
                <VStack>
                    <Text color='red' fontSize='30' justifyContent="center">
                        COMPROMETEDORAS
                    </Text>
                </VStack>
                <VStack m={4}>
                    <Text color='black' fontSize='18' justifyContent="center">
                        PARA TER ACESSO AS CONVERSAS FINALIZE SEU CADASTRO PAGANDO UMA TAXA <br />SIMBÓLICA PARA MANTER NOSSO SITE NO AR E SEU APP ESPIÃO FUNCIONANDO
                    </Text>
                    <Text color='black' fontSize='16' as='b' textDecoration={"underline"} justifyContent="center">
                        VOCÊ VAI PRECISAR APENAS DO NÚMERO PARA MONITORAR
                    </Text>
                </VStack>
                <VStack>
                    <Text color='black' fontSize='16' as='b' textDecoration={"underline"} justifyContent="center">
                        NÃO PRECISA TER ACESSO AO CELULAR PARA MONITORAR
                    </Text> 
                </VStack>
                <VStack spacing={1} mt={4}>
                    <Image src={PrintImage} alt='print whatsapp' />
                </VStack>
                <VStack mt={4}>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        ÚLTIMAS 7 LICENÇAS COM DESCONTO
                    </Text> 
                </VStack>
                <VStack>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        SEM REGISTRO NA FATURA DO CARTÃO
                    </Text> 
                </VStack>
                <VStack spacing={1}>
                    <Image src={ValorDesc} alt='desconto' />
                </VStack>
                <VStack spacing={4} align={'center'} mt={4}>
                <Button w="20%" colorScheme="green">
                    <Text color='white' fontSize='20' as='b'>
                        QUERO ESPIONAR TUDO
                    </Text>
                </Button>
                </VStack>
                <VStack spacing={1}>
                        <Image src={CompraSegura} alt='compra segura' />
                </VStack>
                <VStack>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        ÚLTIMAS 7 LICENÇAS COM DESCONTO
                    </Text> 
                </VStack>
                <VStack>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        SEM REGISTRO NA FATURA DO CARTÃO
                    </Text> 
                </VStack>
                <VStack spacing={1}>
                    <Image src={ValorDesc} alt='desconto' />
                </VStack>
                <VStack spacing={4} align={'center'} mt={4}>
                <Button w="20%" colorScheme="green">
                    <Text color='white' fontSize='20' as='b'>
                        QUERO ESPIONAR TUDO
                    </Text>
                </Button>
                </VStack>
                <VStack spacing={1}>
                        <Image src={CompraSegura} alt='compra segura' />
                </VStack>
            </Box>
            <Box bg={'gray'}>
                <VStack spacing={4} align={'center'}>
                    <Text color={'white'} fontSize={45}  justifyContent={'center'}>
                        GARANTIA BLINDADA    
                    </Text>
                </VStack>
                <VStack >
                    <Flex align="center" m={3}>
                        <Image src={Garantia} alt="garantia" width={'40%'}/>
                        <VStack>
                        <Text color={'white'} fontSize={20}>CASO NÃO GOSTE DO APP <br /> ESPIÃO VOCÊ TEM 30 DIAS DE GARANTIA, <br /> BASTA NOS CHAMAR <br /> NO WHATSAPP</Text>
                        </VStack>
                    </Flex>
                </VStack>
                <VStack>
                    <Text color='white' fontSize='20' as='b' justifyContent="center">
                        ÚLTIMAS 7 LICENÇAS COM DESCONTO
                    </Text> 
                </VStack>
                <VStack>
                    <Text color='white' fontSize='20' as='b' justifyContent="center">
                        SEM REGISTRO NA FATURA DO CARTÃO
                    </Text> 
                </VStack>
                <VStack spacing={1}>
                    <Image src={ValorDesc} alt='desconto' />
                </VStack>
                <VStack spacing={4} align={'center'}>
                <Button w="20%" colorScheme="green">
                    <Text color='white' fontSize='20' as='b'>
                        QUERO ESPIONAR TUDO
                    </Text>
                </Button >
                </VStack>
                <VStack spacing={1}>
                        <Image src={CompraSegura2} alt='compra segura' />
                </VStack>
            </Box>
            <Box bg={'white'}>
                <VStack spacing={4} align={'center'} mt={4}>
                    <Text color={'black'} fontSize={30} as={'b'} justifyContent={'center'}>
                        PESSOAS QUE USAM APP ESPIÃO  
                    </Text>
                </VStack>
                <Stack mt={3}>
                    <AspectRatio ml="16%" maxW="70%" ratio={1}>
                        <iframe
                        title="naruto"
                        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                        allowFullScreen
                        />
                    </AspectRatio>
                </Stack>
                <VStack mt={4}>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        ÚLTIMAS 7 LICENÇAS COM DESCONTO
                    </Text> 
                </VStack>
                <VStack>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        SEM REGISTRO NA FATURA DO CARTÃO
                    </Text> 
                </VStack>
                <VStack spacing={1}>
                    <Image src={ValorDesc} alt='desconto' />
                </VStack>
                <VStack spacing={4} align={'center'}>
                <Button w="20%" colorScheme="green" mt={4}>
                    <Text color='white' fontSize='20' as='b'>
                        QUERO ESPIONAR TUDO
                    </Text>
                </Button>
                </VStack>
                <VStack spacing={1}>
                        <Image src={CompraSegura} alt='compra segura' />
                </VStack>
                <Stack mt={4}>
                    <AspectRatio ml="16%" maxW="70%" ratio={1}>
                        <iframe
                        title="naruto"
                        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                        allowFullScreen
                        />
                    </AspectRatio>
                </Stack>
                <VStack mt={4}>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        ÚLTIMAS 7 LICENÇAS COM DESCONTO
                    </Text> 
                </VStack>
                <VStack>
                    <Text color='green' fontSize='20' as='b' justifyContent="center">
                        SEM REGISTRO NA FATURA DO CARTÃO
                    </Text> 
                </VStack>
                <VStack spacing={1}>
                    <Image src={ValorDesc} alt='desconto' />
                </VStack>
                <VStack spacing={4} align={'center'}>
                <Button w="20%" colorScheme="green" mt={4}>
                    <Text color='white' fontSize='20' as='b'>
                        QUERO ESPIONAR TUDO
                    </Text>
                </Button>
                </VStack>
                <VStack spacing={1}>
                        <Image src={CompraSegura} alt='compra segura' />
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
        </Box>)
}

export default CheckOut;