import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { RiContactsBookLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export function SideBar(){
    return(
        <Box as='aside' w="64" mr="8">
            <Stack spacing="12" align="flex-start"> 
                <Box>
                    <Text fontWeight="bold" color="gray.400">Geral</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Dashboard</Text>
                        </Link>

                        <Link display="flex" alignItems="center">
                            <Icon as={RiContactsBookLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Usuários</Text>
                        </Link>
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight="bold" color="gray.400">AUTOMAÇÃO</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Formulário</Text>
                        </Link>

                        <Link display="flex" alignItems="center">
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Automoção</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}