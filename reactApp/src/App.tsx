import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MyFunction } from './Components/FunctionComponent'
import { MyClass, MyClass2 } from './Components/ClassComponents'
import Form from './Components/StudentDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form />
      {/* <MyFunction />
      <MyClass /> <MyClass2 /> */}
    </>
  )
}

export default App
