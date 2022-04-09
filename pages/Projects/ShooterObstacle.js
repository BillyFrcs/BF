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
import { Title, WorkImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Shooter Obstacle <Badge>2022</Badge>
      </Title>
      <Paragraph>
        A video work generated with deep learning, imitating famous four
        painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
        Hokusai.
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
          <span>Unity Game Engine</span>
        </ListItem>

        <ListItem>
          <Meta>Status Game</Meta>
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

      <WorkImage src="/gif/ShooterObstacle.gif" alt="Shooter Obstacle" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'