
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
} from '@chakra-ui/react'

export const SpecificiationTable = () => {
    return (
        <TableContainer>
            <Table variant='simple' >

                <Tbody>
                    <Tr>
                        <Td>color</Td>
                        <Td>Gold Over Silver, Rose Over Silver, White Over Silver</Td>
                    </Tr>
                    <Tr>
                        <Td>Shop by Occasions</Td>
                        <Td>Everyday Wear, Office Wear, Party Wear, Wedding Wear</Td>
                    </Tr>
                    <Tr>
                        <Td>Gift Guide</Td>
                        <Td>Gift for Her, Gift For Mother, Gift For Wife</Td>

                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}