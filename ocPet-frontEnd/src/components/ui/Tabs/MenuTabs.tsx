import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./index.scss";

export default function MenuTabs() {
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="tabBox">
      <Tabs
        className="tabs"
        value={value}
        onChange={handleChange}
        // textColor="secondary"
        // indicatorColor="secondary"
        // aria-label="secondary tabs example"
      >
        <Tab value="home" label="HOME" />
        <Tab value="petList" label="ペット一覧" />
        <Tab value="petSupplies" label="ペット用品" />
        <Tab value="newProduct" label="新商品" />
        <Tab value="event" label="イベント" />
        <Tab value="contactUs" label="お問い合わせ" />
      </Tabs>
    </Box>
  );
}
