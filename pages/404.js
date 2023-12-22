import NextLink from 'next/link'
import
{
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Stack
} from '@chakra-ui/react'

const NotFound = () =>
{
  return (
    <Container>
      <Stack align="center">
        <Heading as="h1">404 Not Found</Heading>
        <Text>Aha! You see... You can be wrong.</Text>
      </Stack>

      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Let&apos;s go back</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound