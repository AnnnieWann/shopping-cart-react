const cartItems = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

function CartItem({ id, name, price, img, quantity }) {
  return (
    <div className="flex flex-row mx-auto mb-8">
      <img alt={name} className="w-24 h-24 rounded mr-5 w-1/6" src={img} />
      <div className="w-3/4 flex flex-col">
        <div className="flex flex-row justify-between">
          <h3 className="mb-4">{name}</h3>
          <p className="font-bold">${price}</p>
        </div>
        <div className="product-control-container">
          <div className="flex flex-row w-1/2 justify-between">
            <button className="rounded-3xl w-6 h-6 flex flex-row justify-center items-center mr-2 bg-gray-300">
              -
            </button>
            <span>{quantity}</span>
            <button className="rounded-3xl w-6 h-6 flex flex-row justify-center items-center mr-2 bg-gray-300">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <div className="flex flex-col justify-center border border-gray-300 py-8 px-6 rounded">
      <h3 className="font-bold text-lg mb-8">購物籃</h3>
      <div className="">
        {/* Item */}
        {cartItems.map((item) => (
          <CartItem {...item} key={item.id} />
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
