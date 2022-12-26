import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

import { useUsers } from "../../services/hooks/useUsers";


export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers();

  const isWidhtVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // useEffect(() => {
  //   fetch("users")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários

            { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>  }

            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text> Falha ao obter dados dos usuários </Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" w="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th> Usuário </Th>
                    <Th> Data de cadastro </Th>
                    <Th w="8"> </Th>
                    {/* <Th w="8"> </Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  { data.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWidhtVersion && <Td> {user.createAt}</Td>}
                        <Td>
                          <HStack spacing="2">
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="green"
                              leftIcon={<Icon as={RiEditLine} fontSize="16" />}
                            >
                              {isWidhtVersion ? "Editar" : ""}
                            </Button>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="red"
                              leftIcon={
                                <Icon as={RiDeleteBinLine} fontSize="16  " />
                              }
                            >
                              {isWidhtVersion ? "Apagar" : ""}
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
