import "./index.css"
import bg from "./images/bg-desktop.svg"
import logo from "./images/logo.svg"
import illusration from "./images/illustration-mockups.svg"
import bg_mobile from "./images/bg-mobile.svg"

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

function App()
{
  return (
    <div className="App w-screen h-screen relative bg-Violet p-[2.5rem] flex flex-col  items-center justify-center gap-5 Mobile:p-3">
      <img src={bg} alt="img bg" className="h-full w-full object-cover fixed top-0 left-0 right-0 bottom-0 -z-1 Mobile:hidden" />
      <img src={bg_mobile} alt="img bg" className="hidden w-full  object-cover fixed top-0 left-0 right-0 bottom-0 -z-1 Mobile:block" />


      <div className="w-4/5 flex flex-col justify-around h-full ">
        <div className="logo z-10  h-[10%]">
          <img src={logo} alt="logo img" className="h-[2.5rem]" />
        </div>
        <div className="content w-full  flex h-4/5 justify-evenly items-center gap-10 z-10 Mobile:flex-col Mobile:justify-center Mobile:gap-1">
          <div className="left w-1/2 h-full flex items-center justify-center Mobile:w-full Mobile:h-1/2 ">
            <img src={illusration} alt="img ilustration" />
          </div>
          <div className="right w-1/2 text-[#fff] p-5 flex flex-col justify-center gap-5 h-full items-start Mobile:w-full Mobile:h-1/2 Mobile:p-2 Mobile:text-center Mobile:gap-2 Mobile:justify-center Mobile:items-center">
            <h1 className=" font-Popins text-[2rem] font-lg w-full Mobile:text-[1.5rem]">Build The Community Your Fans Will Love</h1>
            <p className=" font-Open-Sans"> Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion.</p>

            <button className=" text-Violet bg-[#fff] px-14 py-3 rounded-full font-ms font-Popins drop-shadow-lg hover:bg-Soft-Magenta hover:text-[#fff] transition-all Mobile:w-2/3 flex items-end justify-center"> Register</button>

          </div>
        </div>
        <div className=" flex items-center w-full justify-end text-[#fff] gap-5 h-[10%] z-[1000] Mobile:justify-center">
          <FaFacebookF className="text-[2rem] border-[#fff] border-[1px] p-[6px] rounded-full cursor-pointer hover:text-Soft-Magenta 
          hover:border-Soft-Magenta transition-all" />
          <FaTwitter className="text-[2rem] border-[#fff] border-[1px] p-[6px] rounded-full cursor-pointer hover:text-Soft-Magenta hover:border-Soft-Magenta transition-all" />
          <FaInstagram className="text-[2rem] border-[#fff] border-[1px] p-[6px] rounded-full cursor-pointer hover:text-Soft-Magenta hover:border-Soft-Magenta transition-all" />


        </div>

      </div>

    </div >
  );
}

export default App;
