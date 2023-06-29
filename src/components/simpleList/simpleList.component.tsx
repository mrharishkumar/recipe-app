import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabDetail {
  label: string;
  component: React.ReactNode;
}

export interface SimpleListProps {
  tabs: TabDetail[];
  width?: string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const SimpleList = ({ tabs, width }: SimpleListProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        {tabs.map((item, idx) => (
          <Tab
            sx={{ width: width ? width : "200px" }}
            label={item.label}
            key={idx}
            {...a11yProps(idx)}
          />
        ))}
      </Tabs>
      {tabs.map((item, idx) => (
        <TabPanel value={value} key={idx} index={idx}>
          {item.component as React.ReactNode}
        </TabPanel>
      ))}
    </Box>
  );
};

export default SimpleList;
