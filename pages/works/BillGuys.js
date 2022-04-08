import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
     <Layout title="Basket Box">
          <Container>
               <Title>
                    Bill Guys <Badge>2022</Badge>
               </Title>

               <Paragraph>
                    Oops sorry, this page is still in Development!
               </Paragraph>

               <List ml={4} my={4}>
                    <ListItem>
                         <Meta>Download</Meta>
                         <Link href=" " target="_blank">
                              Bill Guys <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>

                    <ListItem>
                         <Meta>Platform</Meta>
                         <span>Windows</span>
                    </ListItem>

                    <ListItem>
                         <Meta>Engine</Meta>
                         <span>Unity Game Engine</span>
                    </ListItem>

                    <ListItem>
                         <Meta>Status Game</Meta>
                         <span>Development</span>
                    </ListItem>
               </List>

               {/* <Heading as="h4" fontSize={16} my={6}>
                    <Center>Gameplay</Center>
               </Heading>

               <WorkImage src=" " alt="BasketBox" /> */}

          </Container>
     </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
