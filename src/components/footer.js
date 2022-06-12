import { Link as GatsbyLink } from "gatsby";
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import * as React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Logo = (props) => {
  return (
    <Box>
      <Image
        h={16}
        alignItems={'center'}
        justifyContent={'center'}
        src='https://res.cloudinary.com/leurjim/image/upload/v1652589653/logo_footer_e80gnq.png'
        alt='F&L Logo'
        />
    </Box>
  )
};

const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('black', 'gray.900')}
      color={useColorModeValue('gray.100', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} /> 
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Compañia</ListHeader>
            <Link as={GatsbyLink} to={'/'}>Inicio</Link>
            <Link as={GatsbyLink} to={'/#nosotros'}>Nosotros</Link>
            <Link as={GatsbyLink} to={'/#servicios'}>Servicios</Link>
            <Link as={GatsbyLink} to={'/#contacto'}>Contacto</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Servicios</ListHeader>
            <Link href={'/#servicios'}>Transporte Terrestre</Link>
            <Link href={'/#servicios'}>Transporte Aéreo</Link>
            <Link href={'/#servicios'}>Transporte Máritimo</Link>
          </Stack>
          <Stack>
            <ListHeader>Social Media</ListHeader>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Linkedin'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}