import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/Project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Basket Box">
    <Container>
      <Title>
        Basket Box <Badge>2022</Badge>
      </Title>
      <Paragraph>
        Basket Box is a 3D Basketball Game with Low Poly Graphics and you can play against some bot(AI) and get the best high score.
        This project is using the Universal Render Pipeline from Unity to create good quality graphics and lightly Games to play without ran any issues.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://billyfrcs.itch.io/basketbox" target="_blank">
            Basket Box <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows | WebGL</span>
        </ListItem>

        <ListItem>
          <Meta>Engine</Meta>
          <Link href="https://unity.com/" target="_blank">
            Unity<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Status Game</Meta>
          <span>Released</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Gameplay</Center>
      </Heading>

      <ProjectImage src="/gif/BasketBox.gif" alt="BasketBox" />

      {/* <ProjectImage src=" " alt="BasketBox" />
      <ProjectImage src=" " alt="BasketBox" />  */}

    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'