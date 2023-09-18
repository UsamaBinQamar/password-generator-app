import { Box, Button, Slider, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Typography variant="h3" textAlign={"center"}>
        Password Generator
      </Typography>
      <Box>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Slider defaultValue={30} aria-label="Disabled slider" />
        <Button></Button>
      </Box>
    </main>
  );
}
