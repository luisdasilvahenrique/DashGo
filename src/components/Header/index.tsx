import { Flex, Input, Text, Icon, HStack, Box, Avatar, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";



export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            <Logo />

            { isWideVersion && <SearchBox/> }

            <Flex align="center" ml="auto">

                <NotificationNav />

                <Profile showProfileData={isWideVersion}/>

            </Flex>
        </Flex>
    );
}