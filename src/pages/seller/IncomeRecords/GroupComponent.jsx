import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  iconArrowChevronDown,
  iconArrowChevronDown1,
}) => {
  return (
    <footer
      className={`self-stretch bg-primary-black border-whitesmoke-200 border-[0.5px] border-solid box-border flex flex-row items-start justify-between py-[19px] pl-[30px] pr-[50px] max-w-full gap-5 z-[1] text-left text-base text-white font-nunito-sans mq1050:pr-[25px] mq1050:box-border mq750:flex-wrap ${className}`}
    >
      <div className="h-[0.5px] w-[1038.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border hidden max-w-full" />
      <div className="h-[70px] w-[1039px] relative bg-primary-black border-whitesmoke-200 border-[0.5px] border-solid box-border hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <div className="relative inline-block min-w-[68px] z-[1]">
          <span className="font-semibold">{`1-5 `}</span>
          <span className="font-light">of</span>
          <span className="font-semibold"> 60</span>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[30px] z-[1]">
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <img
            className="w-4 h-4 relative object-contain"
            loading="lazy"
            alt=""
            src={iconArrowChevronDown}
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="relative uppercase font-semibold inline-block min-w-[10px]">
            1
          </div>
        </div>
        <div className="bg-secondary-blue flex flex-row items-start justify-start py-1 px-2.5">
          <div className="h-[30px] w-[30px] relative bg-secondary-blue hidden" />
          <div className="relative uppercase font-semibold inline-block min-w-[10px] z-[1]">
            2
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="relative uppercase font-semibold inline-block min-w-[10px]">
            3
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="relative uppercase font-semibold inline-block min-w-[10px]">
            4
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="relative uppercase font-semibold inline-block min-w-[10px]">
            5
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <img
            className="w-4 h-4 relative object-contain"
            loading="lazy"
            alt=""
            src={iconArrowChevronDown1}
          />
        </div>
      </div>
    </footer>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  iconArrowChevronDown: PropTypes.string,
  iconArrowChevronDown1: PropTypes.string,
};

export default GroupComponent;