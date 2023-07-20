import {create} from 'zustand'
 const useStore = create((set) => ({
    cartItems: 0,
    inc: () => set((state) => ({ cartItems: state.cartItems + 1 })),
    dec: () => set((state) => ( { cartItems:  state.cartItems !==0 ?state.cartItems - 1 : state.cartItems })),
  }))
  export default useStore