import "./App.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AddHomeRoundedIcon from "@mui/icons-material/AddHomeRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  console.log(menu);
  return (
    <>
      <div className="flex flex-col gap-[12px] bg-[#0e0d0d] text-white py-1">
        <div className="flex justify-center gap-5 items-center">
          <div className="flex gap-2 sm:text-[18px] text-[12px]">
            <WhatsAppIcon />
            <span>+8809638442121</span>
          </div>
          <div className="flex gap-2 sm:text-[18px] text-[14px]">
            <EmailIcon />
            <span> info@ryansbd.com</span>
          </div>
        </div>
        <div className="flex   justify-between  items-center px-[10px]">
          <div
            className="xl:hidden md:visible relative cursor-pointer transition-all delay-75"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <CancelIcon /> : <MenuRoundedIcon />}
          </div>
          <h3 className="text-[30px] lg:text-[40px]  sm:text-[35px] text-green-600 font-serif font-bold italic">
            Ryans
          </h3>

          <div className="flex justify-between gap-[8rem] items-center">
          <div className="md:flex gap-0 rounded-md hidden">
            <input
              type="text"
              placeholder="Enter your Keyword..."
              className="text-black py-[6px] px-[10px] outline-none rounded-tl-lg w-[300px] rounded-bl-lg"
            />
            <button className="bg-[green] py-[6px] px-[10px] text-[15px] rounded-tr-lg rounded-br-lg ">
              <SearchIcon />
            </button>
          </div>
            <button className="  xl:flex hidden px-[14px] py-[8px]  hover:bg-green-600 hove:transition-shadow transition-all delay-100 text-yellow-300 border-[2px]  border-green-600 rounded-md ">
              PC BUILDER
            </button>

            <div className="flex items-center justify-center gap-[25px] cursor-pointer">
              <div className="relative ">
                <AddShoppingCartIcon style={{
                  fontSize: "20px"
                }}/>
                <span className="absolute top-[-11px] right-[-12px] bg-red-500 rounded-full w-[20px] h-[15px] text-[13px]  flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="relative cursor-pointer">
                <FavoriteBorderRoundedIcon  style={{
                  fontSize: "20px"
                }}/>
                <span className="absolute top-[-11px] right-[-12px] bg-red-500 rounded-full w-[20px] h-[15px] text-[13px] flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="relative cursor-pointer">
                <CompareArrowsRoundedIcon  style={{
                  fontSize: "20px"
                }}/>
                <span className="absolute top-[-11px] right-[-12px] bg-red-500 rounded-full w-[20px] h-[15px] text-[13px] flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="cursor-pointer">
                <AccountCircleRoundedIcon  style={{
                  fontSize: "20px"
                }}/>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sm:flex  xl:flex-row md:justify-center  items-center  xl:bg-[none]  justify-center sm:pl-5 w-[300px] xl:w-[100%] transition-all delay-100 absolute xl:static ${
            menu
              ? "flex flex-col bg-gray-900 left-0 top-[89px] lg:top-[107px] sm:top-[100px]"
              : " left-[-200px]  top-[90px]   flex flex-col"
          } `}
        >
          <AddHomeRoundedIcon className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500 "/>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            laptop
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            computer
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Desktop & Server
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Gaming
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Monitor
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
              Tablet PC
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Printer
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Network
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Sound System
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Office Items
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Accessories
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Stories
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Daily Life
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            Store
          </span>
          <span className="py-1 cursor-pointer px-1 text-[15px] hover:rounded-sm hover:bg-slate-500">
            computer
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
