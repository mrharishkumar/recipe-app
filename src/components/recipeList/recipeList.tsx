import styled from "@emotion/styled";
import {
    Box,
    Button,
    Chip,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SimpleList from "../simpleList/simpleList.component";
import { RecipeDetails } from "../recipeDetail/recipeDetail";




export const RecipeList = () => {
    return (
        <>
            <Grid container sx={{ mt: -3,ml:8 }}>
                <Grid>
                    <Typography variant="h6" component="h2">
                        Recipe List
                    </Typography>
                </Grid>

            </Grid>
            <Grid container xs={12} sx={{ mt: 4 }}>

                {/* <Grid sx={{ mx: 4 }}>
                    <FormControl sx={{ width: '36ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='text'
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon />

                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid> */}
                <Grid>
                    <SimpleList width="200px" tabs={[{ label: "Recipe 1", component: <RecipeDetails /> }, { label: "Recipe 2", component: <></> }, { label: "Recipe 3", component: <></> }, { label: "Recipe 4", component: <></> }]} />
                </Grid>
            </Grid>
            {/* <Grid container xs={12}>
                <Grid sx={{ pt: 4 }} >
                    <SimpleList width="500px" tabs={[{ label: "Recipe 1", component: <RecipeDetails /> }, { label: "Recipe 2", component: <></> }, { label: "Recipe 3", component: <></> }, { label: "Recipe 4", component: <></> }]} />
                </Grid>

            </Grid> */}

        </>
    )
}