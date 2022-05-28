import { useState } from "react";

const Square = (props) => {
  const [value, setValue] = useState(null);
  const { data, onClickEvent } = props;
  return (
    <>
      <button onClick={onClickEvent} className="square">
        {data}
      </button>
    </>
  );
};
export default Square;
