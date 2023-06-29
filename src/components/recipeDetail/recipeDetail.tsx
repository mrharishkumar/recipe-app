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

export interface RecipeDetailsProps {
  name: string;
  id: string;
  sweetnessLevel: string;
}

export const RecipeDetails = ({
  name,
  id,
  sweetnessLevel,
}: RecipeDetailsProps) => {
  return (
    <>
      <Grid container xs={12} sx={{ mt: -11 }}>
        <Grid item xs={4}>
          <Typography variant="h6" component="h2">
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
              value={name}
              size="small"
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 2 }}
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
              size="small"
              value={id}
              required
              variant="outlined"
              color="secondary"
              type="text"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={4}>
            <Typography>Sweetness Level</Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel id="select-label" size="small">
                {sweetnessLevel}
              </InputLabel>
              <Select
                labelId="select-label"
                size="small"
                id="select"
                label="Recipe Nature"
                disabled
              >
                <MenuItem value={20}>Low</MenuItem>
                <MenuItem value={30}>Medium</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }} xs={12}>
          <Grid item xs={4}>
            <Typography>More Tags</Typography>
          </Grid>
          <Grid item xs={8}>
            <Chip label="Shahi paneer" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 5 }} xs={12}>
          <Grid item xs={4}>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
