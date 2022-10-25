import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiDeleteBinLine, RiDeleteRow, RiEditLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <SideBar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                            Criar Novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
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
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Luís Henrique</Text>
                                        <Text fontSize="sm" color="gray.300">luissh.dev@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td> 21 de outubro, 2022</Td>
                                <Td>
                                    <HStack spacing="2">
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiEditLine} fontSize="16"/>}>
                                            Editar
                                        </Button>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine} fontSize="16  "/>}>
                                            Apagar
                                        </Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Uanderson Nunes</Text>
                                        <Text fontSize="sm" color="gray.300">uandersonnunes@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td> 16 de maio, 2022</Td>
                                <Td>
                                    <HStack spacing="2">
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiEditLine} fontSize="16"/>}>
                                            Editar
                                        </Button>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine} fontSize="16  "/>}>
                                            Apagar
                                        </Button>
                                    </HStack>
                                        
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">João Alves</Text>
                                        <Text fontSize="sm" color="gray.300">luissh.dev@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td> 02 de fevereiro, 2021</Td>
                                <Td>
                                    <HStack spacing="2">
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiEditLine} fontSize="16"/>}>
                                            Editar
                                        </Button>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBinLine} fontSize="16  "/>}>
                                                Apagar
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