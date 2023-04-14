import { useState } from "react";

let cartItems = [
  {
    id: 1,
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

function CartItem({ product, increaseFunction, decreaseFunction }) {
  return (
    <div className="flex flex-row mx-auto mb-8" id={product.id}>
      <img
        alt={product.name}
        className="w-24 h-24 rounded mr-5 w-1/6"
        src={product.img}
      />
      <div className="w-3/4 flex flex-col">
        <div className="flex flex-row justify-between">
          <h3 className="mb-4">{product.name}</h3>
          <p className="font-bold">${product.price}</p>
        </div>
        <div className="product-control-container">
          <div className="flex flex-row w-1/2 justify-between">
            <button
              onClick={() => decreaseFunction(product.id)}
              className="rounded-3xl w-6 h-6 flex flex-row justify-center items-center mr-2 bg-gray-300"
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              onClick={() => increaseFunction(product.id)}
              className="rounded-3xl w-6 h-6 flex flex-row justify-center items-center mr-2 bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const [items, setItems] = useState(cartItems);

  console.log(items);

  function handleIncreaseItem(id) {
    let copiedItems = items.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
    setItems(copiedItems);
  }

  function handleDecreaseItem(id) {
    let copiedItems = items.map((item) => {
      if (item.id === id) {
        item.quantity -= 1;
      }
      return item;
    });
    setItems(copiedItems);
  }

  return (
    <div className="flex flex-col justify-center border border-gray-300 py-8 px-6 rounded">
      <h3 className="font-bold text-lg mb-8">購物籃</h3>
      <div className="">
        {/* Item */}
        {items.map((item) => (
          <CartItem
            product={item}
            key={item.id}
            increaseFunction={handleIncreaseItem}
            decreaseFunction={handleDecreaseItem}
          />
        ))}
      </div>
      <span className="border border-gray-300" />
      {/* Shipping Fee */}
      <div className="flex flex-row justify-between mt-4 mb-8">
        <span className="text-sm">運費</span>
        <span className="text-sm font-bold">免費</span>
      </div>
      <span className="border border-gray-300" />
      {/* Total amount */}
      <div className="flex flex-row justify-between mt-4 mb-8">
        <span className="text-sm">小計</span>
        <span className="text-sm font-bold">$599</span>
      </div>
    </div>
  );
}
