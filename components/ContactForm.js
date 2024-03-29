import { Flex, Heading, Input, Button, FormControl, Textarea, Stack, Alert, AlertIcon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import React, { useRef } from 'react';
import EmailJs from 'emailjs-com'

export const ContactForm = () => {
     const referenceForm = useRef();

     const SendEmail = (event) => {
          event.preventDefault();

          const serviceID = process.env.serviceID;
          const templateID = process.env.templateID;
          const userID = process.env.userID;

          // eslint-disable-next-line no-unused-vars
          EmailJs.sendForm(serviceID, templateID, event.target, userID).then((result) => {
               ShowMessage();

               // console.log(result.text);
               // eslint-disable-next-line no-unused-vars
          }, (error) => {
               // console.log(error.text);
          });

          event.target.reset();
     }

     const ShowMessage = () => {
          alert(`Hi there, Thanks for reaching out to me!`);

          <Stack spacing={3}>
               <Alert status='success'>
                    <AlertIcon />
                    Hi there, Thanks for reaching me out!
               </Alert>
          </Stack>
     }

     return (
          <form ref={referenceForm} onSubmit={SendEmail} method="post">
               <FormControl isRequired={true}>
                    <Stack spacing={3}>
                         <Flex height="50vh" alignItems="center" justifyContent="center" mb={12} mt={18}>
                              <Flex direction="column" p={12} rounded={6}>

                                   <Heading mb={6} align="center">Contact Me</Heading>

                                   <Input placeholder="Name" _placeholder={{ color: 'inherit', opacity: 0.5 }} variant="filled" type="text" size='lg' mb={6} name="name" id="name" required />
                                   <Input placeholder="Email" _placeholder={{ color: 'inherit', opacity: 0.5 }} variant="filled" type="email" size='lg' mb={6} name="email" id="email" required />
                                   <Textarea placeholder="Message" _placeholder={{ color: 'inherit', opacity: 0.5 }} variant="filled" size='lg' mb={6} name="message" id="message" required />

                                   <Button colorScheme="teal" variant="solid" loadingText="Loading" size='lg' rightIcon={<ChevronRightIcon />} type="submit">Send</Button>
                              </Flex>
                         </Flex>
                    </Stack>
               </FormControl>
          </form>
     )
}