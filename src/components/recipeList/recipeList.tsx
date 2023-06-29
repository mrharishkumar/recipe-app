import { Grid, Typography } from "@mui/material";
import SimpleList from "../simpleList/simpleList.component";
import { RecipeDetails } from "../recipeDetail/recipeDetail";

export interface IRecipeList {
  name: string;
  recipe: string;
}

const recipeDetails = {
  name: "hero",
  id: "patanahi",
  sweetnessLevel: "low",
};

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
            tabs={recipeList.map((recipe) => ({
              label: recipe.name,
              component: (
                <RecipeDetails
                  name={recipeDetails.name}
                  id={recipeDetails.id}
                  sweetnessLevel={recipeDetails.sweetnessLevel}
                />
              ),
            }))}
          />
        </Grid>
      </Grid>
    </>
  );
};
