import NextLink from 'next/link'
import
{
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () =>
{
  return (
    <Container>
      <Heading as="h1">404 Not Found</Heading>
      <Text>Aha! You see... You can be wrong.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return To Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
