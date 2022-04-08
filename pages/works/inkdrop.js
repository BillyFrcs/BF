import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
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
          <Link href="https://billyfrcs.itch.io/basketbox " target="_blank">
            Basket Box <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows | WebGL</span>
        </ListItem>
        <ListItem>
          <Meta>Engine</Meta>
          <span>Unity Game Engine</span>
        </ListItem>

        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}

      </List>

      <WorkImage src="/gif/BasketBox.gif" alt="BasketBox.gif" />

      {/* <WorkImage src=" " alt="BasketBox.png" />
      <WorkImage src=" " alt="BasketBox.png" />  */}

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
