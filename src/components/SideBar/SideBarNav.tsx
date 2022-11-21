import { Stack } from "@chakra-ui/react";
import { RiContactsBookLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
    return(
        <Stack spacing="12" align="flex-start">

                <NavSection title='GERAL'>

                    <NavLink href="/dashboard" icon={RiDashboardLine}> Dashboard </NavLink>
                    <NavLink href="/users" icon={RiContactsBookLine}> Usuários </NavLink>

                </NavSection>
                <NavSection title='AUTOMOÇÃO'>
                    <NavLink href="/forms" icon={RiInputMethodLine}> Formulário </NavLink>
                    <NavLink href="/automation" icon={RiGitMergeLine}> Automoção </NavLink>
                </NavSection>
            </Stack>
    );
}