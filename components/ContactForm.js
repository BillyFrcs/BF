import { Flex, Heading, Input, Button, FormControl, Textarea, Stack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import React, { useRef } from 'react';
import EmailJs from 'emailjs-com'

export const ContactForm = () =>
{
     const referenceForm = useRef();

     const SendEmail = (email) =>
     {
          email.preventDefault();

          const serviceID = 'service_gmail';
          const templateID = 'template_contact-form';
          const userID = '5R4L4mkrB0Ah5cIKl';

          EmailJs.sendForm(serviceID, templateID, email.target, userID).then((result) =>
          {
               console.log(result.text);
          }, (error) =>
          {
               console.log(error.text);
          });

          email.target.reset();
     }

     return (
          <form ref={referenceForm} onSubmit={SendEmail}>
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