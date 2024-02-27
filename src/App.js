
import Counter from './components/Counter'
import {  useSelector } from 'react-redux'

const App = () => {
  const state = useSelector(state => state.count)
  console.log(state);

  return (
    <div className='container'>
      <h1>Counter: {state}</h1>
      <Counter />
    </div>
  )
}

export default App