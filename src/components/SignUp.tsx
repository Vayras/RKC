
import supabase from "../utils/supabase.ts";
import {
    FormControl,
    FormLabel,
    Input,
    Heading,
    Button,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
} from '@chakra-ui/react'

function SignUp() {

    const submit = async( ) => {
        const { error } = await supabase
            .from('users')
            .insert({
                    "address": "123 Main St, Springfield, IL 62701",
            "created_at": "2024-09-04T10:15:30Z",
            "email": "john.doe@example.com",
            "name": "John Doe",
            "password_hash": "$2b$12$e5tU0z5D8QxHbG0iS1XO3OTl7H1xNpNz28R.zpuyBOSwHgfXbqx2K",
            "phone_number": "+1-555-123-4567",
            "role": "admin",
            }
            )
        console.log(error);
    }

   return (
       <div className='container mx-auto p-6 text-3xl bg-white mt-8 w-[600px] shadow-md rounded-xl justify-center flex items-center flex-col'>
           <Heading >Register</Heading>
           <FormControl className="mb-2">
               <FormLabel>Email address</FormLabel>
               <Input type='email' placeholder='john.doe@example.com' focusBorderColor='yellow.400'  borderColor = "" />
           </FormControl>
           <FormControl className="mb-2">
               <FormLabel>Password</FormLabel>
               <Input type='Password' placeholder='use strong password for security' focusBorderColor='yellow.400' />
           </FormControl>
           <div className={"flex gap-4  mb-2 w-full"}>
               <FormControl >
                   <FormLabel>First Name</FormLabel>
                   <Input type='text' placeholder='First Name' focusBorderColor='yellow.400' />
               </FormControl>
               <FormControl>
                   <FormLabel>Last Name</FormLabel>
                   <Input type='text' placeholder='Last Name' focusBorderColor='yellow.400' />
               </FormControl>
           </div>
           <FormControl className="mb-2">
               <FormLabel>Address</FormLabel>
               <Input type='text' focusBorderColor='yellow.400' placeholder='Address'  />
           </FormControl>
           <FormControl className="mb-2">
               <FormLabel>Phone Number</FormLabel>
               <InputGroup>
                   <InputLeftAddon background='yellow.400'>+234</InputLeftAddon>
                   <Input type='tel' placeholder='phone number' />
               </InputGroup>
           </FormControl>
           <FormControl className="mb-2">
               <FormLabel>Shop Name</FormLabel>
               <Input type='text' focusBorderColor='yellow.400' placeholder ="shop name" />
           </FormControl>

           <FormControl className="mb-2">
           <FormLabel>Shop Url</FormLabel>
           <InputGroup size='md'>
               <InputLeftAddon background='yellow.400' >https://</InputLeftAddon>
               <Input type='text' disabled value="your shop" />
               <InputRightAddon background='yellow.400'  >.com</InputRightAddon>
           </InputGroup>
           </FormControl>
           <Button background='yellow.400' onClick={submit}>submit</Button>
       </div>
   )
}



export default SignUp;
