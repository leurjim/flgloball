import React from 'react';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    useBreakpointValue,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsPerson } from 'react-icons/bs';
  
  export default function Contact() {
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    
    return (
      <Box
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url('https://res.cloudinary.com/leurjim/image/upload/v1655048121/athanasios-papazacharias-0J8hoI5aW_Q-unsplash_jgdrui.jpg')`}>
        <Container 
            maxW="full" 
            mt={0} 
            centerContent overflow="hidden">
            <Flex>
            <Box
                bg="#02054B"
                color="white"
                borderRadius="lg"
                m={{ sm: 4, md: 16, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}>
                <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                    <WrapItem>
                    <Box>
                        <Heading>Pongase en contacto</Heading>
                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                        Rellene el siguiente formulario para contactarnos
                        </Text>
                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                            <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                            +51 967543210
                            </Button>
                            <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                            sroque@flgloball.com
                            </Button>
                            <Button
                            size="md"
                            height="48px"
                            width="300px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                            Jr. Echenique 256, San Miguel, Lima, Perú
                            </Button>
                        </VStack>
                        </Box>
                    </Box>
                    </WrapItem>
                    <WrapItem>
                    <Box bg="white" borderRadius="lg">
                        <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                            <FormControl id="name">
                            <FormLabel>Nombre</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                                />
                                <Input type="text" size="md" />
                            </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                                />
                                <Input type="text" size="md" />
                            </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                            <FormLabel>Mensaje</FormLabel>
                            <Textarea
                                borderColor="gray.300"
                                _hover={{
                                borderRadius: 'gray.300',
                                }}
                                placeholder="message"
                            />
                            </FormControl>
                            <FormControl id="name" float="right">
                            <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}>
                                Enviar Mensaje
                            </Button>
                            </FormControl>
                        </VStack>
                        </Box>
                    </Box>
                    </WrapItem>
                </Wrap>
                </Box>
            </Box>
            </Flex>
        </Container>
      </Box>
    );
  }