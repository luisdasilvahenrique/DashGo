import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { response } from "express";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { json } from "stream/consumers";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
    const isWidhtVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <SideBar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                    <Link href="/users/create" passHref>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                            Criar Novo
                        </Button>
                    </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"] }color="gray.300" w="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th> Usuário </Th>
                                <Th> Data de cadastro </Th>
                                <Th w="8"> </Th>
                                {/* <Th w="8"> </Th> */}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Luís Henrique</Text>
                                        <Text fontSize="sm" color="gray.300">luissh.dev@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWidhtVersion && <Td> 21 de outubro, 2022</Td>}
                                <Td>
                                    <HStack spacing="2">
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiEditLine} fontSize="16"/>}>
                                            { isWidhtVersion ? 'Editar' : '' }
                                        </Button>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine} fontSize="16  "/>}>
                                            { isWidhtVersion ? 'Apagar' : '' }
                                        </Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Uanderson Nunes</Text>
                                        <Text fontSize="sm" color="gray.300">uandersonnunes@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWidhtVersion && <Td> 16 de maio, 2022</Td>}
                                <Td>
                                    <HStack spacing="2">
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiEditLine} fontSize="16"/>}>
                                            { isWidhtVersion ? 'Editar' : '' }
                                        </Button>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine} fontSize="16  "/>}>
                                            { isWidhtVersion ? 'Apagar' : '' }
                                        </Button>
                                    </HStack>
                                        
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Luiza Assis</Text>
                                        <Text fontSize="sm" color="gray.300">luizaassis@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWidhtVersion && <Td> 5 de maio, 2022</Td>}
                                <Td>
                                    <HStack spacing="2">
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiEditLine} fontSize="16"/>}>
                                            { isWidhtVersion ? 'Editar' : '' }
                                        </Button>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine} fontSize="16  "/>}>
                                            { isWidhtVersion ? 'Apagar' : '' }
                                        </Button>
                                    </HStack>
                                        
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">João Alves</Text>
                                        <Text fontSize="sm" color="gray.300">joaoalves@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWidhtVersion && <Td> 02 de fevereiro, 2021</Td>}
                                <Td>
                                    <HStack spacing="2">
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiEditLine} fontSize="16"/>}>
                                            { isWidhtVersion ? 'Editar' : '' }
                                        </Button>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine} fontSize="16  "/>}>
                                                { isWidhtVersion ? 'Apagar' : '' }
                                        </Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    );
}