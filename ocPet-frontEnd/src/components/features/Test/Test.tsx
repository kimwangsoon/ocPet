import CTButton from "@components/ui/Button/Button";
import CTButtonGroup from "@components/ui/Button/ButtonGroup";
import CTCheckBox from "@components/ui/CheckBox/CheckBox";

/*
MUI コンポーネントカスタマイズ Testメモ帳
*/

const CtButtonName = "Test Button";
const CtButtonGroupeName = "Test ButtonGroup";
const CtShowCheckBox = true;

const Test = () => {
  return (
    <>
      <CTButton name={CtButtonName} />
      <CTButtonGroup name={CtButtonGroupeName} />
      <CTCheckBox showCheckbox={CtShowCheckBox} />
    </>
  );
};

export default Test;
