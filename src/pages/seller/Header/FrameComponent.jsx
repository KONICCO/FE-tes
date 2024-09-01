import PropTypes from "prop-types";
import menu from "@/assets/seller/menu.svg"
import logo from "@/assets/seller/seller-logo.png"
import profile from "@/assets/seller/profile.png"
import profileDown from "@/assets/seller/profile-down.png"

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[100px] flex flex-col items-start justify-start gap-1.5 top-[0] z-[99] sticky max-w-full ${className}`}
    >
      {/* <div className="mt-[-6.2px] flex flex-row items-start justify-start py-0 px-[38px]">
        <img
          className="h-[0.2px] w-[0.8px] relative shrink-0"
          alt=""
          src="/path-3.svg"
        />
      </div> */}
      <header className="self-stretch shadow-[-0.2px_3px_16px_rgba(0,_0,_0,_0.38)] bg-black flex flex-row items-start justify-start pt-[30px] px-[50px] pb-[31px] box-border gap-1.5 shrink-0 max-w-full text-left text-21xl text-secondary-blue font-nunito-sans lg:pl-[25px] lg:pr-[25px] lg:box-border">
        <div className="h-[100px] w-[1440px] relative shadow-[-0.2px_3px_16px_rgba(0,_0,_0,_0.38)] bg-bg-black hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[9px] pb-0 pl-0 pr-[38px]">
          <img
            className="w-[30px] h-5 relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={menu}
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[883px] box-border gap-[30px] max-w-full lg:pr-[441px] lg:box-border mq750:gap-[15px] mq750:pr-[220px] mq750:box-border mq450:pr-5 mq450:box-border">
        <img
            className="w-[80px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={logo}
          />
          {/* <div className="w-[55px] flex flex-row items-start justify-start relative">
            <a className="[text-decoration:none] w-[48.4px] absolute !m-[0] top-[0px] left-[-14px] leading-[20px] uppercase font-extrabold flex items-center z-[1] text-[inherit]">
              <span className="[line-break:anywhere] w-full">
                <span>E</span>
                <span className="text-white">G</span>
              </span>
            </a>
            <a className="[text-decoration:none] flex-1 relative leading-[39px] uppercase font-extrabold z-[2] text-[inherit]">
              <span>E</span>
              <span className="text-white">G</span>
            </a>
          </div> */}
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-xl text-white">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[122px] whitespace-nowrap z-[1]">
              Seller Centre
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="w-[30px] h-[30px] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src={profile}
          />
        </div>
        <div className="w-[106px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-base text-white">
          <div className="self-stretch h-5 relative">
            <b className="absolute top-[0px] left-[0px] leading-[20px] uppercase inline-block min-w-[84px] z-[1]">
              aNABELLE
            </b>
            <img
              className="absolute top-[2px] left-[90px] w-4 h-4 overflow-hidden z-[1]"
              alt=""
              src={profileDown}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;