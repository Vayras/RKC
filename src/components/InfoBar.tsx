import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import {Link} from "react-router-dom";


function InfoBar (){
return (
    <div className=" bg-white min-w-screen  border-b-2  ">
        <div className="container mx-auto flex flex-row justify-between uppercase font-semibold py-4 px-2">
           <div>
               <Menu>
                   <MenuButton>
                       <p className="uppercase">Shop By Collection</p>
                   </MenuButton>
                   <MenuList>
                       <MenuItem>Ring</MenuItem>
                       <MenuItem>Pendant</MenuItem>
                       <MenuItem>Earrings</MenuItem>
                       <MenuItem>Pendant</MenuItem>
                       <MenuItem>Bracelet</MenuItem>
                   </MenuList>
               </Menu>

           </div>
            <div className="flex flex-row gap-12">
                <span>
                     <Menu>
                   <MenuButton>
                      <p className="uppercase"> Latest Collection</p>
                   </MenuButton>
                   <MenuList>
                       <MenuItem>Wings of Wonder</MenuItem>
                       <MenuItem>Cherry Pop Collection</MenuItem>
                       <MenuItem>Color of Life Collection</MenuItem>
                       <MenuItem>Pendant</MenuItem>
                       <MenuItem>The Bhumi Collections</MenuItem>
                   </MenuList>
               </Menu>

                </span>
                <span>
                           <Menu>
                   <MenuButton>
                         <p className="uppercase">Gift Stores</p>

                   </MenuButton>
                   <MenuList>
                       <MenuItem>Shop by Recipient</MenuItem>
                       <MenuItem>Shop By Occasion</MenuItem>
                       <MenuItem>Shop by Theme</MenuItem>
                       <MenuItem>Shop By Price</MenuItem>
                   </MenuList>
               </Menu>

                </span>
                <span>
                      <Link to={"/education"}> Education</Link>
                </span>
                <span>
                   <Link to={"/about"}> About Us</Link>
                </span>
                <span>
                    <Link to={"/contact"}>Contact Us</Link>
                </span>
            </div>
        </div>
    </div>
)
}

export default InfoBar;