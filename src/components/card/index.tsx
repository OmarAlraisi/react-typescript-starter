import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "@queries";
import { incrementCounter } from "@actions";

const Card = () => {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <button onClick={() => dispatch(incrementCounter())}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Card;
