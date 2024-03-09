import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@components/ui/Button/Button";
import MenuTabs from "@components/ui/Tabs/MenuTabs";
import Header from "@components/ui/Header/Header";

import "./index.scss";

/*
ocPetサイトのホーム画面
*/

const Home = () => {
  return (
    <Box className="mainBox">
      <Header />
      <MenuTabs />
      <Box className="groupButton">
        <Button name={"行追加"}></Button>
        <Button name={"行削除"}></Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>No.</TableCell>
            <TableCell>col1</TableCell>
            <TableCell>col2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </TableCell>
            <TableCell>
              <TextField />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Home;
