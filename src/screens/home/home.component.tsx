import { Grid } from "@mui/material";
import Brand from "../../components/brand/brand.component";
import SimpleList from "../../components/simpleList/simpleList.component";
import {
  RecipeList,
  IRecipeList,
} from "../../components/recipeList/recipeList";

const recipeList: IRecipeList[] = [
  { name: "recipe", recipe: "recipe" },
  { name: "recipe1", recipe: "recipe1" },
  { name: "recipe2", recipe: "recipe2" },
];

const Home = () => {
  return (
    <Grid container>
      <Grid item>
        <Brand />
      </Grid>
      <Grid item>
        <SimpleList
          tabs={[
            {
              label: "Tags",
              component: <RecipeList recipeList={recipeList} />,
            },
            {
              label: "Recomendations",
              component: <RecipeList recipeList={recipeList} />,
            },
            {
              label: "Settings",
              component: <RecipeList recipeList={recipeList} />,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
