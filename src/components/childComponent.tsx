import { useState } from "react";
interface IProps {
  showAddition: (add) => {};
}
const ChildCompoenent = (props: IProps) => {
  const [inputValueF, setInputValueF] = useState("");
  const [inputValueS, setInputValueS] = useState("");
  const onChangeInput = (event) => {
    setInputValueF(event.target.value);
  };
  const onChangeInputSecond = (event) => {
    setInputValueS(event.target.value);
  };
  const sendAddition = () => {
    let add = parseInt(inputValueF) + parseInt(inputValueS);
    props.showAddition(add);
  };

  return (
    <div>
      <label>Enter first number</label>
      <input type="text" onChange={(e) => onChangeInput(e)} />
      <br />
      <label>Enter Second number</label>
      <input type="text" onChange={(e) => onChangeInputSecond(e)} />
      <button onClick={() => sendAddition()}>Add</button>
    </div>
  );
};

export default ChildCompoenent;
