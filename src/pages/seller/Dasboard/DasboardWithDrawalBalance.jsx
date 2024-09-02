import NavigasiSeller from "@/components/seller/sidebar/NavigasiSeller";
import FrameComponent from "@/components/seller/Header/Header";
import left from "@/assets/seller/left.png";
import right from "@/assets/seller/right.png";
import bank from "@/assets/seller/bank-BNI.png";
const DasboardWithDrawalBalance = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent />
      <WithdrawBalance />
    </div>
  );
};

export default DasboardWithDrawalBalance;

const WithdrawBalance = () => {
  return (
    <main className="w-[1410px] h-[1391px] flex flex-row items-start justify-start pt-0 pb-[74px] pl-0 pr-5 box-border gap-[50px] max-w-full lg:pb-12 lg:box-border mq750:gap-[25px] mq750:pb-[31px] mq750:box-border mq1050:h-auto mq1050:pl-5 mq1050:box-border">
      <NavigasiSeller />
      <section className="flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-[calc(100%_-_350px)] shrink-0 text-left text-5xl text-primary-black font-nunito-sans lg:pt-8 lg:box-border mq750:pt-[21px] mq750:box-border mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq750:gap-[18px] mq1050:gap-9">
          {InputDrawalBalance()}
          {BalanceContent()}
        </div>
      </section>
    </main>
  );

  function BalanceContent() {
    return <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start gap-[34px] max-w-full text-base text-white mq750:gap-[17px]">
      <div className="self-stretch h-[672px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden" />
      <div className="self-stretch bg-primary-black overflow-x-auto flex flex-row items-start justify-between py-6 pl-[29px] pr-[81px] gap-5 z-[1] mq1050:pr-10 mq1050:box-border">
        <div className="h-[70px] w-[1038px] relative bg-primary-black shrink-0 hidden" />
        <div className="w-[188px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
          <div className="relative capitalize font-semibold inline-block min-w-[100px] z-[2]">
            No Withdraw
          </div>
        </div>
        <div className="w-[102px] relative capitalize font-semibold text-center inline-block min-w-[102px] z-[2]">
          Bank Account
        </div>
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3">
          <div className="relative capitalize font-semibold inline-block min-w-[100px] z-[2]">
            Request Date
          </div>
        </div>
        <div className="w-[122px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
          <div className="relative capitalize font-semibold inline-block min-w-[73px] z-[2]">
            Ammount
          </div>
        </div>
        <div className="relative font-semibold inline-block min-w-[48px] z-[2]">
          Status
        </div>
      </div>
      <div className="w-[1022px] flex flex-row items-start justify-start pt-0 px-[29px] pb-[5px] box-border max-w-full text-primary-black">
        <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-[57px] max-w-full mq750:gap-7">
          <div className="relative tracking-[0.2px] font-semibold z-[1]">
            INV-20200420-5f50930-001
          </div>
          <div className="flex-1 flex flex-row items-end justify-start gap-8 min-w-[443px] max-w-full mq750:gap-4 mq750:flex-wrap mq750:min-w-full">
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[31px] text-center">
              <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[122px] z-[1]">
                BNI 123 *** 123
              </div>
            </div>
            <div className="flex-1 relative tracking-[0.2px] font-semibold inline-block min-w-[110px] z-[1]">
              30 Apr 2020
            </div>
            <div className="flex-[0.878] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[107px] mq450:flex-1">
              <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center whitespace-nowrap z-[1]">
                Rp 2.000.000
              </div>
            </div>
            <div className="w-[99px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
              <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                Invoiced
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[3px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.5px] box-border max-w-full">
        <div className="self-stretch flex-1 relative border-primary-grey border-t-[0.5px] border-solid box-border max-w-full z-[1]" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[31.5px] max-w-full text-primary-black mq750:gap-4">
        <div className="w-[1022px] flex flex-row items-start justify-start pt-0 px-[29px] pb-[7.5px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-[57px] max-w-full mq750:gap-7">
            <div className="relative tracking-[0.2px] font-semibold z-[1]">
              INV-20200420-5f50930-001
            </div>
            <div className="flex-1 flex flex-row items-end justify-start gap-[30px] min-w-[443px] max-w-full mq750:flex-wrap mq750:min-w-full">
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[35px] text-center">
                <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[122px] z-[1]">
                  BNI 123 *** 123
                </div>
              </div>
              <div className="flex-1 relative tracking-[0.2px] font-semibold inline-block min-w-[110px] z-[1]">
                30 Apr 2020
              </div>
              <div className="flex-[0.8795] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[110px] mq450:flex-1">
                <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center whitespace-nowrap z-[1]">
                  Rp 2.000.000
                </div>
              </div>
              <div className="w-[99px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border">
                <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                  Invoiced
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[38.2px] max-w-full mq750:gap-[19px]">
          <div className="w-[1022px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-[57px] max-w-full mq750:gap-7">
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                INV-20200420-5f50930-001
              </div>
              <div className="flex-1 flex flex-row items-end justify-start gap-[30px] min-w-[443px] max-w-full mq750:flex-wrap mq750:min-w-full">
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[35px] text-center">
                  <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[122px] z-[1]">
                    BNI 123 *** 123
                  </div>
                </div>
                <div className="flex-1 relative tracking-[0.2px] font-semibold inline-block min-w-[110px] z-[1]">
                  30 Apr 2020
                </div>
                <div className="flex-[0.8795] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[110px] mq450:flex-1">
                  <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center whitespace-nowrap z-[1]">
                    Rp 2.000.000
                  </div>
                </div>
                <div className="w-[99px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
                  <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                    Rejected
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
          <div className="w-[1022px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-[57px] max-w-full mq750:gap-7">
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                INV-20200420-5f50930-001
              </div>
              <div className="flex-1 flex flex-row items-end justify-start gap-[30px] min-w-[443px] max-w-full mq750:flex-wrap mq750:min-w-full">
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[35px] text-center">
                  <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[122px] z-[1]">
                    BNI 123 *** 123
                  </div>
                </div>
                <div className="flex-1 relative tracking-[0.2px] font-semibold inline-block min-w-[110px] z-[1]">
                  30 Apr 2020
                </div>
                <div className="flex-[0.8795] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[110px] mq450:flex-1">
                  <div className="w-[113px] relative tracking-[0.2px] font-semibold flex items-center whitespace-nowrap z-[1]">
                    Rp 2.000.000
                  </div>
                </div>
                <div className="w-[99px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border">
                  <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                    Rejected
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-3.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-[30px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[164px]">
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                INV-20200420-5f50930-001
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[35px] text-center">
              <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[122px] z-[1]">
                BNI 123 *** 123
              </div>
            </div>
            <div className="w-[169px] relative tracking-[0.2px] font-semibold flex items-center shrink-0 z-[1]">
              30 Apr 2020
            </div>
            <div className="w-[135px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
              <div className="self-stretch relative tracking-[0.2px] font-semibold whitespace-nowrap z-[1]">
                Rp 2.000.000
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
              <div className="relative tracking-[0.2px] font-semibold z-[1]">
                Waiting Confirmation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-black border-whitesmoke-200 border-[0.5px] border-solid box-border flex flex-row items-start justify-between py-[19px] pl-[30px] pr-[50px] max-w-full gap-5 z-[1] mq750:flex-wrap mq1050:pr-[25px] mq1050:box-border">
        <div className="h-[0.5px] w-[1038.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border hidden max-w-full" />
        <div className="h-[70px] w-[1039px] relative bg-primary-black border-whitesmoke-200 border-[0.5px] border-solid box-border hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="relative inline-block min-w-[68px] z-[1]">
            <span className="font-semibold">{`1-5 `}</span>
            <span className="font-light">of</span>
            <span className="font-semibold"> 60</span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-4 h-4 relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src={left} />
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative uppercase font-semibold inline-block min-w-[10px] z-[1]">
              1
            </div>
          </div>
          <div className="bg-secondary-blue flex flex-row items-start justify-start py-1 px-2.5 z-[1]">
            <div className="h-[30px] w-[30px] relative bg-secondary-blue hidden" />
            <div className="relative uppercase font-semibold inline-block min-w-[10px] z-[1]">
              2
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative uppercase font-semibold inline-block min-w-[10px] z-[1]">
              3
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative uppercase font-semibold inline-block min-w-[10px] z-[1]">
              4
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative uppercase font-semibold inline-block min-w-[10px] z-[1]">
              5
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-4 h-4 relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src={right} />
          </div>
        </div>
      </div>
    </div>;
  }
};
function InputDrawalBalance() {
  return <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-7 px-0 pb-12 gap-[29.8px] max-w-full mq750:pt-5 mq750:pb-[31px] mq750:box-border">
    <div className="self-stretch h-[523px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden" />
    <div className="flex flex-row items-start justify-start py-0 px-[30px]">
      <h3 className="m-0 relative text-inherit font-extrabold font-[inherit] z-[1] mq450:text-lgi">
        Withdrawal Balance
      </h3>
    </div>
    <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
    <div className="w-[1019.1px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-base">
      <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[25px] max-w-full">
        <div className="w-[234px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[88px]">
            <b className="w-[147px] relative inline-block z-[1]">
              Bank Account
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[69px]">
              <b className="relative capitalize z-[1]">
                withdrawal amount
              </b>
              <b className="self-stretch relative capitalize z-[1]">
                transfer amount to the bank
              </b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px] min-w-[455px] max-w-full text-primary-gray2 mq750:gap-[25px] mq750:min-w-full">
          <div className="self-stretch bg-gray border-gainsboro border-[1px] border-solid box-border flex flex-row items-start justify-between pt-2.5 pb-[11px] pl-5 pr-[31px] max-w-full gap-5 z-[1]">
            <div className="h-[60px] w-[700px] relative bg-gray border-gainsboro border-[1px] border-solid box-border hidden max-w-full" />
            <div className="w-[203px] flex flex-row items-start justify-start gap-2">
              <div className="flex-[0.8974] flex flex-col items-start justify-start py-0 pl-0 pr-2">
                <img
                  className="self-stretch h-[35px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src={bank} />
              </div>
              <div className="w-[35px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[14px] capitalize z-[1]">
                  BNI
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[16px] capitalize inline-block min-w-[74px] z-[1]">
                  *** *** ***
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-[15px] h-[15px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/icon--arrow--chevron--down.svg" />
            </div>
          </div>
          <div className="self-stretch bg-gray border-gainsboro border-[1px] border-solid box-border flex flex-row items-start justify-start py-2 px-[21px] gap-[29.5px] max-w-full z-[1] text-sm mq450:flex-wrap">
            <div className="h-[60px] w-[700px] relative bg-gray border-gainsboro border-[1px] border-solid box-border hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="relative inline-block min-w-[18px] z-[1]">
                Rp
              </div>
            </div>
            <div className="h-[41px] w-px relative border-gainsboro border-r-[1px] border-solid box-border z-[1] mq450:w-full mq450:h-px" />
            <input
              className="w-[66px] [border:none] [outline:none] bg-[transparent] h-[30px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border font-nunito-sans text-sm text-primary-gray2"
              placeholder="1.000.000"
              type="text" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[58px] max-w-full text-secondary-blue mq750:gap-[29px]">
            <b className="w-[503px] relative inline-block whitespace-nowrap max-w-full z-[1]">
              Rp. 1.000.000
            </b>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <button className="cursor-pointer [border:none] py-3.5 px-5 bg-secondary-blue w-[388.1px] flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-teal">
                <div className="h-[50px] w-[388.1px] relative bg-secondary-blue hidden max-w-full" />
                <b className="w-[69.9px] relative text-base inline-block font-nunito-sans text-white text-center shrink-0 z-[1]">
                  Submit
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

