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
  border: 1px solid #e4c0a8;
  background-color: #f2dfd3;
  color: #000000;
  font-family: var(googleOcPetNotoSansJP);
  font-weight: 400;
  font-size: 14px;
  &:hover {
    border: 1px solid #f2dfd3;
    background-color: #e4c0a8;
    color: #000000;
  }
`;
