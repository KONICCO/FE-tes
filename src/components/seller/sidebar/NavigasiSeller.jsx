import PropTypes from "prop-types";
import down from "@/assets/seller/down.png";

const NavigasiSeller = ({ className = "" }) => {
  return (
    <div
      className={`bg-bg-black  relative flex flex-col items-start justify-start pt-[30px] pb-[733px] pl-[50px] pr-[30px] box-border gap-[30px] leading-[normal] tracking-[normal] text-left text-lg text-grey-2 font-nunito-sans ${className}`}
    >
      <a className="[text-decoration:none] relative text-xl font-bold text-primary-bg inline-block min-w-[102px] z-[1]">
        Dashboard
      </a>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1] text-xl text-primary-bg">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[55px]">
            Order
          </a>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={down}
        />
      </div>
      <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[78px] z-[1]">
        My Order
      </a>
      <div className="relative font-semibold z-[1]">Cancellation / Refund</div>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1] text-xl text-primary-bg">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative inline-block min-w-[73px]">Product</b>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={down}
        />
      </div>
      <div className="relative font-semibold inline-block min-w-[94px] z-[1]">
        My Product
      </div>
      <div className="relative font-semibold inline-block min-w-[104px] z-[1]">
        Add Product
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1] text-xl text-primary-bg">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative inline-block min-w-[66px]">Selling</b>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={down}
        />
      </div>
      <div className="relative font-semibold z-[1]">Dashboard Selling</div>
      <div className="relative font-semibold z-[1]">Income Records</div>
      <div className="relative font-semibold z-[1]">My Bank Account</div>
      <div className="w-[212px] flex flex-row items-start justify-start py-px px-0 box-border relative z-[1] text-xl text-primary-bg">
        <img
          className="h-full w-[30px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full overflow-hidden shrink-0"
          alt=""
          src={down}
        />
        <b className="relative inline-block min-w-[51px]">Store</b>
      </div>
      <div className="relative font-semibold inline-block min-w-[103px] z-[1]">
        Store Profile
      </div>
      <div className="relative font-semibold inline-block min-w-[109px] z-[1]">
        Store Review
      </div>
      <div className="relative font-semibold inline-block min-w-[124px] z-[1]">
        Store Category
      </div>
    </div>
  );
};

NavigasiSeller.propTypes = {
  className: PropTypes.string,
};

export default NavigasiSeller;
