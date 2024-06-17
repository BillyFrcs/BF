import {
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

// import NextLink from 'next/link'
// import { ChevronRightIcon } from '@chakra-ui/icons'

import Paragraph from '../components/paragraph'
import { SkillSection, SkillSet } from '../components/skill'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub /*, IoLogoTwitter */ } from 'react-icons/io5'
import { FaLinkedinIn } from "react-icons/fa";

import Image from 'next/image'

// import { GridItem } from '../components/grid-item'
// import BasketBox from '../public/images/Games/BasketBoxIcon.png'
// import WeadowRise from '../public/images/Games/WeadowRiseIcon.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Profile = "/images/profile/Billy.jpg";

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
        First, solve the problem. Then, write the code!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} my={5} textAlign={"center"}>
          <Heading as="h2" variant="page-title">
            Billy Franscois
          </Heading>
          <p>Software Developer | IT Specialist</p>
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
              src={Profile}
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
              fill={true}
              objectFit="cover"
              objectPosition="50% 1%"
              loading='lazy'
              priority={true}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I&apos;m passionate about Software Development to solve real-life problems with my tech skills.

          {/* Currently He&apos;s working on a personal project called
          <NextLink href="/Projects/BillGuys" scroll={false}>
            <Link> Bill Guys </Link>
          </NextLink>
          Game in the
          <Link href="https://unity.com/" scroll={false} target="_blank">
            <Link> Unity Engine.</Link>
          </Link> */}

        </Paragraph>

        {/* <Box align="center" my={4}>
          <NextLink href="/Projects" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects
            </Button>
          </NextLink>
        </Box> */}

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <SkillSection>
          <SkillSet>Web Development</SkillSet>
          ASP.NET Core, NextJS
        </SkillSection>
        <SkillSection>
          <SkillSet>Cloud Computing</SkillSet>
          Google Cloud Platform (GCP), Microsoft Azure
        </SkillSection>
        <SkillSection>
          <SkillSet>Game Development</SkillSet>
          Unity Engine
        </SkillSection>
        <SkillSection>
          <SkillSet>Programming Languages</SkillSet>
          C# (.NET Core), JavaScript (NodeJS), Python
        </SkillSection>
        <SkillSection>
          <SkillSet>Development Tools</SkillSet>
          Visual Studio, Visual Studio Code, JetBrains Rider, JetBrains WebStorm, Postman API, Git, GitHub, GitLab, Azure DevOps, Docker
        </SkillSection>
        <SkillSection>
          <SkillSet>Databases</SkillSet>
          Microsoft SQL Server, MySQL, Firebase
        </SkillSection>
        <SkillSection>
          <SkillSet>Design Tools</SkillSet>
          Figma, Adobe Photoshop
        </SkillSection>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I &hearts;
        </Heading>
        <Paragraph>
          Playing Video Games 🎮
        </Paragraph>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Let&apos;s Connect
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/BillyFrcs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}>
                @BillyFrcs
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/billyfrcs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}>
                @billyfrcs
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/billyfrcs/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaLinkedinIn />}>
                Billy Franscois
              </Button>
            </Link>
          </ListItem>

          {/* <ListItem>
            <Link href="https://twitter.com/billyfrcs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}>
                @billyfrcs
              </Button>
            </Link>
          </ListItem> */}
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://billyfrcs.itch.io/basketbox"
            title="Basket Box"
            thumbnail={BasketBox}>
            <p>3D Low Poly Basket Ball Game.</p>
          </GridItem>
          <GridItem
            href="https://billyfrcs.itch.io/weadowrise"
            title="Weadow Rise"
            thumbnail={WeadowRise}>
            <p>Platformer Game Battle In The Forest</p>
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/Games" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Games
            </Button>
          </NextLink>
        </Box> */}

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
