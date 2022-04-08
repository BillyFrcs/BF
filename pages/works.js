import { Container, Heading, SimpleGrid /*, Divider*/ } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import BasketBox from '../public/images/projects/Games/BasketBox.png'
import WeadowRise from '../public/images/projects/Games/WeadowRise.png'
import ShooterObstacle from '../public/images/projects/Games/ShooterObstacle.png'
import ShooterGlow from '../public/images/projects/Games/ShooterGlow.png'
import SnakeBoxes from '../public/images/projects/Games/SnakeBoxes.png'

// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Games
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="BasketBox" title="Basket Box" thumbnail={BasketBox}>
            3D Low Poly Basket Ball Game.
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
          <WorkGridItem id="ShooterGlow" thumbnail={ShooterGlow} title="Shooter Glow">
            Simple Top Down Shooter Game
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* 
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Website
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo">
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
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
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger">
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>

      </SimpleGrid> 
      */}

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'