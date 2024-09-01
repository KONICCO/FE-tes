import PropTypes from "prop-types";

const PopupDataSuksesTesubmit = ({ className = "" }) => {
  return (
    <div
      className={`w-[800px] rounded-8xs bg-white max-w-full overflow-hidden flex flex-col items-start justify-start pt-10 pb-[58px] pl-[69px] pr-[60px] box-border gap-16 leading-[normal] tracking-[normal] mq450:gap-8 mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[19.5px] text-center text-21xl text-gray-200 font-nunito-sans">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[27px]">
          <img
            className="h-[140px] w-[140px] relative"
            loading="lazy"
            alt=""
            src="/group-5890.svg"
          />
        </div>
        <h2 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-5xl mq750:text-[32px]">
          Withdraw is successfully requested!
        </h2>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px] text-5xl">
          <div className="relative mq450:text-lgi">
            Please wait 2x24 hours for approval
          </div>
        </div>
      </section>
      <div className="self-stretch h-[70px] flex flex-row items-start justify-center py-0 pl-0 pr-[7px] box-border">
        <button className="cursor-pointer border-lightsteelblue border-[4px] border-solid pt-[18px] pb-4 pl-[81px] pr-20 bg-cornflowerblue-200 h-[78px] w-52 rounded-8xs box-border flex flex-row items-start justify-center hover:bg-cornflowerblue-100 hover:border-lightslategray hover:border-[4px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[78px] w-52 relative rounded-8xs bg-cornflowerblue-200 border-lightsteelblue border-[4px] border-solid box-border hidden" />
          <b className="relative text-7xl tracking-[0.01em] inline-block font-nunito-sans text-white text-left min-w-[39px] z-[1] mq450:text-2xl">
            OK
          </b>
        </button>
      </div>
    </div>
  );
};

PopupDataSuksesTesubmit.propTypes = {
  className: PropTypes.string,
};

export default PopupDataSuksesTesubmit;