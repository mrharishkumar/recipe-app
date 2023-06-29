import Brand from "../../components/brand/brand.component";
import SimpleList from "../../components/simpleList/simpleList.component";

const Home = () => {
  return (
    <>
      <Brand />
      <SimpleList
        tabs={[
          { label: "Tags", component: <>Hello</> },
          { label: "Tags", component: <>Hello</> },
          { label: "Tags", component: <>Hello</> },
          { label: "Tags", component: <>Hello</> },
          { label: "Tags", component: <>Hello</> },
        ]}
      />
    </>
  );
};

export default Home;
