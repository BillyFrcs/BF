import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import Paragraph from '../components/paragraph'

import BasketBox from '../public/images/projects/Games/BasketBox.png'
import WeadowRise from '../public/images/projects/Games/WeadowRise.png'
import ShooterObstacle from '../public/images/projects/Games/ShooterObstacle.png'
import ShooterGlow from '../public/images/projects/Games/ShooterGlow.png'
import SnakeBoxes from '../public/images/projects/Games/SnakeBoxes.png'
import BillGuys from '../public/images/projects/Games/BillGuys.png'
import RacerEternity from '../public/images/projects/Games/RacerEternity.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Games
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="BasketBox" title="Basket Box" thumbnail={BasketBox}>
            3D Low Poly Basketball Game
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="WeadowRise" title="Weadow Rise" thumbnail={WeadowRise}>
            Lovely 2D Platformer Game
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="ShooterObstacle" title="Shooter Obstacle" thumbnail={ShooterObstacle}>
            3D Endless Runner Shooter Game
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="SnakeBoxes" thumbnail={SnakeBoxes} title="Snake Boxes">
            Simple 3D Snake Game
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="RacerEternity" thumbnail={RacerEternity} title="Racer Eternity">
            Racing Car Simulator Game
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="ShooterGlow" thumbnail={ShooterGlow} title="Shooter Glow">
            Simple Top Down Shooter Game
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="BillGuys" thumbnail={BillGuys} title="Bill Guys">
            Massively Obstacle Course Game
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Website
        </Heading>
        <Paragraph>It will be available soon😃</Paragraph>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id=" "
            thumbnail={BasketBox}
            title="Title">
            Text
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id=" " thumbnail={WeadowRise} title="Title">
            Text
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Contributions
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id=" " thumbnail={BasketBox} title="Title">
            Text
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id=" "
            thumbnail={WeadowRise}
            title="Title">
            Text
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id=" " thumbnail={BillGuys} title="Title">
            Text
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'