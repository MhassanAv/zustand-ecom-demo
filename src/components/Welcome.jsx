import { Heading} from '@chakra-ui/react'
import useStore from '../Store'

const Welcome = () => {
    const cartItems = useStore((state)=>state.cartItems)
  return (
    <>
    <Heading>Welcome</Heading>
    <Heading><span style={{color:'red'}}>{cartItems}</span> cart items</Heading>
    </>
  )
}

export default Welcome