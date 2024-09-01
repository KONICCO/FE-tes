import NavigasiSeller from "@/pages/seller/sidebar/NavigasiSeller";
import FrameComponent from "@/pages/seller/Header/FrameComponent";
import left from "@/assets/seller/left.png";
import right from "@/assets/seller/right.png";
import bank from "@/assets/seller/bank-BNI.png";
import date from "@/assets/seller/date.png";
import download from "@/assets/seller/download.png";

// terjadi ketika belum membuat akun bank
const TambahBankAkunSebelumLihatSelling = () => {
  return (
    <main className="w-[1170px] h-[1439px] flex flex-row items-start justify-start pt-0 pb-[1233px] pl-0 pr-5 box-border gap-48 max-w-full text-center text-base text-gray font-nunito-sans lg:gap-24 lg:pb-[521px] lg:box-border mq750:gap-12 mq750:pl-5 mq750:pb-[339px] mq750:box-border mq450:gap-6">
      <NavigasiSeller />

      <div className="flex-1 flex flex-col items-start justify-start pt-[110px] px-0 pb-0 box-border max-w-[calc(100%_-_492px)] shrink-0 mq750:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[29px]">
          <div className="self-stretch relative tracking-[0.2px] font-semibold  text-black">
            Silahkan tambahkan akun bank sebelum melihat dashboard selling
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-sm text-white">
            <div className="w-[226px] flex flex-row items-start justify-start py-[13px] px-0 box-border relative whitespace-nowrap">
              <div className="h-full w-full absolute !m-[0] top-[45px] right-[-226px] bottom-[-45px] left-[226px] bg-secondary-blue [transform:_rotate(180deg)] [transform-origin:0_0]" />
              <b className="flex-1 relative capitalize z-[1]">
                Ke Menu Bank Account
              </b>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const DashboardSellingHandlingB = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent />
      <WithdrawBalance />
    </div>
  );
};

export default DashboardSellingHandlingB;

//terjadi ketika sudah membuat akun bank
const DashboardSellingListDana = () => {
  return (
    <main className="w-[1411px] h-[1439px] flex flex-row items-start justify-start pt-0 pb-[58px] pl-0 pr-5 box-border gap-[50px] max-w-full lg:pb-[38px] lg:box-border mq750:gap-[25px] mq750:pb-[25px] mq750:box-border mq1050:h-auto mq1050:pl-5 mq1050:box-border">
      <NavigasiSeller />
      <section className="flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-[calc(100%_-_350px)] text-center text-5xl text-primary-black font-nunito-sans lg:pt-8 lg:box-border mq750:pt-[21px] mq750:box-border mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[50px] max-w-full mq750:gap-[25px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-left">
            <div className="flex-1 flex flex-row items-start justify-start gap-5 max-w-full mq1050:flex-wrap">
              <div className="flex-1 bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[22px] px-[29px] pb-7 gap-[30px] min-w-[437px] max-w-full mq750:gap-[15px] mq750:min-w-full">
                <div className="w-[672px] h-[326px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
                    <div className="w-[234px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                      <h3 className="m-0 self-stretch relative text-inherit capitalize font-extrabold font-[inherit] z-[1] mq450:text-lgi">
                        Income Information
                      </h3>
                    </div>
                    <div className="w-[144.8px] flex flex-row items-start justify-start py-[13px] px-0 box-border relative whitespace-nowrap z-[1] text-center text-sm text-white">
                      <div className="h-full w-full absolute !m-[0] top-[45px] right-[-144.8px] bottom-[-45px] left-[144.8px] bg-secondary-blue [transform:_rotate(180deg)] [transform-origin:0_0]" />
                      <b className="flex-1 relative capitalize shrink-0 z-[1]">{`withdraw `}</b>
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-start gap-[29.8px] max-w-full text-lg mq750:flex-wrap">
                    <div className="w-[221px] flex flex-col items-start justify-start gap-5">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                        <b className="self-stretch relative capitalize z-[1]">
                          Balance will be released
                        </b>
                        <div className="w-[102px] relative text-base font-semibold text-primary-gray2 inline-block z-[1]">
                          Total
                        </div>
                      </div>
                      <div className="relative text-5xl font-extrabold text-secondary-blue whitespace-nowrap z-[1] mq450:text-lgi">
                        Rp 6.500.500
                      </div>
                    </div>
                    <div className="h-[116.5px] w-[0.5px] relative border-primary-grey border-r-[0.5px] border-solid box-border z-[1] mq750:w-full mq750:h-[0.5px]" />
                    <div className="flex flex-col items-start justify-start gap-[18.5px]">
                      <b className="relative capitalize z-[1]">
                        Balance have been released
                      </b>
                      <div className="w-[119px] relative text-base font-semibold text-primary-gray2 inline-block z-[1]">
                        Total
                      </div>
                      <div className="relative text-5xl font-extrabold whitespace-nowrap z-[1] mq450:text-lgi">
                        Rp 10.000.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-gray-6 flex flex-row items-end justify-between py-4 px-5 box-border max-w-full gap-5 z-[1] text-base mq750:flex-wrap">
                  <div className="h-[55px] w-[612px] relative bg-gray-6 hidden max-w-full" />
                  <div className="flex flex-row items-start justify-start gap-3.5 mq450:flex-wrap">
                    <div className="relative font-semibold inline-block min-w-[128px] z-[1]">
                      My Bank Account
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-10 h-5 relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src={bank}
                      />
                    </div>
                    <div className="relative capitalize font-semibold inline-block min-w-[28px] z-[1]">
                      BNI
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative capitalize font-semibold inline-block min-w-[74px] z-[1]">
                        *** *** ***
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[3px] text-secondary-blue">
                    <div className="relative capitalize font-semibold inline-block min-w-[121px] z-[1]">
                      Change Account
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative object-contain z-[1] filter brightness-0 invert-0"
                        loading="lazy"
                        alt=""
                        src={right}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[347px] bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-7 px-[29px] pb-[18px] gap-7 min-w-[347px] max-w-full mq450:min-w-full mq1050:flex-1">
                <div className="w-[347px] h-[326px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start gap-5">
                  <h3 className="m-0 w-[213px] relative text-inherit capitalize font-extrabold font-[inherit] inline-block z-[1] mq450:text-lgi">
                    income records
                  </h3>
                  <div className="self-stretch flex flex-row items-end justify-between gap-5 text-sm text-primary-gray2">
                    <div className="w-[185px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                        <div className="w-[163px] relative font-semibold inline-block z-[1]">
                          20 May 2020
                        </div>
                        <div className="self-stretch relative font-semibold z-[1]">
                          20 April 2020
                        </div>
                        <div className="self-stretch relative font-semibold z-[1]">
                          20 Maret 2020
                        </div>
                        <div className="self-stretch relative font-semibold whitespace-pre-wrap z-[1]">
                          20 Feb 2020
                        </div>
                        <div className="self-stretch relative font-semibold z-[1]">
                          20 January 2020
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src={download}
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src={download}
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src={download}
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src={download}
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src={download}
                      />
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[9px] pl-[73px] pr-[72px] bg-[transparent] self-stretch flex flex-row items-start justify-start relative whitespace-nowrap z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="h-full w-full absolute !m-[0] top-[35px] right-[-287px] bottom-[-35px] left-[287px] bg-secondary-blue [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <b className="flex-1 relative text-xs capitalize font-nunito-sans text-white text-center z-[1]">
                    See More
                  </b>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start py-7 px-[29px] gap-[30px] max-w-full">
            <div className="w-[1040px] h-[168px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden max-w-full" />
            <h3 className="m-0 h-[33px] relative text-inherit font-extrabold font-[inherit] inline-block z-[1] mq450:text-lgi">
              <span className="uppercase">T</span>
              <span className="capitalize">ransaction</span>
            </h3>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-sm mq1050:flex-wrap mq1050:justify-center">
              <div className="w-[536px] flex flex-row items-start justify-center gap-3.5 max-w-full mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-left text-base">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[43px] z-[1]">
                    Date :
                  </a>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border min-w-[218px] max-w-full text-primary-gray2">
                  <div className="self-stretch bg-gray border-primary-grey border-[1px] border-solid overflow-x-auto flex flex-row items-start justify-start pt-2 px-[15px] pb-[9px] gap-[21px] z-[1]">
                    <div className="h-[45px] w-[328px] relative bg-gray border-primary-grey border-[1px] border-solid box-border shrink-0 hidden" />
                    <div className="w-[127px] shrink-0 flex flex-row items-start justify-start py-0 pl-0 pr-1.5 box-border gap-1.5">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
                        alt=""
                        src={date}
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="self-stretch relative z-[2]">
                          02/06/2020
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-primary-black">
                      <div className="relative inline-block min-w-[6px] z-[2]">
                        -
                      </div>
                    </div>
                    <div className="w-[121px] shrink-0 flex flex-row items-start justify-start gap-1.5">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
                        alt=""
                        src={date}
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="self-stretch relative z-[2]">
                          02/06/2020
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[130px] flex flex-row items-start justify-start py-[13px] px-[9px] box-border relative z-[1] text-white">
                  <div className="h-full w-full absolute !m-[0] top-[45px] right-[-130px] bottom-[-45px] left-[130px] bg-primary-black [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <b className="flex-1 relative capitalize z-[1]">Filter</b>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-3 px-[22px] pb-3.5 bg-[transparent] w-[150px] flex flex-row items-start justify-start box-border relative z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[45px] right-[-150px] bottom-[-45px] left-[150px] bg-secondary-blue [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <b className="flex-1 relative text-sm capitalize font-nunito-sans text-white text-center z-[1]">
                  export
                </b>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base text-secondary-blue">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
              <div className="flex-1 bg-white border-primary-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[21px] px-[38px] pb-5 gap-[76px] max-w-full z-[2] mq450:gap-[19px] mq750:gap-[38px] mq750:flex-wrap">
                <div className="h-[67px] w-[1040px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden max-w-full" />
                <b className="relative capitalize z-[3]">
                  Order will be released
                </b>
                <div className="relative capitalize font-semibold text-primary-gray2 text-left z-[3]">
                  Order have been released
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start py-0 pl-px pr-0 gap-[19.8px] max-w-full mt-[-2px] text-left text-primary-black">
              <div className="self-stretch h-[672px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden" />
              <div className="self-stretch bg-primary-black flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[19.5px] max-w-full z-[1] text-white">
                <div className="self-stretch h-[70px] relative bg-primary-black hidden" />
                <div className="self-stretch h-[5.5px] relative">
                  <div className="absolute top-[0px] left-[0px] bg-secondary-blue w-[233px] h-[5px] z-[3]" />
                  <div className="absolute top-[5px] left-[0px] border-primary-grey border-t-[0.5px] border-solid box-border w-[1040.5px] h-[0.5px] z-[4]" />
                </div>
                <div className="w-[972px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
                    <div className="w-[129px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                      <div className="relative font-semibold inline-block min-w-[106px] z-[2]">
                        Order Number
                      </div>
                    </div>
                    <div className="w-[186px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                      <div className="relative font-semibold inline-block min-w-[105px] z-[2]">
                        Product Name
                      </div>
                    </div>
                    <div className="relative font-semibold inline-block min-w-[90px] z-[2]">
                      Buyer Name
                    </div>
                    <div className="w-[83px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                      <div className="relative font-semibold inline-block min-w-[35px] z-[2]">
                        Date
                      </div>
                    </div>
                    <div className="w-[89px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                      <div className="relative font-semibold inline-block min-w-[48px] z-[2]">
                        Status
                      </div>
                    </div>
                    <div className="relative font-semibold inline-block min-w-[37px] z-[2]">
                      Total
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-[34px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-1">
                    <div className="relative tracking-[0.2px] font-semibold z-[1]">
                      INV/20200720/XII
                    </div>
                  </div>
                  <div className="w-[201px] flex flex-col items-start justify-start py-0 pl-0 pr-[19px] box-border">
                    <div className="self-stretch relative font-extrabold z-[1]">
                      Minecraft: Windows 10 Edition (PC) - Microsoft Key -
                      GLOBAL
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-5">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[85px] z-[1]">
                      anna_belle
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[98px] z-[1]">
                      2020-07-24
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[5px]">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[99px] z-[1]">
                      On Progress
                    </div>
                  </div>
                  <div className="w-[99px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold whitespace-nowrap z-[1]">
                      Rp 350.000
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-[34px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-10 max-w-full mq750:gap-5 mq1050:flex-wrap">
                  <div className="w-[149px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                      INV/20200720/XII
                    </div>
                  </div>
                  <div className="w-[206px] relative font-extrabold inline-block shrink-0 z-[1]">
                    Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL
                  </div>
                  <div className="w-[110px] flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-5 box-border">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[85px] z-[1]">
                      john_belle
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-[5px]">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[98px] z-[1]">
                      2020-07-24
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-2.5">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[99px] z-[1]">
                      On Progress
                    </div>
                  </div>
                  <div className="w-[99px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold whitespace-nowrap z-[1]">
                      Rp 350.000
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-[34px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-1">
                    <div className="relative tracking-[0.2px] font-semibold z-[1]">
                      INV/20200720/XII
                    </div>
                  </div>
                  <div className="w-[201px] flex flex-col items-start justify-start py-0 pl-0 pr-[19px] box-border">
                    <div className="self-stretch relative font-extrabold z-[1]">
                      Minecraft: Windows 10 Edition (PC) - Microsoft Key -
                      GLOBAL
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-5">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[85px] z-[1]">
                      anna_belle
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[98px] z-[1]">
                      2020-07-24
                    </div>
                  </div>
                  <div className="w-[104px] flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[5px] box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                      Rejected
                    </div>
                  </div>
                  <div className="w-[99px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold whitespace-nowrap z-[1]">
                      Rp 350.000
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-[34px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-10 max-w-full mq750:gap-5 mq1050:flex-wrap">
                  <div className="w-[149px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                      INV/20200720/XII
                    </div>
                  </div>
                  <div className="w-[206px] relative font-extrabold inline-block shrink-0 z-[1]">
                    Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL
                  </div>
                  <div className="w-[110px] flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-5 box-border">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[85px] z-[1]">
                      john_belle
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-[5px]">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[98px] z-[1]">
                      2020-07-24
                    </div>
                  </div>
                  <div className="w-[109px] flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-2.5 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                      Rejected
                    </div>
                  </div>
                  <div className="w-[99px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold whitespace-nowrap z-[1]">
                      Rp 350.000
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-[34px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-10 max-w-full mq750:gap-5 mq1050:flex-wrap">
                  <div className="w-[149px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                      INV/20200720/XII
                    </div>
                  </div>
                  <div className="w-[206px] relative font-extrabold inline-block shrink-0 z-[1]">
                    Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL
                  </div>
                  <div className="w-[110px] flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-5 box-border">
                    <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[85px] z-[1]">
                      john_belle
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-[5px]">
                    <div className="relative tracking-[0.2px] leading-[16px] font-semibold inline-block min-w-[98px] z-[1]">
                      2020-07-24
                    </div>
                  </div>
                  <div className="w-[109px] flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-2.5 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold z-[1]">
                      Waiting Confirmation
                    </div>
                  </div>
                  <div className="w-[99px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <div className="self-stretch relative tracking-[0.2px] font-semibold whitespace-nowrap z-[1]">
                      Rp 350.000
                    </div>
                  </div>
                </div>
              </div>
              <footer className="self-stretch bg-primary-black border-whitesmoke-200 border-[0.5px] border-solid box-border flex flex-row items-start justify-between py-[19px] pl-[30px] pr-[50px] max-w-full gap-5 z-[1] text-left text-base text-white font-nunito-sans mq750:flex-wrap mq1050:pr-[25px] mq1050:box-border">
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
                      src={left}
                    />
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
                      src={right}
                    />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

//terjadi ketika melakukan masuk ke withdraw
const WithdrawBalance = () => {
  return (
    <main className="w-[1410px] h-[1391px] flex flex-row items-start justify-start pt-0 pb-[74px] pl-0 pr-5 box-border gap-[50px] max-w-full lg:pb-12 lg:box-border mq750:gap-[25px] mq750:pb-[31px] mq750:box-border mq1050:h-auto mq1050:pl-5 mq1050:box-border">
      <NavigasiSeller />
      <section className="flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-[calc(100%_-_350px)] shrink-0 text-left text-5xl text-primary-black font-nunito-sans lg:pt-8 lg:box-border mq750:pt-[21px] mq750:box-border mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq750:gap-[18px] mq1050:gap-9">
          <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-7 px-0 pb-12 gap-[29.8px] max-w-full mq750:pt-5 mq750:pb-[31px] mq750:box-border">
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
                          src={bank}
                        />
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
                        src="/icon--arrow--chevron--down.svg"
                      />
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
                      type="text"
                    />
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
          </div>
          <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start gap-[34px] max-w-full text-base text-white mq750:gap-[17px]">
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
                    src={left}
                  />
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
                    src={right}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
