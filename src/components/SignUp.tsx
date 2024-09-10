import supabase from "../utils/supabase.ts";
import {FormEvent, useState} from "react";
import bcrypt from 'bcryptjs-react'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Radio,
    RadioGroup,
    Stack,
    useToast
} from '@chakra-ui/react'

import { v4 as uuidv4 } from  'uuid'
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const navigate = useNavigate();
    const toast = useToast()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [shopName, setShopName] = useState("");
    const [role, setRole] = useState("");


    const [errors, setErrors] = useState({
        email: false,
        password: false,
        firstName: false,
        lastName: false,
        address: false,
        phoneNumber: false,
        shopName: false,
        shopUrl: false,
        role: false
    });


    const formatString = (string: string): string => {
        return string.replace(/ /g, '')
    }

    const handleEmailChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: value === "" }));
    };

    const handlePasswordChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setPassword(value);
        setErrors((prev) => ({ ...prev, password: value === "" }));
    };

    const handleFirstNameChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setFirstName(value);
        setErrors((prev) => ({ ...prev, firstName: value === "" }));
    };

    const handleLastNameChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setLastName(value);
        setErrors((prev) => ({ ...prev, lastName: value === "" }));
    };

    const handleAddressChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setAddress(value);
        setErrors((prev) => ({ ...prev, address: value === "" }));
    };

    const handlePhoneNumberChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setPhoneNumber(value);
        setErrors((prev) => ({ ...prev, phoneNumber: value === "" }));
    };

    const handleShopNameChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setShopName(value);
        setErrors((prev) => ({ ...prev, shopName: value === "" }));
    };

    const handleRoleChange = (e: FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setRole(value);
        setErrors((prev) => ({ ...prev, role: value === "" }));
    };


    const validateForm = () => {
        // Validate each field
        const newErrors = {
            email: email === "",
            password: password === "",
            firstName: firstName === "",
            lastName: lastName === "",
            address: address === "",
            phoneNumber: phoneNumber === "",
            shopName: shopName === "",
            shopUrl: shopName === "",
            role: role === "",
        };
        setErrors(newErrors);

        // Return whether the form is valid or not
        return !Object.values(newErrors).includes(true);
    };

    const submit = async () => {
        if (!validateForm()) {
            return;
        }

        // Generate a UUID
        const uuid = uuidv4();
        const hash = await bcrypt.hash(password, 10);

        // Insert into users table
        const {error: userError } = await supabase.from("users").insert({
            id: uuid, // Use the same UUID
            address,
            created_at: new Date().toISOString(),
            email,
            name: `${firstName} ${lastName}`,
            password_hash: hash,
            phone_number: phoneNumber,
            role,
            shop_name: shopName,
            shop_url: role === "vendor" ? `https://${formatString(shopName)}.com` : null,
        });

        if (userError) {
            console.log(userError);
            toast({
                title: 'Error',
                description: "Error creating account",
                status: 'error',
                duration: 5000,
                position: 'top-right',
                isClosable: true,
            });
            return;
        }

        if (role === "vendor") {
            const { data: fetchdata, error: vendorError } = await supabase.from("vendors").insert({
                user_id: uuid,
                store_name: shopName,
            }).select();



            if (fetchdata) {
                console.log(fetchdata);
                if (fetchdata[0].description === null || fetchdata[0].logo_url === null ) {
                    navigate('/setup');
                }
            }
            if (vendorError) {
                console.log(vendorError);
                toast({
                    title: 'Error',
                    description: "Error creating vendor account",
                    status: 'error',
                    duration: 5000,
                    position: 'top-right',
                    isClosable: true,
                });
                return;
            }

        }

        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 5000,
            position: 'top-right',
            isClosable: true,
        });
    };


   return (
       <div className='container mx-auto p-6 text-3xl bg-white my-8 w-[600px] shadow-md rounded-xl justify-center flex items-center flex-col'>
           <Heading >Register</Heading>
           <FormControl isInvalid={errors.email} isRequired>
               <FormLabel>Email</FormLabel>
               <Input type='email' value={email} onChange={handleEmailChange}  focusBorderColor='black'/>
               {errors.email &&
                   <FormErrorMessage>Email is required.</FormErrorMessage>
               }
           </FormControl>
           <FormControl className="mb-2" isRequired>
               <FormLabel>Password</FormLabel>
               <Input type='Password' value={password} onChange={handlePasswordChange} placeholder='use strong password for security' focusBorderColor='black'  />
           </FormControl>
           <div className={"flex gap-4  mb-2 w-full"}>
               <FormControl isRequired >
                   <FormLabel>First Name</FormLabel>
                   <Input type='text' value={firstName} onChange={handleFirstNameChange}  placeholder='First Name' focusBorderColor='black'  />
               </FormControl>
               <FormControl isRequired>
                   <FormLabel>Last Name</FormLabel>
                   <Input type='text '  value={lastName} onChange={handleLastNameChange}  placeholder='Last Name' focusBorderColor='black' />
               </FormControl>
           </div>
           <FormControl className="mb-2" isRequired>
               <FormLabel>Address</FormLabel>
               <Input type='text' value={address} onChange={handleAddressChange} focusBorderColor='black' placeholder='Address'  />
           </FormControl>
           <FormControl className="mb-2" isRequired>
               <FormLabel>Phone Number</FormLabel>
               <InputGroup>
                   <InputLeftAddon background='yellow.400'>+234</InputLeftAddon>
                   <Input type='tel' onChange={handlePhoneNumberChange} value={phoneNumber} placeholder='phone number' focusBorderColor='black' />
               </InputGroup>
           </FormControl>
           <Box w="full" mt={2} mb={2}>
               <RadioGroup defaultValue='2'>
                   <Stack spacing={5} direction='row'>
                       <Radio colorScheme='yellow' value='vendor' onChange={handleRoleChange}>
                           I'm a Vendor
                       </Radio>
                       <Radio colorScheme='yellow' value='customer' onChange={handleRoleChange}>
                           I'm a Customer
                       </Radio>
                   </Stack>
               </RadioGroup>
           </Box>
           {
               role === 'vendor' ?
                   <>
                   <FormControl className="mb-2" isRequired>
                       <FormLabel>Shop Name</FormLabel>
                       <Input type='text' value={shopName}  onChange={handleShopNameChange} focusBorderColor='black' placeholder ="shop name"  />
                   </FormControl>
                   <FormControl className="mb-2">
                       <FormLabel>Shop Url</FormLabel>
                       <InputGroup size='md'>
                           <InputLeftAddon background='yellow.400'  >https://</InputLeftAddon>
                           <Input type='text'  value={formatString(shopName)}  focusBorderColor='black' />
                           <InputRightAddon background='yellow.400'  >.com</InputRightAddon>
                       </InputGroup>
                   </FormControl>
               </> : null
           }

           <Button className={"mt-4 w-full"} background='yellow.400' onClick={submit}>submit</Button>
       </div>
   )
}



export default SignUp;
