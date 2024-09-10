import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function InfoBar (){
    const navigate = useNavigate();
    const handleClick = (category: string) => {
        navigate(`/collection/${category}`);
    }


    return (
    <div className=" bg-white min-w-screen  border-b-2  ">
        <div className="container mx-auto flex flex-row justify-between uppercase font-semibold py-4 px-2">
           <div>
               <Menu>
                   <MenuButton>
                       <p className="uppercase">Shop By Collection</p>
                   </MenuButton>
                   <MenuList>
                       <MenuItem onClick={() =>handleClick('Ring')}>Ring</MenuItem>
                       <MenuItem onClick={() =>handleClick('pendant')} >Pendant</MenuItem>
                       <MenuItem onClick={() =>handleClick('Earring')}>Earrings</MenuItem>
                       <MenuItem onClick={() =>handleClick('Bracelet')}>Bracelet</MenuItem>
                       <MenuItem onClick={() =>handleClick('Necklace')}>Necklace</MenuItem>
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