import GroupComponent from "@/pages/seller/IncomeRecords/GroupComponent";
import PropTypes from "prop-types";
import date from "@/assets/seller/date.png";
import left from "@/assets/seller/left.png";
import right from "@/assets/seller/right.png";
import download from "@/assets/seller/download.png";
const ContentContainer = ({ className = "" }) => {
  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-[calc(100%_-_350px)] text-left text-5xl text-primary-black font-nunito-sans mq450:pt-[21px] mq450:box-border mq1050:pt-8 mq1050:box-border mq1050:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <div className="self-stretch bg-white border-primary-grey border-[0px] border-solid box-border flex flex-row items-start justify-between p-[30px] max-w-full gap-5 mq750:flex-wrap">
          <img
            className="h-[105px] w-[1040px] relative hidden max-w-full"
            alt=""
            src="/rectangle-1979.svg"
          />
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <h3 className="m-0 relative text-inherit capitalize font-extrabold font-[inherit] z-[1] mq450:text-lgi">
              Income Records
            </h3>
          </div>
          <div className="w-[385px] flex flex-row items-start justify-start gap-3.5 max-w-full text-base mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[43px] z-[1]">
                Date :
              </a>
            </div>
            <div className="flex-1 border-primary-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-2 px-[15px] pb-[9px] gap-[21px] min-w-[213px] max-w-full z-[1] text-center text-sm text-grey-2 mq450:flex-wrap">
              <div className="h-[45px] w-[328px] relative border-primary-grey border-[1px] border-solid box-border hidden max-w-full" />
              <div className="flex-[0.9528] flex flex-row items-start justify-start py-0 pl-0 pr-1.5 box-border gap-1.5 min-w-[83px] mq450:flex-1">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
                  loading="lazy"
                  alt=""
                  src={date}
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="self-stretch relative z-[2]">02/06/2020</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-primary-black">
                <div className="relative inline-block min-w-[6px] z-[2]">-</div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-1.5 min-w-[79px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
                  loading="lazy"
                  alt=""
                  src={date}
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="self-stretch relative z-[2]">02/06/2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start gap-[39.9px] max-w-full text-base mq750:gap-5">
          <div className="self-stretch h-[672px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden" />
          <div className="self-stretch bg-primary-black flex flex-row items-start justify-start py-6 px-[49px] box-border gap-[229px] max-w-full z-[1] text-white mq450:gap-[57px] mq1050:gap-[114px] mq1050:flex-wrap mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
            <div className="h-[70px] w-[1038px] relative bg-primary-black hidden max-w-full" />
            <div className="relative capitalize font-semibold inline-block min-w-[114px] z-[2]">
              Invoice Number
            </div>
            <div className="w-[487px] flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
              <div className="relative capitalize font-semibold inline-block min-w-[100px] z-[2]">
                transfer Date
              </div>
              <div className="w-[127px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <div className="relative capitalize font-semibold inline-block min-w-[94px] z-[2]">
                  total income
                </div>
              </div>
              <div className="relative font-semibold inline-block min-w-[48px] z-[2]">
                Action
              </div>
            </div>
          </div>
          <div className="w-[916px] flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2.5">
                <div className="relative tracking-[0.2px] font-semibold z-[1]">
                  INV-20200420-5f50930-001
                </div>
              </div>
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                30 Mar - 30 Apr 2020
              </div>
              <div className="w-[173px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center whitespace-nowrap z-[1]">
                  Rp 2.000.000
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src={download}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
          <div className="w-[916px] flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                INV-20200420-5f50930-001
              </div>
              <div className="w-[400px] flex flex-row items-start justify-start py-0 pl-0 pr-12 box-border gap-[70px] max-w-full mq450:gap-[35px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <div className="relative tracking-[0.2px] font-semibold z-[1]">
                  30 Mar - 30 Apr 2020
                </div>
                <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center shrink-0 whitespace-nowrap z-[1]">
                  Rp 2.000.000
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src={download}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
          <div className="w-[916px] flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                INV-20200420-5f50930-001
              </div>
              <div className="w-[400px] flex flex-row items-start justify-start py-0 pl-0 pr-12 box-border gap-[70px] max-w-full mq450:gap-[35px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <div className="relative tracking-[0.2px] font-semibold z-[1]">
                  30 Mar - 30 Apr 2020
                </div>
                <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center shrink-0 whitespace-nowrap z-[1]">
                  Rp 2.000.000
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src={download}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
          <div className="w-[916px] flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                INV-20200420-5f50930-001
              </div>
              <div className="w-[400px] flex flex-row items-start justify-start py-0 pl-0 pr-12 box-border gap-[70px] max-w-full mq450:gap-[35px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <div className="relative tracking-[0.2px] font-semibold z-[1]">
                  30 Mar - 30 Apr 2020
                </div>
                <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center shrink-0 whitespace-nowrap z-[1]">
                  Rp 2.000.000
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src={download}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
          <div className="w-[916px] flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3.5">
                <div className="relative tracking-[0.2px] font-semibold z-[1]">
                  INV-20200420-5f50930-001
                </div>
              </div>
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                30 Mar - 30 Apr 2020
              </div>
              <div className="w-[175px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center whitespace-nowrap z-[1]">
                  Rp 2.000.000
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src={download}
                />
              </div>
            </div>
          </div>
          <GroupComponent
            iconArrowChevronDown={left}
            iconArrowChevronDown1={right}
          />
        </div>
      </div>
    </section>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;