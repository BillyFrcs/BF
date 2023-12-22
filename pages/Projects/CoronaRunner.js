import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
     <Layout title="Corona Runner">
          <Container>
               <Title>
                    Corona Runner <Badge>2021</Badge>
               </Title>

               <Paragraph>
                    Corona Runner is a 2D endless runner Game that theme about Corona Virus, the main Gameplay is just Player should avoid the virus when it spawn non stop and get the best High Score.
               </Paragraph>

               <List ml={4} my={4}>
                    <ListItem>
                         <Meta>View</Meta>
                         <Link href="https://github.com/BillyFrcs/CoronaRunner" target="_blank">
                              Corona Runner <ExternalLinkIcon mx="2px" />
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
                         <span>Finished</span>
                    </ListItem>
               </List>

               <Heading as="h4" fontSize={16} my={6}>
                    <Center>Gameplay</Center>
               </Heading>

               <ProjectImage src="/gif/CoronaRunner.gif" alt="Corona Runner" />

          </Container>
     </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
