import { Center,Button} from '@chakra-ui/react'
import { useState } from 'react'
import Welcome from './components/Welcome'
import Cart from './components/Cart'




function App() {

  const [cartPage,setCartPage] = useState(true)

  return (
    <Center h='100vh' w='full' flexDir={'column'} gap='1rem'>
      {
        cartPage?<Cart/>:<Welcome/>
      }
      <Button onClick={()=>setCartPage((prev)=>!prev)}>{!cartPage?'Go to Cart' :'Back'}</Button>
    </Center>
      
  )
}

export default App
