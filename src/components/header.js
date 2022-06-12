import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    SimpleGrid,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [ 
    {
      name: 'Inicio',
      to: '/'
    },
    {
      name: 'Nosotros',
      to: '/#nosotros'
    },
    {
      name: 'Servicios',
      to: '/#servicios'
    },
    {
      name: 'Tracking',
      to: 'https://intranet.andessystems.com.pe/login'
    },
    {
      name: 'Tarifario',
      to: '/tarifario'
    },
    {
      name: 'Contacto',
      to: '/#contacto'
    },
  ];
  
  const NavLink = ({ children, to }) => (
    <Link
      as={GatsbyLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
        color: 'primary'
      }}
      to={to}>
      {children}
    </Link>
  );

  export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <Box
        as={'header'}
        pos='fixed'
        top='0'
        w={'full'}
        minH={'60px'}
        boxShadow='sm'
        zIndex="999"
        justify={'center'}
        bg='primary'
      >
        <SimpleGrid templateColumns={{ sm: '1fr', md: '1fr 2fr' }}>
            <SimpleGrid>
            <Box>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    variant={'ghost'}
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Toggle Navigation'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                </Flex>

                {isOpen ? (
                <Box pb={4} display={{ md: 'none' }} color='white'>
                    <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                        <NavLink key={link} to={link.to}>{link.name}</NavLink>
                    ))}
                    </Stack>
                </Box>
                ) : null}
            </Box>
            </SimpleGrid>
            <SimpleGrid templateColumns={{ sm: '1fr', md: '1fr 2fr' }}>
            <Box></Box>
            <Box px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <HStack spacing={8} alignItems={'center'}>
                    <HStack
                    as={'nav'}
                    color='white'
                    spacing={20}
                    display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                        <NavLink key={link} to={link.to}>{link.name}</NavLink>
                    ))}
                    </HStack>
                </HStack>
                </Flex>
            </Box>
            </SimpleGrid>
        </SimpleGrid>
      </Box>
    )
  }