import PropTypes from "prop-types";

const PopupKonfirmasiSubmitData = ({ className = "" }) => {
  return (
    <div
      className={`w-[800px] rounded-8xs bg-white max-w-full overflow-hidden flex flex-col items-center justify-start pt-[59px] pb-[58px] pl-[21px] pr-5 box-border gap-[30px] leading-[normal] tracking-[normal] mq750:gap-[15px] ${className}`}
    >
      <div className="w-[553px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
        <img
          className="h-[140px] w-[140px] relative"
          loading="lazy"
          alt=""
          src="/group-5895.svg"
        />
      </div>
      <section className="flex flex-col items-end justify-start gap-[19px] max-w-full text-center text-21xl text-gray-200 font-nunito-sans">
        <div className="flex flex-row items-start justify-end py-0 pl-[50px] pr-12 mq750:pl-[25px] mq750:pr-6 mq750:box-border">
          <h3 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-5xl">
            Withdraw your balance?
          </h3>
        </div>
        <div className="relative text-[28px] mq450:text-[22px]">
          Are you sure to withdraw [account_balance]
        </div>
      </section>
      <div className="flex flex-row items-start justify-start py-0 pl-[61px] pr-[62px] box-border max-w-full mq750:pl-[30px] mq750:pr-[31px] mq750:box-border">
        <div className="h-[70px] w-[430px] flex flex-row items-start justify-start gap-[30px] max-w-full">
          <button className="cursor-pointer [border:none] pt-[18px] px-[45px] pb-[17px] bg-crimson-200 flex-1 rounded-8xs flex flex-row items-start justify-start hover:bg-crimson-100">
            <div className="h-[70px] w-[200px] relative rounded-8xs bg-crimson-200 hidden" />
            <b className="flex-1 relative text-7xl tracking-[0.01em] font-nunito-sans text-white text-center z-[1] mq450:text-2xl">
              Cancel
            </b>
          </button>
          <button className="cursor-pointer border-darkseagreen-100 border-[4px] border-solid pt-[18px] px-[72px] pb-[17px] bg-forestgreen h-[78px] flex-[0.4746] rounded-8xs box-border flex flex-row items-start justify-start hover:bg-mediumseagreen hover:border-darkseagreen-200 hover:border-[4px] hover:border-solid hover:box-border">
            <div className="h-[78px] w-52 relative rounded-8xs bg-forestgreen border-darkseagreen-100 border-[4px] border-solid box-border hidden" />
            <b className="w-14 relative text-7xl tracking-[0.01em] flex font-nunito-sans text-white text-center items-center justify-center shrink-0 z-[1] mq450:text-2xl">
              Yes
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

PopupKonfirmasiSubmitData.propTypes = {
  className: PropTypes.string,
};

export default PopupKonfirmasiSubmitData;
