import Footer from "../components/Footer"
import whitewatch from "../images/white-watch.png"

    const ShoppingBag = () => {
  return (
    <div className='signup-container flex-col items-center justify-center h-full w-mwidth border-x-2 border-black bg-white'>

        <div className="vendor-header flex flex-col w-80 h-28 items-center mx-auto">
        <h1 className="font-custom text-4xl font-bold h-7 w-40 py-8 mb-2">Nescafe</h1>
      

        <div className="time-pricing text-white text-small-9 w-36 h-7 my-3 bg-vendortimepricing rounded-2xl flex justify-around items-center">
            <div className="vendor-time border-r-1 flex justify-center items-center border-white">
            <img src={whitewatch} alt='whitewatch' className='w-3 h-3 ml-3 mb-onep'></img>
            <p className="w-11 font-custom font-semibold">10 mins.</p>
            </div> 
        </div>
       

            </div>
        
        <div className="top-picks w-80 h-20  mt-0 flex justify-center bg-white m-auto"> 
            <h1 className="font-custom text-small-26 font-semibold text-gray-700 ">5-10 mins | Estimated Time</h1>
        </div>


    <div className="order-placed w-5/6 h-32 card-bottom bg-green-800 px-3 py-2 flex-col mx-auto rounded-3xl shadow-lg">
    <div className="Nescafe w-full h-full flex justify-center items-center">
      <h3 className="orderplaced ml-1 h-8 text-xl font-custom font-semibold  text-white" >Your order has been placed!</h3>
    </div> </div>

    <div className="top-picks w-80 h-20  mt-10 bg-white m-auto"> 
            <h1 className="font-custom text-lg font-bold text-black text-left">Track your order</h1>
        </div>
       
        <Footer/>
        </div>
  )
}
export default ShoppingBag