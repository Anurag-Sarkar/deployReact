import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from "./store/reducers/counterSlice"
import {incrementAsync} from "./store/actions/counterActions"

const App = () => {
  const dispatch = useDispatch()

  const {value} = useSelector(state => state.counter)
  console.log(value)
  return (
    <>
      <div>
            {value}
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(incrementAsync(5))}>Increment via value</button>
            
        </div>
    </>
  )
}

export default App