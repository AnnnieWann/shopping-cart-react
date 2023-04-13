import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

export default function Header() {
  return (
    <div>
      <div className="navbar grid grid-cols-5 py-5 w-4/5 mx-auto">
        {/* Nav items */}
        <div className="col-span-2">
          <ul className="flex flex-row text-base">
            <li className="nav-item mr-8">
              <a className="nav-link" href="#">
                男款
              </a>
            </li>
            <li className="nav-item mr-8">
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className="nav-item mr-8">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item mr-8">
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex flex-row justify-center">
          <a>
            <Logo />
          </a>
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex flex-row justify-end">
          <button>
            <Search />
          </button>
          <button className="px-6">
            <Cart />
          </button>
          <button>
            <Moon />
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
className="h-5 w-5"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  d="M4 6h16M4 12h16M4 18h7"
/>
</svg> */
}
