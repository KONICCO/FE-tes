import PropTypes from "prop-types";

const BalancePanel = ({ className = "" }) => {
  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-[calc(100%_-_351px)] mq1050:pt-8 mq1050:box-border mq1050:max-w-full mq450:pt-[21px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-6 px-0 pb-9 gap-[29.5px] max-w-full">
          <div className="self-stretch h-[341px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden" />
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <input
              className="w-[294px] [border:none] [outline:none] bg-[transparent] h-[33px] flex flex-row items-start justify-start py-0 px-[30px] box-border font-nunito-sans font-extrabold text-5xl text-primary-black"
              placeholder="My Bank Account"
              type="text"
            />
            <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
          </div>
          <div className="w-[360px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
            <div className="flex-1 border-primary-grey border-[1px] border-dashed flex flex-row items-start justify-center py-[73px] px-5 z-[1]">
              <div className="h-[200px] w-[300px] relative border-primary-grey border-[1px] border-dashed box-border hidden" />
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/carbonaddalt.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[990px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-118px]">
          <form className="m-0 w-[788px] shadow-[2px_2px_20px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[30px] pb-[46px] pl-[50px] pr-[30px] box-border gap-[30px] max-w-full z-[4] mq1050:pl-[25px] mq1050:box-border mq450:gap-[15px] mq750:pt-[138px] mq750:pb-[30px] mq750:box-border">
            <div className="w-[788px] h-[558px] relative shadow-[2px_2px_20px_rgba(0,_0,_0,_0.25)] bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <div className="flex flex-col items-start justify-start gap-[26px]">
                  <div className="w-[155px] relative text-base font-extrabold font-nunito-sans text-primary-black text-left inline-block z-[1]">
                    Bank Account
                  </div>
                  <div className="relative text-xs capitalize font-semibold font-nunito-sans text-primary-black text-left z-[1]">
                    name (must be the same as the bank account)
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/baselineclose24px.svg"
                />
              </div>
              <div className="w-[688px] bg-gray-100 border-gainsboro border-[1px] border-solid box-border flex flex-row items-start justify-start p-5 max-w-full z-[1]">
                <div className="h-[60px] w-[688px] relative bg-gray-100 border-gainsboro border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[264px] [border:none] [outline:none] font-nunito-sans text-xs bg-[transparent] h-4 relative text-grey-2 text-left inline-block p-0 z-[1]"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[688px] flex flex-col items-start justify-start gap-4 max-w-full">
              <div className="relative text-xs capitalize font-semibold font-nunito-sans text-primary-black text-left inline-block min-w-[93px] z-[1]">
                account number
              </div>
              <div className="self-stretch bg-gray-100 border-gainsboro border-[1px] border-solid box-border flex flex-row items-start justify-start p-5 max-w-full z-[1]">
                <div className="h-[60px] w-[688px] relative bg-gray-100 border-gainsboro border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[264px] [border:none] [outline:none] font-nunito-sans text-xs bg-[transparent] h-4 relative capitalize text-grey-2 text-left inline-block p-0 z-[1]"
                  placeholder="Your account number"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[688px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-4 max-w-full">
              <div className="relative text-xs capitalize font-semibold font-nunito-sans text-primary-black text-left inline-block min-w-[28px] z-[1]">
                Bank
              </div>
              <div className="self-stretch bg-gray-100 border-gainsboro border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[18px] pb-5 pl-5 pr-7 max-w-full gap-5 z-[1]">
                <div className="h-[60px] w-[688px] relative bg-gray-100 border-gainsboro border-[1px] border-solid box-border hidden max-w-full" />
                <div className="w-[264px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <div className="self-stretch relative text-xs capitalize font-nunito-sans text-grey-2 text-left z-[2]">
                    Choose Your Bank Account
                  </div>
                </div>
                <img
                  className="h-[15px] w-[15px] relative z-[5]"
                  alt=""
                  src="/icon--arrow--chevron--down.svg"
                />
              </div>
            </div>
            <div className="w-[688px] flex flex-row items-start justify-start flex-wrap content-start gap-12 max-w-full mq750:gap-6">
              <div className="flex-1 border-red border-[1px] border-solid box-border flex flex-row items-start justify-start py-[11px] px-0 min-w-[208px] z-[1]">
                <div className="h-12 w-80 relative border-red border-[1px] border-solid box-border hidden" />
                <b className="flex-1 relative text-base font-nunito-sans text-red text-center z-[1]">
                  Cancel
                </b>
              </div>
              <button className="cursor-pointer [border:none] py-[13px] px-0 bg-secondary-blue flex-1 flex flex-row items-start justify-start box-border min-w-[208px] z-[1] hover:bg-teal">
                <div className="h-12 w-80 relative bg-secondary-blue hidden" />
                <b className="flex-1 relative text-base font-nunito-sans text-white text-center z-[1]">
                  Submit
                </b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

BalancePanel.propTypes = {
  className: PropTypes.string,
};

export default BalancePanel;