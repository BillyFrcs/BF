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
import { Title, WorkImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'

const Project = () => (
  <Layout title="Shooter Glow">
    <Container>
      <Title>
        Shooter Glow <Badge>2022</Badge>
      </Title>
      <Paragraph>
        Simple 2D top down Shooter Game, Shooter Glow with beautiful
        color and glowing effect to improve Gameplay experience.
      </Paragraph>
      <Paragraph>
        This project is using the Unity Universal Render Pipeline(URP) to create high quality graphics and lightly Games.
        And using the Post Processing to create simple Glow Effects with Bloom Post Processing Effect.
      </Paragraph>

      {/* <UnorderedList my={4}>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </UnorderedList> */}

      <List ml={4} my={4}>
        <ListItem>
          <Meta>View</Meta>
          <Link href="https://github.com/BillyFrcs/ShooterGlow" target="_blank">
            Shooter Glow <ExternalLinkIcon mx="2px" />
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
          <span>Prototype</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Gameplay</Center>
      </Heading>

      <WorkImage src="/gif/ShooterGlow.gif" alt="Shooter Glow" />

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href=" "
          target="_blank">
          <Image
            maxW={240}
            src=" "
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src=" " alt=" " />
        <WorkImage src=" " alt=" " />
      </SimpleGrid> */}

    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'