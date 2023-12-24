import
{
     // Box,
     Container,
     Badge,
     Link,
     List,
     ListItem,
     Heading,
     Center
     // SimpleGrid,
     // UnorderedList,
     // Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'

const Project = () => (
     <Layout title="Snake Boxes">
          <Container>
               <Title>
                    Snake Boxes <Badge>2021</Badge>
               </Title>
               <Paragraph>
                    Snake Boxes is a simple 3D Game that Player play as a snake and try to eat all the
                    random food when spawned and Player can get score & high score by eating food.
               </Paragraph>

               <List ml={4} my={4}>
                    <ListItem>
                         <Meta>Download</Meta>
                         <Link href="https://billyfrcs.itch.io/snakeboxes" target="_blank">
                              Snake Boxes <ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>

                    <ListItem>
                         <Meta>Platform</Meta>
                         <span>Windows | Web</span>
                    </ListItem>

                    <ListItem>
                         <Meta>Engine</Meta>
                         <Link href="https://unity.com/" target="_blank">
                              Unity<ExternalLinkIcon mx="2px" />
                         </Link>
                    </ListItem>

                    <ListItem>
                         <Meta>Game Status</Meta>
                         <span>Released</span>
                    </ListItem>
               </List>

               <Heading as="h4" fontSize={16} my={6}>
                    <Center>Gameplay</Center>
               </Heading>

               <ProjectImage src="/gif/SnakeBoxes.gif" alt="Shooter Glow" />

          </Container>
     </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'