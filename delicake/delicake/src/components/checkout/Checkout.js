import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import swal from "sweetalert";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cartList, cartReduce, setCartList} = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    Name: "",
    Email: "",
    EmailConfirm:'',
    Phone: "",
  });

  const { Name, Email, EmailConfirm, Phone } = buyer;

  const [myCart, setMyCart] = useState([...cartList]);

  const [orderId, setOrderId] = useState("");

  const inputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    if((Email!=EmailConfirm)||((cartList.length)<1)){
      e.preventDefault()
      swal({title:"email incorrecto o carrito vacio", text:"porfavor vuelva a intentar", timer:1000, icon:"error", buttons:false})
    }else{
      e.preventDefault();
      const total=cartReduce()
      const dia=new Date()
      const data = { buyer, myCart, total, dia };
      order(data);
      setCartList([])
    }
  };

  const order = async (orderData) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "orders");
    const order = await addDoc(queryCollection, orderData);
    setOrderId(order.id);
    console.log(order);
  };

  useEffect(() => {
    setMyCart([...cartList]);
  }, []);


  return (
    <div>
    <div className="flex justify-center">
      {!orderId &&  
      <>
      <div>
        <h1 className="relative top-4 left-7 text-[40px] pb-9">checkout</h1>
        <section className="pl-[30px]">
          <div>
            <form onSubmit={formSubmit} className="flex flex-col gap-[20px]">
              <div>
                <input
                  type={"text"}
                  name="Name"
                  required
                  value={Name}
                  placeholder="nombre completo"
                  onChange={inputChange}
                  className="border-gray-200 border-2 h-[45px] w-[200%]"
                  
                />
              </div>
              <div>
                <input
                  type={"number"}
                  name="Phone"
                  required
                  value={Phone}
                  placeholder="telefono"
                  onChange={inputChange}
                  className="border-gray-200 border-2 h-[45px] w-[200%]"
                />
              </div>
              <div>
                <input
                  type={"email"}
                  name="Email"
                  required
                  value={Email}
                  placeholder="email"
                  onChange={inputChange}
                  className="border-gray-200 border-2 h-[45px] w-[200%]"
                  id="1"
                />
              </div>
              <div>
                <input
                  type={"email"}
                  name="EmailConfirm"
                  required
                  placeholder="confirmar email"
                  value={EmailConfirm}
                  onChange={inputChange}
                  className="border-gray-200 border-2 h-[45px] w-[200%]"
                  id="2"
                />
              </div>
              <div>
                <input

                  type={"submit"}
                  placeholder="finalizar compra"
                  className="bg-red-200 p-[7px_25px]"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
      <section className="m-auto">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-[25px] text-gray-400">mi pedido</h2>
            <h3 className="text-gray-400">total: ${cartReduce()} </h3>
          </div>
          <div className="h-[300px] w-[600px] border-[3px] border-pink-200 overflow-x-hidden overflow-y-auto rounded-md">
            <ul className="grid grid-rows-1 gap-4">
              {cartList.map((p) => (
                <li key={p.id}>
                  <div className="flex items-center">
                    <div className="pr-[30px]">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-[150px] rounded-md"
                      />
                    </div>
                    <div className="flex gap-5">
                      <h4 className="text-gray-400 font-semibold">{p.name}</h4>
                      <p className="text-gray-400">{p.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </>
}
      {orderId && 
      <div className="flex flex-col text-center mt-[150px]">
        <h1 className="text-[40px]">felicidades!has completado tu compra</h1>
        <h2 className="text-[28px]">tu numero de orden es :<strong>{orderId}</strong></h2>
        <Link className='p-[7px_10px] block ease-out bg-pink-200 text-white no-underline rounded-[5px] hover:ease-out duration-500 hover:text-pink-200 hover:bg-transparent hover:border-pink-200 hover:border-[1px] transition-colors text-[20px]'>inicio</Link>
      </div>
      
      }
    </div>
    </div>
  );
};

export default Checkout;
