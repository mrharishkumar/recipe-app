import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export const RecipeDetails = () => {
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={4}>
          <Typography variant="h5" component="h2">
            Recipe Detail
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: 700,
        }}
      >
        <Grid container xs={12} spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={4}>
            <Typography>Recipe Name</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Recipe Name"
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={4}>
            <Typography>Recipe Id</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Recipe Id"
              required
              variant="outlined"
              color="secondary"
              type="text"
              fullWidth
              sx={{ mb: 3 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={4}>
            <Typography>Switness Level</Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Recipe Nature"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }} xs={12}>
          <Grid item xs={4}>
            <Typography>More Tags</Typography>
          </Grid>
          <Grid item xs={8}>
            <Chip label="Shaii paneer" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 5 }} xs={12}>
          <Grid item xs={4}>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
