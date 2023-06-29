import { Grid, Typography } from "@mui/material";
import SimpleList from "../simpleList/simpleList.component";
import { RecipeDetails } from "../recipeDetail/recipeDetail";

export interface IRecipeList {
  recipe_name: string;
  recipe_id: string;
  sweetness_level: string;
}

export interface RecipeListProps {
  recipeList: IRecipeList[];
}

export const RecipeList = ({ recipeList }: RecipeListProps) => {
  return (
    <>
      <Grid container sx={{ mt: -3, ml: 8 }}>
        <Grid>
          <Typography variant="h6" component="h2">
            Recipe List
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} sx={{ mt: 4 }}>
        <Grid>
          <SimpleList
            width="200px"
            scrollable
            tabs={recipeList.map((recipe) => ({
              label: recipe.recipe_name,
              component: (
                <RecipeDetails
                  name={recipe.recipe_name}
                  id={recipe.recipe_id}
                  sweetnessLevel={recipe.sweetness_level}
                />
              ),
            }))}
          />
        </Grid>
      </Grid>
    </>
  );
};
