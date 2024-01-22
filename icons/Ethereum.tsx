import { Box } from "@chakra-ui/react";
import React from "react";

export default function Ethereum() {
    return (
        <Box
            as="svg"
            role="img"
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#1f2127"
            _hover={{
                fill: "brand.accent",
            }}
        >
            <title>Ethereum</title>
            <path fill="#343434" d="m11.998 0-.161.547v15.869l.161.161 7.366-4.354L11.998 0z" />
            <path fill="#8C8C8C" d="M11.998 0 4.631 12.223l7.366 4.354V0z" />
            <path fill="#3C3C3B" d="m11.998 17.972-.091.111v5.653l.091.264 7.371-10.38-7.371 4.352z" />
            <path fill="#8C8C8C" d="M11.998 24v-6.028L4.632 13.62 11.998 24z" />
            <path fill="#141414" d="m11.998 16.577 7.366-4.354-7.366-3.348v7.702z" />
            <path fill="#393939" d="m4.631 12.223 7.366 4.354V8.874l-7.366 3.349z" />
        </Box>
    )
}