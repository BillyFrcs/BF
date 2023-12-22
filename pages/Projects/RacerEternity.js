import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
     <Layout title="Basket Box">
          <Container>
               <Title>
                    Racer Eternity <Badge>2021</Badge>
               </Title>

               <Paragraph>
                    Racer Eternity is a prototype 3D Racing Car Simulator Game, that use advanced car controller implementation with physics engine and simulation.
                    Currently the Game is just a Prototype.
               </Paragraph>
               <Paragraph>
                    The project is using the Unity Universal Render Pipeline template to create high quality graphics and lightly Games.
               </Paragraph>

               <List ml={4} my={4}>
                    <ListItem>
                         <Meta>View</Meta>
                         <Link href="https://github.com/BillyFrcs/RacerEternity" target="_blank">
                              Racer Eternity <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>

                    <ListItem>
                         <Meta>Platform</Meta>
                         <span>Windows</span>
                    </ListItem>

                    <ListItem>
                         <Meta>Engine</Meta>
                         <Link href="https://unity.com/" target="_blank">
                              Unity<ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>

                    <ListItem>
                         <Meta>Game Status</Meta>
                         <span>Prototype</span>
                    </ListItem>
               </List>

               <Heading as="h4" fontSize={16} my={6}>
                    <Center>Gameplay</Center>
               </Heading>

               <ProjectImage src="/gif/RacerEternity.gif" alt="Racer Eternity" />

          </Container>
     </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
