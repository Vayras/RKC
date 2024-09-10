import {Button, FormControl, FormLabel, Input, Textarea ,Tag, TagLabel } from "@chakra-ui/react";
import {Link} from "react-router-dom";

function ContactForm(){
    return(
        <div className="flex flex-col container mx-auto justify-cemter items-center bg-white rounded-lg mt-12 p-6 ">

        <div className=" justify-between flex flex-row w-full mt-24">

            <div className="w-1/2">
                <Tag size='lg' colorScheme='yellow' borderRadius='full'>
                    <TagLabel>Contact Us</TagLabel>
                </Tag>
              <h1 className="text-7xl">Let's Get In Touch.</h1>
              <p className="text-xl mb-12">or just reach out manually to <Link to="mailto:/rkcjewelry01@gmail.com">rkcjewelry01@gmail.com</Link> </p>

                <span className="text-2xl ">
                  <p className="text-4xl" >Support</p>
                  <p>Phone : +91-9222225654</p>
                  <p>Email : <Link to="mailto:/rkcjewelry01@gmail.com">rkcjewelry01@gmail.com</Link> </p>
                    <p>Address : B-309, Classique Centre, Andheri East, Mumbai-400093</p>
              </span>
            </div>
            <div className="w-1/2">
                <FormControl  isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text ' className="mb-8"  placeholder='Enter your full name...'   focusBorderColor='yellow.400'/>
                </FormControl>
                <FormControl className="mb-2" isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input type='email' className="mb-8"   placeholder='Enter your email address...' focusBorderColor='yellow.400'  />
                </FormControl>
                <FormControl className="mb-2" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type='email' className="mb-8"  placeholder='99-9999-9999' focusBorderColor='yellow.400'  />
                </FormControl>
                <FormControl className="mb-2" isRequired>
                    <FormLabel>Your Message</FormLabel>
                    <Textarea  className="mb-2" size="lg"   placeholder='Enter your message here...' resize={"none"} focusBorderColor='yellow.400'  />
                </FormControl>
                <Button className={"mt-4 w-full"} background='yellow.400'>submit</Button>
            </div>
        </div>
        </div>
    )
}

export default ContactForm;