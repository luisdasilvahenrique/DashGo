import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { title } from 'process';
import { RiContactsBookLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SideBar() {
    return (
        <Box as='aside' w="64" mr="8">
            <Stack spacing="12" align="flex-start">

                <NavSection title='GERAL'>

                    <NavLink icon={RiDashboardLine}> Dashboard </NavLink>
                    <NavLink icon={RiContactsBookLine}> Usuários </NavLink>

                </NavSection>
                <NavSection title='AUTOMOÇÃO'>
                    <NavLink icon={RiInputMethodLine}> Formulário </NavLink>
                    <NavLink icon={RiGitMergeLine}> Automoção </NavLink>
                </NavSection>
            </Stack>
        </Box>
    );
}