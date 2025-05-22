import {
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

useAppSelector;
useAppDispatch;
const IncrementComponent = () => {
  const count = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};
export default IncrementComponent;
