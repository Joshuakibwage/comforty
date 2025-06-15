import React from 'react';
import { 
  Check, Info, Armchair, Search, ShoppingCart, Heart, User, Menu
} from 'lucide-react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
  return (
    <div>
      {/* top navbar */}

      <div className="navbar_top flex justify-center items-center bg-[#272343] h-[45px] w-full">
        <div className="lg:container flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check size={20} /> Free on all orders over $50
          </p>

          <div className="navbar_top_right flex items-center gap-6">
            <select 
              defaultValue="Server location" 
              className="select select-neutral h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white cursor-pointer"
            >
              <option >Eng</option>
              <option >Swahili</option>
            </select>

            <button className="">
            <Link className="text-sm text-white font-inter font-normal capitalize flex items-center gap-2">
              <Info size={20} />need help
            </Link>
          </button>
          </div>

        </div>
      </div>

      {/* middle navbar */}
      <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
        <div className="lg:container grid grid-cols-3 items-center ">

          <div className="logo_wrapper">
            <Link to='/' className="text-3xl text-black font-inter font-medium capitalize flex items-center "
            >
              <Armchair  
                size="2rem"
                color="#029fae"
              />
              comforty
            </Link>
          </div>

          <div className="search_box">
            <form action="#" className="max-w-96 h-[44px] relative border border-gray-300 rounded-lg">
              <input 
                type="text" 
                placeholder="Search here..."
                className="w-full h-full bg-[white] rounded-lg pl-4 text-gray-950"
              />

              <button className="absolute to-50% right right-4 translate-y-1/2">
                <Search size={20} color="#272343" />
              </button>
            </form>
          </div>

          {/* navbar middle right */}
          <div className="navbar_middle_right flex items-center gap-6">
            <button className="btn capitalize">
              <ShoppingCart /> Cart <div className="badge badge-sm bg-[#029fae]">+99</div>
            </button>

            <button className="btn capitalize">
              <Heart />
            </button>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1"><User /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><Link>Account</Link></li>
                <li><Link>Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* navbar bottom  */}
      <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b border-[#e1e3e5]">
        <div className="lg:container flex items-center justify-between">

          <div className="navbar_bottom_left flex items-center gap-8">

            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1 flex items-center capitalize gap-5">
                <Menu /> All Categories
              </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a>Chair</a></li>
                  <li><a>Pants</a></li>
                  <li><a>T-shirts</a></li>
                  <li><a>Shirts</a></li>
                  <li><a>Accessories</a></li>
                </ul>
              </div>

            <nav className="flex items-center gap-8">
              <NavLink to='/' className="text-sm text-[#029fae] font-inter font-medium capitalize">Home</NavLink>
              <NavLink className="text-sm text-[#029fae] font-inter font-medium capitalize">Shop</NavLink>
              <NavLink className="text-sm text-[#029fae] font-inter font-medium capitalize">Product</NavLink>
              <NavLink className="text-sm text-[#029fae] font-inter font-medium capitalize">Pages</NavLink>
              <NavLink className="text-sm text-[#029fae] font-inter font-medium capitalize">About</NavLink>
            </nav>

          </div>

          <div className="navbar_bottom_right ">
            <p className="text-sm text-[#636270] font-inter font-normal capitalize">
              contact: <span className="text-[#272343]">+2547 1000 1000</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
