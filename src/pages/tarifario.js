import React from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import Layout from '../components/layout';

function PriceWrapper( { children } ) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Layout>
        <Box py={8} mt={'100px'}>
        <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize="4xl">
            Tarifario
            </Heading>
        </VStack>
        <Stack
            direction={{ base: 'column', md: 'row' }}
            textAlign="center"
            justify="center"
            spacing={{ base: 4, lg: 10 }}
            py={10}>
            <PriceWrapper>
            <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="xl">
                Gastos Locales Carga FCL
                </Text>
            </Box>
            <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Handling
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            100
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Transmisión
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            400
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    DOC FEE
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            100
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    TDI
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            S/.
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            150
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                </List>
                <Box w="80%" pt={7}>
                <Button w="full" colorScheme="primary" variant="outline" bg="primary">
                    Contactar
                </Button>
                </Box>
            </VStack>
            </PriceWrapper>

            <PriceWrapper>
            <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="xl">
                    Gastos Locales Carga Consolidadora LCL
                </Text>
            </Box>
            <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Handling
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            80
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Visto Bueno
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            250
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Desconsolidación
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            55 X TN
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Transmisión
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            100
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Forwarder FEE
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            150
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                    </ListItem>
                <ListItem>
                <ListIcon as={FaCheckCircle} color="primary" />
                    TDI
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            S/.
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            100
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                </List>
                <Box w="80%" pt={7}>
                    <Button w="full" colorScheme="primary" variant="outline" bg="primary">
                    Contactar
                    </Button>
                </Box>
            </VStack>
            </PriceWrapper>

            <PriceWrapper>
            <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="xl">
                Gastos Locales Carga Aérea
                </Text>
            </Box>
            <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Handlig
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            120
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Transmisión
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            200
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    DOC FEE
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            100
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    TDI
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            50
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="primary" />
                    Emisión AWB
                    <HStack justifyContent="center">
                        <Text fontSize="xl" fontWeight="600">
                            $USD
                        </Text>
                        <Text fontSize="2xl" fontWeight="900">
                            100
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            + IGV
                        </Text>
                    </HStack>
                </ListItem>
                </List>
                <Box w="80%" pt={7}>
                <Button w="full" colorScheme="primary" variant="outline" bg="primary">
                    Contactar
                </Button>
                </Box>
            </VStack>
            </PriceWrapper>
        </Stack>
        </Box>
    </Layout>
  );
}