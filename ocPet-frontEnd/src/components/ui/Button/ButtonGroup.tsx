import styled from "@emotion/styled";
import ButtonGroup from "@mui/material/ButtonGroup";

/*
MUI ButtonGroupコンポーネントカスタマイズ
*/

type ButtonGroupProps = {
  name: string;
};

const CTButtonGroup = (Props: ButtonGroupProps) => {
  return <CustomButtonGroup>{Props.name}</CustomButtonGroup>;
};

export default CTButtonGroup;

// eslint-disable-next-line react-refresh/only-export-components
const CustomButtonGroup = styled(ButtonGroup)`
  border: 1px solid blue;
  color: white;
`;
