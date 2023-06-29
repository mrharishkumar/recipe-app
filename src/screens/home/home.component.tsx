import { Grid } from "@mui/material";
import Brand from "../../components/brand/brand.component";
import SimpleList from "../../components/simpleList/simpleList.component";

const Home = () => {
  return (
    <Grid container>
      <Grid item>
        <Brand />
      </Grid>
      <Grid item>
        <SimpleList
          tabs={[
            { label: "Tags", component: <>Hello</> },
            { label: "Tags", component: <>Hello</> },
            { label: "Tags", component: <>Hello</> },
            { label: "Tags", component: <>Hello</> },
            { label: "Tags", component: <>Hello</> },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
