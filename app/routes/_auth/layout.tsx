import { Box, Container, Stack } from "@mantine/core";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <title>StudyLog</title>
      <Box bg="dark.7" mih="100vh">
        <Container size="lg" py="md" h="100vh">
          <Stack gap="md" justify="center" h="100%" w="100%">
            <Outlet />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
