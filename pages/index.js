import NextLink from 'next/link'
import
{
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image'

// import { GridItem } from '../components/grid-item'
// import BasketBox from '../public/images/games/BasketBox/BasketBoxIcon.png'
// import WeadowRise from '../public/images/games/WeadowRise/WeadowRiseIcon.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        First, solve the problem. Then, write the code!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Billy Franscois
          </Heading>
          <p>Computer Science Student & Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/profile/Tobias.png"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Billy is a Computer Science Student at University.{' '}
          He&apos;s passionate are about Programming and Development to solve any problem with code, especially in Game & Web Development.
          Currently He&apos;s working on a personal project called
          <NextLink href="/works/inkdrop" scroll={false}>
            <Link> Bill Guys </Link>
          </NextLink>
          Game in the
          <Link href="https://unity.com/" scroll={false} target="_blank">
            <Link> Unity Game Engine.</Link>
          </Link>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Game Development</BioYear>
          Unity Game Engine and .NET C#
        </BioSection>
        <BioSection>
          <BioYear>Web Development</BioYear>
          ASP .NET Core and Blazor
        </BioSection>
        <BioSection>
          <BioYear>Programming Language</BioYear>
          .NET C#, C++ and Java
        </BioSection>
        <BioSection>
          <BioYear>Dev Tools</BioYear>
          Visual Studio, Visual Studio Code, JetBrains Rider, Git, GitHub and GitLab
        </BioSection>
        <BioSection>
          <BioYear>Design</BioYear>
          Blender, GIMP and Figma
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Playing Video Games, Game Development, Web Development,{' '} Artificial Intelligence.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On The Internet
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/BillyFrcs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @BillyFrcs
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/billyfrcs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @billyfrcs
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/billyfrcs/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaLinkedinIn />}
              >
                Billy Franscois
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://billyfrcs.itch.io/basketbox"
            title="Basket Box"
            thumbnail={BasketBox}
          >
            <p>3D Low Poly Basket Ball Game.</p>
          </GridItem>
          <GridItem
            href="https://billyfrcs.itch.io/weadowrise"
            title="Weadow Rise"
            thumbnail={WeadowRise}
          >
            <p>Platformer Game Battle In The Forest</p>
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Games
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
