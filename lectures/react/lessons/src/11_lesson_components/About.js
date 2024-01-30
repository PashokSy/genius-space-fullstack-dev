import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/counter/counterSlice';
import {counterSelector} from '../redux/counter/counterSelectors'

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const counterValue = useSelector(counterSelector)
  console.log(counterValue)  

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <h1>About</h1>
      <button onClick={() => navigate(-1)}>Return back</button>
      <p>{ counterValue}</p>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={()=>handleIncrementByAmount(5)}>Increment by amount</Button>
    </>
  );
};

export default About;
