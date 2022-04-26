import { Container } from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import { ContactForm } from '../components/ContactForm'

const Contact = () => (
     <Layout title="Contact">
          <Container>
               {/* <Heading as="h3" fontSize={20} mb={4}>
                    Contact Me
               </Heading> */}

               <ContactForm />
          </Container>
     </Layout>
)

export default Contact
export { getServerSideProps } from '../components/chakra'