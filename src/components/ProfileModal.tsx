import {
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
} from '@chakra-ui/react'


export default function ProfileModal() {
    return (
        <div className="text-base">

            <Menu>
                <MenuButton>Login/Register</MenuButton>
                <MenuList>
                    <MenuItem as='a' href='/login'>
                        Login
                    </MenuItem>
                    <MenuItem as='a' href='/signup'>
                        Register
                    </MenuItem>
                </MenuList>
            </Menu>

        </div>
    )
}