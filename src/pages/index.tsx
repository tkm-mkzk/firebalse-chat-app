import { AuthGuard } from '@/feature/auth/component/AuthGuard/AuthGuard'
import { Box, Heading } from '@chakra-ui/react'

export default function Page() {
  return (
    <AuthGuard>
      <Heading>Chakra UI</Heading>
    </AuthGuard>
  )
}
