import
{
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // SimpleGrid,
  // UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Weadow Rise">
    <Container>
      <Title>
        Weadow Rise <Badge>2021</Badge>
      </Title>
      <Paragraph>
        Weadow Rise is a beautiful 2D Battle Game that you can play as a Reaper Man you can attack all the enemy monsters in the forest,
        the main GamePlay in this game is Player should be carefully when enemies spawn and trying to kill Reaper Man so you should kill all the enemies when spawner and get the best high score,
        and when you kill the enemy there are some collectable items that you can collect like Health & Energy. The last thing that you should be careful is the boom is explode when enemy die,
        so be careful & enjoy your game.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://billyfrcs.itch.io/weadowrise" target="_blank">
            Weadow Rise <ExternalLinkIcon mx="2px" />
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
          <span>Released</span>
        </ListItem>

        {/* <ListItem>
          <Meta>Header</Meta>
          <Link href=" ">
            Test{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}

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
          <Link href="">
            <Badge mr={2}>Badge</Badge>
            Test
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href=" ">
            <Badge mr={2}>Badge</Badge>
          Test
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}> </Badge>
          <Link href=" ">
            Test
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList> */}

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src=" " alt="Weadow Rise" />
        <WorkImage src=" " alt="Weadow Rise" />
      </SimpleGrid> */}

      <WorkImage src="/gif/WeadowRise.gif" alt="Weadow Rise" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'