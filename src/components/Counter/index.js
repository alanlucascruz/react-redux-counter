import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "store/reducers/counterSlice";
import "./styles.css";

const Counter = () => {
  const dispatch = useDispatch();

  const { value: count } = useSelector((state) => state.counter);

  return (
    <div className="container">
      <button onClick={() => dispatch(decrement())}>Remover</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Adicionar</button>
    </div>
  );
};

export default Counter;
