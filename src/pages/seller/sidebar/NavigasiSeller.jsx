import PropTypes from "prop-types";
import down from "@/assets/seller/down.png";

const NavigasiSeller = ({ className = "" }) => {
  return (
    <div
      className={`h-[1581px] w-[300px] flex flex-col items-start justify-start py-[30px] pl-[50px] pr-[30px] box-border relative gap-[30px] text-left text-lg text-primary-gray2 font-nunito-sans bg-bg-black mq1050:hidden mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq450:gap-[15px] mq450:pl-5 mq450:box-border ${className}`}
    >
      {/* <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/separator.svg"
      /> */}
      <a className="[text-decoration:none] relative text-xl font-bold text-primary-bg inline-block min-w-[102px] z-[1] mq450:text-base">
        Dashboard
      </a>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1] text-xl text-primary-bg">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative inline-block min-w-[55px] mq450:text-base">
            Order
          </b>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={down}
        />
      </div>
      <div className="relative font-semibold inline-block min-w-[78px] z-[1]">
        <a href="">My Order</a>
      </div>
      <div className="relative font-semibold z-[1]">
        <a href="">Cancellation / Refund</a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1] text-xl text-primary-bg">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative inline-block min-w-[73px] mq450:text-base">
            Product
          </b>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={down}
        />
      </div>
      <div className="relative font-semibold inline-block min-w-[94px] z-[1]">
        <a href="">My Product</a>
      </div>
      <div className="relative font-semibold inline-block min-w-[104px] z-[1]">
        <a href="">Add Product</a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1] text-xl text-primary-bg">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative inline-block min-w-[66px] mq450:text-base">
            Selling
          </b>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={down}
        />
      </div>
      <div className="relative font-semibold z-[1]">
        <a href="">Dashboard Selling</a>
      </div>
      <div className="relative font-semibold z-[1]">
        <a href="">Income Records</a>
      </div>
      <div className="relative font-semibold z-[1]">
        <a href="">My Bank Account</a>
      </div>
      <div className="w-[212px] flex flex-row items-start justify-between gap-5 z-[1] text-xl text-primary-bg">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative inline-block min-w-[51px] mq450:text-base">
            Store
          </b>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={down}
        />
      </div>
      <div className="relative font-semibold inline-block min-w-[103px] z-[1]">
        <a href="">Store Profile</a>
      </div>
      <div className="relative font-semibold inline-block min-w-[109px] z-[1]">
        <a href="">Store Review</a>
      </div>
      <div className="relative font-semibold inline-block min-w-[124px] z-[1]">
        <a href="">Store Category</a>
      </div>
    </div>
  );
};

NavigasiSeller.propTypes = {
  className: PropTypes.string,
};

export default NavigasiSeller;
