import
{
  // Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Shooter Obstacle">
    <Container>
      <Title>
        Shooter Obstacle <Badge>2022</Badge>
      </Title>
      <Paragraph>
        Simple 3D Runner Shooter Game Shooter Obstacle. The main Gameplay is just player should shooting all the enemy obstacle that trying to push the character. And player should move from the current platform to the next platform that because the current platform will destroyed every second and the next platform will spawn with amount of time.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://billyfrcs.itch.io/shooterobstacle">
            Shooter Obstacle <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows | Android</span>
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

      {/* <UnorderedList my={4}>
        <ListItem>
          <Link href=" ">
            <Badge mr={2}>Badge</Badge>
            Test
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href=" ">
            <Badge mr={2}>Badge</Badge>
            Test
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      {/* <Box>
        <iframe
          src=" "
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <ProjectImage src="/gif/ShooterObstacle.gif" alt="Shooter Obstacle" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'