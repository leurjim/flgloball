import React from "react"
import Layout from "../components/layout"
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Grid,
  Container,
} from '@chakra-ui/react';
import { FaAward } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
import { GrBusinessService } from "react-icons/gr";
import CaptionCarousel from "../components/carousel";
import Contact from "../components/contacto";

function IndexPage() {
  return (
    <Layout>
    <Stack direction={{ base: 'column', md: 'row' }} mt='60px'>
      <Flex p={8} flex={2} align={'center'} justifyContent={'center'} bg="white">
        <Stack spacing={6} w={'full'} maxW={'sm'}>
          <Box
            as="div"
            position="relative"
          >
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://res.cloudinary.com/leurjim/image/upload/v1655346824/logo5_mgfan6.jpg'
              }
            />
          </Box>
        </Stack>
      </Flex>
      <Flex flex={4} alignItems={'center'} justifyContent={'center'} maxW={'full'}>
        <SimpleGrid
          templateColumns={{ md: '1fr' }}
          pos='relative'>
          <GridItem
            colSpan={4}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://res.cloudinary.com/leurjim/image/upload/v1655048122/dimitry-anikin-TOKU5lczI3I-unsplash_mzeuaj.jpg'
              }
            />
          </GridItem>
          <Box 
            py={8}
           
          >
            <Box
              maxW={'445px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'md'}
              bg='primary'
              p={6}
              overflow={'hidden'}
              marginTop='-100px'
              marginLeft='20px'
              >
              <Stack>
                <Heading
                  color='white'
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  fontFamily={'body'}>
                  Ofrecemos lo mejor en transporte log??stico.
                </Heading>
                <Text 
                  color={'white'}
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
                  Con nuestra experiencia, ofrecemos el servicio log??stico de transporte que su empresa necesita, nos esforzamos por transportar sus bienes con rapidez y seguridad.
                </Text>
              </Stack>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>
    </Stack>
    <Stack id="nosotros" bg={'gray.200'} p={2}>
      <Container maxW={'7xl'} py={8} as={Stack} spacing={12}>
        <Stack spacing={2} align={'center'}>
          <Heading
            fontSize={'xl'}
            fontWeight='bold'
            color='primary'
          >
            Por qu?? Escogernos
          </Heading>
          <Text
            fontSize={'2xl'}
            fontWeight='bold'
            textAlign={'center'}
          >
            La efectividad de nuestros procesos log??sticos se refleja en nuestro crecimiento y el de nuestros clientes.
          </Text>
        </Stack>
      </Container>
      <SimpleGrid
        templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr' }}
        spacing={1}
        >
        <Center py={6}>
          <Box
            maxW={'350px'}
            w={'full'}
            bg='white'
            boxShadow={'dark-lg'}
            rounded={'2xl'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'140px'}
              bg={'white'}
              mt={4}
              pos={'relative'}>
              <FaAward
                size={100}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
                borderBottom='2px solid gray'>
                Calidad del Servicio
              </Heading>
              <Text color={'gray.500'}>
              Personal completamente capacitado para acelerar el procedimiento para la obtenci??n de permisos requeridos para en env??a y recepci??n de bienes de acuerdo a las normativas estipuladas para cada env??o.
              </Text>
            </Stack>
          </Box>
        </Center>
        <Center py={6}>
          <Box
            maxW={'350px'}
            w={'full'}
            bg='white'
            boxShadow={'dark-lg'}
            rounded={'2xl'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'140px'}
              bg={'white'}
              mt={4}
              pos={'relative'}>
              <FiTarget
                size={100}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
                borderBottom='2px solid gray'>
                Visi??n
              </Heading>
              <Text color={'gray.500'}>
              Empresa l??der en el env??o y recepci??n de todo tipo de transporte de carga ofreciendo las mejores soluciones integrales a nuestros clientes, con los m??s altos est??ndares de calidad, seguridad y medio ambiente.  
              </Text>
            </Stack>
          </Box>
        </Center>
        <Center py={6}>
          <Box
            maxW={'350px'}
            w={'full'}
            bg='white'
            boxShadow={'dark-lg'}
            rounded={'2xl'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'140px'}
              bg={'white'}
              mt={4}
              pos={'relative'}>
              <GrBusinessService
                size={100}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
                borderBottom='2px solid gray'>
                Enfocado en el Cliente
              </Heading>
              <Text color={'gray.500'}>
              El ??xito de nuestros servicios se centra en resolver los problemas que los clientes han identificado de forma preventiva. Se centra en detectar los problemas desde el principio, evitando que se agraven.
              </Text>
            </Stack>
          </Box>
        </Center>
      </SimpleGrid>
      <SimpleGrid
        templateColumns={{ sm: '1fr', md: '1fr 1fr' }}
        py={8}
        >
          <Image
              alt={'Login Image'}
              objectFit={'cover'}
              h='800px'
              w={'full'}
              src={
                'https://res.cloudinary.com/leurjim/image/upload/v1655048124/pat-whelen-NxM3zUWHFoI-unsplash_zcoghg.jpg'
              }
            />
            <Center mt='auto'>
            <Box
              w={'full'}
              bg='primary'
              p={6}
              overflow={'hidden'}>
              <Stack p={10}>
                <Heading
                  color='white'
                  fontSize={{ base: '2xl', md: '4xl' }}
                  textAlign={'center'}
                  fontFamily={'body'}
                  maxW={'3xl'}
                  lineHeight={3.1}
                  letterSpacing='1.5px'>
                  Quienes Somos
                </Heading>
                <Text 
                  color='white'
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={1.8}
                  letterSpacing='1.5px'>
                  F&L Global Logistics, es una empresa de transportes log??sticos que proporciona un amplio abanico de servicios integrales dirigidos a empresas tanto privadas como p??blicas.
                </Text>
                <Text 
                  color='white'
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={1.8}
                  letterSpacing='1.5px'>
                  Desde nuestros comienzos, dentro de nuestra extensa oferta de servicios para empresas, ofrecemos tambi??n colaboraciones y servicios de apoyo log??stico para aquellos operadores de transportes que no se encuentra situadas en Per?? y que puedan precisar para su distribuci??n en todo nuestro territorio, dando una efectividad en el servicio y en la coordinaci??n de las entregas acorde a las exigencias del sector.
                </Text>
              </Stack>
            </Box>
          </Center>
        </SimpleGrid>
      <Box as="div" id="servicios">
        <CaptionCarousel />
      </Box>
      <Box as="div" id="contacto">
        <Contact />
      </Box>
    </Stack>
    </Layout>
  )
}

export default IndexPage
