import { Grid } from "@mui/material";
import Brand from "../../components/brand/brand.component";
import SimpleList from "../../components/simpleList/simpleList.component";
import {
  RecipeList,
  IRecipeList,
} from "../../components/recipeList/recipeList";
import TAGS from "../../tags_data";

const recipeList: IRecipeList[] = [
  {
    recipe_name: "recipe",
    recipe_id: "dunno",
    sweetness_level: "low",
  },
  {
    recipe_name: "recipe1",
    recipe_id: "dunno",
    sweetness_level: "low",
  },
  {
    recipe_name: "recipe2",
    recipe_id: "dunno",
    sweetness_level: "low",
  },
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
              component: <RecipeList recipeList={TAGS as IRecipeList[]} />,
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
