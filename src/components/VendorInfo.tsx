import {Table, TableContainer, Tbody, Td, Tr} from "@chakra-ui/react";

export const VendorInfo = () => {
    return(
        <TableContainer>
            <Table variant='simple' >

                <Tbody>
                    <Tr>
                        <Td>Store Name</Td>
                        <Td>Eternal Sparkles Inc</Td>
                    </Tr>
                    <Tr>
                        <Td>Vendor</Td>
                        <Td>Eternal Sparkles Inc</Td>
                    </Tr>
                    <Tr>
                        <Td>Address</Td>
                        <Td>Andheri
                            Andheri 400002
                            Maharashtra</Td>

                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}