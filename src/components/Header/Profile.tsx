import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile(){
    return(
        <Flex align="center">
                    <Box 
                        mr="4" 
                        textAlign="right"
                    >
                        <Text>Luís Henrique</Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >
                            luissh.dev@gmail.com
                        </Text>
                    </Box>

                    <Avatar 
                        size="md" 
                        name="Luís Henrique" 
                        src="https://github.com/luisdasilvahenrique.png">
                    </Avatar>
                </Flex>
            
    );
}