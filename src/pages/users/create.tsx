import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiCactusFill } from "react-icons/ri";
import { Input } from '../../components/Forms/Input';
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <SideBar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
                   <Heading size="lg" fontWeight="normal"> Criar Usuário </Heading> 

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing={["6","8"]}>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password_confirmation" type="password" label="Confirmação da Senha"/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing={["6","8"]}>
                        <Link href="/users">
                            <Button colorScheme="whiteAlpha"> Cancelar</Button>
                        </Link>
                            <Button colorScheme="pink"> Salvar </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}