import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    IsCurrent?: boolean;
    onPageChange: (page: number) => void
}

export function PaginationItem({ IsCurrent = false, number, onPageChange }: PaginationItemProps) {
    if (IsCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: "pink.500",
                    cursor: "default",
                }}
            >
                {number}
            </Button>
        );
    }

    return (
        <Button 
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: "gray.500"
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    );
}