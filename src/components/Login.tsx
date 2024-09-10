
import supabase from "../utils/supabase.ts";
import {FormEvent, useState} from "react";
import bcrypt from 'bcryptjs-react';
import {
    FormControl,
    FormLabel,
    Input,
    Heading,
    Button,
    FormErrorMessage, useToast,
} from '@chakra-ui/react'


function Login() {
    const toast = useToast()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

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


    const validateForm = () => {
        const newErrors = {
            email: email === "",
            password: password === "",
        };
        setErrors(newErrors);

        // Return whether the form is valid or not
        return !Object.values(newErrors).includes(true);
    };

    const submit = async () => {
        if (!validateForm()) {
            return;
        }

        const { data: user, error: fetchError} = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .single();

        const decrypt = await bcrypt.compare(password, user.password_hash);

        if(fetchError === null && decrypt) {
            toast({
                description: "Logged In successfully.",
                status: 'success',
                duration: 5000,
                position: 'top-right',
                isClosable: true,
            })
            window.location.href="/";
        }
        else{
            toast({
                description: "user not found check Email and Password Combination",
                status: 'error',
                duration: 5000,
                position: 'top-right',
                isClosable: true,
            })
        }
    }
    return (

        <div className='container mx-auto p-6 text-3xl bg-white my-8 w-[600px] shadow-md rounded-xl mb-52 mt-32 justify-center flex items-center flex-col'>
            <Heading >Login</Heading>
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
            <Button className={"mt-4 w-full"} background='yellow.400' onClick={submit}>submit</Button>
        </div>
    )
}
export default Login;