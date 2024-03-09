import { Box } from "@mui/material";
import CatImage from "@assets/image/ocPet-headerCatImage.png";
import DogImage from "@assets/image/ocPet-headerDogImage.png";

import "./index.scss";
/*
  ocPetサイトのヘッダー画面
  */

const Header = () => {
  return (
    <Box className="topBox">
      <Box>
        <img src={CatImage} alt={`cat`} className="catImage" />
      </Box>
      <Box className="title">Osaka Clasic Pet Shop</Box>
      <Box>
        <img src={DogImage} alt={`cat`} className="dogImage" />
      </Box>
    </Box>
  );
};

export default Header;
