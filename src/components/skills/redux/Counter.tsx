import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
  setDecrementAmount,
  setIncrementAmount,
} from "@/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChangeEvent } from "react";

useAppSelector;
useAppDispatch;
const ReduxCounter = () => {
  const count = useAppSelector((state) => state.value);
  const incrementAmount = useAppSelector((state) => state.incrementAmount);
  const decrementAmount = useAppSelector((state) => state.decrementAmount);
  const dispatch = useAppDispatch();
  function setIncrementAmmount(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    dispatch(setIncrementAmount(newValue));
  }
  function setDecrementAmmount(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    dispatch(setDecrementAmount(newValue));
  }
  return (
    <div className="flex flex-col justify-center items-center  p-4">
      <span className="text-3xl my-12 mt-6">Counter example</span>

      <div className="flex border border-b-0 gap-12 px-6 rounded-t-2xl border-portocaliu">
        <button
          className="text-5xl hover:scale-110"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="flex flex-col"
          onClick={() => dispatch(reset())}
        >
          <span className="text-4xl gap-12 px-6 py-4 ">{count}</span>
          <span className="border border-portocaliu p-2 rounded-t-xl border-b-0 hover:scale-110">
            reset
          </span>
        </button>
        <button
          className="text-5xl hover:scale-110"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="flex flex-col ">
        <div className="flex  border border-b-0 h-24 max-w-xl  items-center border-portocaliu p-6 gap-6">
          {" "}
          <span className="w-1/3"> Increment amount by</span>
          <div className="flex w-1/3 ">
            <input
              type="text"
              onChange={setIncrementAmmount}
              maxLength={6}
              defaultValue={incrementAmount}
              className="w-full h-8 focus:outline-none text-center border-2 border-portocaliu border-dashed ring-portocaliu focus:ring-portocaliu focus:ring-4 focus:border-portocaliu"
            />
          </div>
          <button
            className="w-1/3 border p-2 border-portocaliu hover:scale-110"
            onClick={() => dispatch(incrementByAmount())}
          >
            increment by {incrementAmount}
          </button>
        </div>
        <div className="flex  border  h-24 max-w-xl  items-center border-portocaliu p-6 gap-6">
          <span className="w-1/3">Decrement amount by</span>
          <div className="flex w-1/3 ">
            <input
              type="text"
              maxLength={6}
              defaultValue={decrementAmount}
              className="w-full h-8 focus:outline-none text-center border-2 border-portocaliu border-dashed ring-portocaliu focus:ring-portocaliu focus:ring-4 focus:border-portocaliu"
              onChange={setDecrementAmmount}
            />{" "}
          </div>
          <button
            className="w-1/3 border p-2 border-portocaliu hover:scale-110"
            onClick={() => dispatch(decrementByAmount())}
          >
            Decrement by {decrementAmount}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReduxCounter;
