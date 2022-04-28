import ChildCompoenent from "./childComponent";

interface IProps {
  name: string;
}
const DisplayData = (props: IProps) => {
  const showAddition = (add) => {
    alert(add);
  };
  return (
    <div>
      <h1>{props.name}</h1>
      <ChildCompoenent showAddition={showAddition} />
    </div>
  );
};
export default DisplayData;
