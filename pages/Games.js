import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import BasketBox from '../public/images/games/BasketBoxIcon.png'
import WeadowRise from '../public/images/games/WeadowRiseIcon.png'
import ShooterObstacle from '../public/images/games/ShooterObstacleIcon.png'
import SnakeBoxes from '../public/images/games/SnakeBoxesIcon.png'

const Games = () => (
  <Layout title="Games">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Games
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Basket Box"
            thumbnail={BasketBox}
            href="https://billyfrcs.itch.io/basketbox"
          />
          <GridItem
            title="Weadow Rise"
            thumbnail={WeadowRise}
            href="https://billyfrcs.itch.io/weadowrise"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Shooter Obstacle"
            thumbnail={ShooterObstacle}
            href="https://billyfrcs.itch.io/shooterobstacle"
          />
          <GridItem
            title="Snake Boxes"
            thumbnail={SnakeBoxes}
            href="https://billyfrcs.itch.io/snakeboxes"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Games
export { getServerSideProps } from '../components/chakra'