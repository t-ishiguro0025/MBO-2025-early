import { Box, Container, Stack } from "@mantine/core";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <title>StudyLog</title>
      <Box bg="dark.7" mih="100vh">
        <Container size="sm" py="md">
          <Stack gap="lg" align="center">
            <Outlet />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
