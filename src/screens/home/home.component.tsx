import { Grid } from "@mui/material";
import Brand from "../../components/brand/brand.component";
import SimpleList from "../../components/simpleList/simpleList.component";
import { RecipeList } from "../../components/recipeList/recipeList";

const Home = () => {
  return (
    <Grid container>
      <Grid item>
        <Brand />
      </Grid>
      <Grid item>
        <SimpleList
          tabs={[
            { label: "Tags", component: <RecipeList /> },
            { label: "Tags", component: <RecipeList /> },
            { label: "Tags", component: <RecipeList /> },
            { label: "Tags", component: <RecipeList /> },
            { label: "Tags", component: <RecipeList /> },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
