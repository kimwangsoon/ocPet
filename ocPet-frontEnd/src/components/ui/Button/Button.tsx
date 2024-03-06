import styled from "@emotion/styled";
import Button from "@mui/material/Button";

/*
MUI Buttonコンポーネントカスタマイズ
*/

type ButtonProps = {
  name: string;
};

const CTButton = (Props: ButtonProps) => {
  return <CustomButton>{Props.name}</CustomButton>;
};

export default CTButton;

// eslint-disable-next-line react-refresh/only-export-components
const CustomButton = styled(Button)`
  border: 1px solid blue;
  background-color: blue;
  color: white;
  &:hover {
    background-color: red;
    color: white;
  }
`;
