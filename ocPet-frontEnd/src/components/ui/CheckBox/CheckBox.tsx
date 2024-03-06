import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";

/*
MUI CheckBoxコンポーネントカスタマイズ
*/

type CheckBoxProps = {
  showCheckbox: boolean;
};

const CTCehckBox = (Props: CheckBoxProps) => {
  return Props.showCheckbox ? <CustomCheckBox /> : "";
};

export default CTCehckBox;

// eslint-disable-next-line react-refresh/only-export-components
const CustomCheckBox = styled(Checkbox)`
  border: 1px solid blue;
  color: white;
  &:hover {
    background-color: red;
    color: white;
  }
`;
