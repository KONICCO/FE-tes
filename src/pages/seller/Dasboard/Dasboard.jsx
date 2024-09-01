import FrameComponent from "@/pages/seller/Header/FrameComponent";
import NavigasiSeller from "@/pages/seller/sidebar/NavigasiSeller";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent />
      <main className="w-[1410px] h-[1172px] flex flex-row items-start justify-start pt-0 pb-[104px] pl-0 pr-5 box-border gap-[50px] max-w-full lg:pb-[68px] lg:box-border mq750:gap-[25px] mq750:pb-11 mq750:box-border mq1050:h-auto mq1050:pl-5 mq1050:box-border">
        <NavigasiSeller />
        <section className="flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-[calc(100%_-_350px)] shrink-0 text-left text-5xl text-primary-black font-nunito-sans lg:pt-8 lg:box-border mq750:pt-[21px] mq750:box-border mq1050:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[29px] pb-7 pl-[29px] pr-[31px] max-w-full shrink-0 gap-5 mq1050:flex-wrap">
              <div className="h-[152px] w-[1040px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden max-w-full" />
              <div className="w-[567px] flex flex-col items-start justify-start gap-[20.4px] max-w-full">
                <div className="relative font-extrabold z-[1] mq450:text-lgi">
                  Start Selling
                </div>
                <div className="self-stretch relative text-sm font-semibold text-black z-[1]">
                  Reach millions of customers of the worlds biggest marketplace
                  for gamers and geeks. Verify your account and become a seller
                  now!
                </div>
              </div>
              <div className="w-[250px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border text-center text-base text-white">
                <div className="self-stretch bg-secondary-blue flex flex-row items-start justify-start py-3.5 pl-0 pr-0.5 whitespace-nowrap z-[1]">
                  <div className="h-[50px] w-[250px] relative bg-secondary-blue hidden" />
                  <b className="flex-1 relative z-[1]">Seller Verification</b>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-end justify-start pt-[18px] px-0 pb-6 gap-[51.5px] max-w-full text-lg text-secondary-blue mq750:gap-[26px] mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="self-stretch h-[358px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden" />
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <b
                  className=" flex flex-row items-start justify-start py-0 px-[30px] box-border font-nunito-sans font-extrabold text-5xl text-primary-black"
                >My Dashboard</b>

                <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
              </div>
              
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[51px] pr-12 box-border max-w-full mq1050:pl-[25px] mq1050:pr-6 mq1050:box-border">
                <div className="flex-1 flex flex-col items-end justify-start gap-[50px] max-w-full mq750:gap-[25px]">
                  <div className="w-[907px] flex flex-row items-start justify-end py-0 px-[3px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between flex-wrap content-start py-0 pl-0 pr-px box-border max-w-full gap-5">
                      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[37px] gap-2.5">
                        <div className="flex flex-row items-start justify-start py-0 pl-[39px] pr-10">
                          <b className="relative inline-block min-w-[11px] z-[1]">
                            0
                          </b>
                        </div>
                        <div className="relative text-base font-semibold text-primary-black inline-block min-w-[90px] z-[1]">
                          Not yet paid
                        </div>
                      </div>
                      <div className="h-[50px] w-1 flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border">
                        <div className="w-[0.5px] flex-1 relative border-primary-grey border-r-[0.5px] border-solid box-border z-[1]" />
                      </div>
                      <div className="w-[117px] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border gap-2.5">
                        <div className="flex flex-row items-start justify-start py-0 pl-[52px] pr-[51px]">
                          <b className="relative inline-block min-w-[11px] z-[1]">
                            0
                          </b>
                        </div>
                        <div className="self-stretch relative text-base font-semibold text-primary-black text-center z-[1]">
                          <p className="m-0">{`Delivery Needs `}</p>
                          <p className="m-0">Process</p>
                        </div>
                      </div>
                      <div className="h-[50.5px] w-[0.5px] relative border-primary-grey border-r-[0.5px] border-solid box-border z-[1] mq750:w-full mq750:h-[0.5px]" />
                      <div className="flex flex-col items-start justify-start gap-2.5">
                        <div className="flex flex-row items-start justify-start py-0 pl-16 pr-[65px]">
                          <b className="relative inline-block min-w-[11px] z-[1]">
                            0
                          </b>
                        </div>
                        <div className="relative text-base font-semibold text-primary-black z-[1]">
                          Delivery Processed
                        </div>
                      </div>
                      <div className="h-[50.5px] w-[0.5px] relative border-primary-grey border-r-[0.5px] border-solid box-border z-[1] mq750:w-full mq750:h-[0.5px]" />
                      <div className="w-[127px] flex flex-col items-start justify-start gap-2.5">
                        <div className="flex flex-row items-start justify-start py-0 px-[58px]">
                          <b className="relative inline-block min-w-[11px] z-[1]">
                            0
                          </b>
                        </div>
                        <div className="self-stretch relative text-base font-semibold text-primary-black text-center z-[1]">
                          <p className="m-0">{`Awaiting Refund `}</p>
                          <p className="m-0">Response</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start py-0 pl-0 pr-0.5 gap-5">
                    <div className="w-[163px] flex flex-col items-start justify-start gap-2.5">
                      <div className="flex flex-row items-start justify-start py-0 px-[76px]">
                        <b className="relative inline-block min-w-[11px] z-[1]">
                          0
                        </b>
                      </div>
                      <div className="self-stretch relative text-base font-semibold text-primary-black text-center z-[1]">
                        <p className="m-0">{`Awaiting Cancellation `}</p>
                        <p className="m-0">Response</p>
                      </div>
                    </div>
                    <div className="h-[50.5px] w-[0.5px] relative border-primary-grey border-r-[0.5px] border-solid box-border z-[1] mq750:w-full mq750:h-[0.5px]" />
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <div className="flex flex-row items-start justify-start py-0 pl-[54px] pr-[55px]">
                        <b className="relative inline-block min-w-[11px] z-[1]">
                          0
                        </b>
                      </div>
                      <div className="relative text-base font-semibold text-primary-black inline-block min-w-[120px] z-[1]">
                        Blocked Product
                      </div>
                    </div>
                    <div className="h-[50px] w-[22px] flex flex-col items-start justify-start py-0 pl-0 pr-[21px] box-border">
                      <div className="w-[0.5px] flex-1 relative border-primary-grey border-r-[0.5px] border-solid box-border z-[1]" />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-2.5">
                      <div className="flex flex-row items-start justify-start py-0 pl-[43px] pr-[45px]">
                        <b className="relative inline-block min-w-[11px] z-[1]">
                          0
                        </b>
                      </div>
                      <div className="relative text-base font-semibold text-primary-black inline-block min-w-[99px] z-[1]">
                        Consumables
                      </div>
                    </div>
                    <div className="h-[50.5px] w-[0.5px] relative border-primary-grey border-r-[0.5px] border-solid box-border z-[1] mq750:w-full mq750:h-[0.5px]" />
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <div className="flex flex-row items-start justify-start py-0 pl-[59px] pr-[60px]">
                        <b className="relative inline-block min-w-[11px] z-[1]">
                          0
                        </b>
                      </div>
                      <div className="relative text-base font-semibold text-primary-black text-center z-[1]">
                        Promo Will Come
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white border-primary-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-[37px] relative gap-[29.8px] max-w-full mq450:pb-6 mq450:box-border">
              <div className="self-stretch h-[449px] relative bg-white border-primary-grey border-[1px] border-solid box-border hidden z-[0]" />
              <div className="w-[825.1px] h-[158.6px] absolute !m-[0] right-[86.9px] bottom-[86.7px]">
                <img
                  className="absolute top-[24px] left-[0.5px] w-[824.6px] h-[134.6px] z-[2]"
                  alt=""
                  src="/path-2.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[824px] h-[145.7px]">
                  <img
                    className="absolute top-[139.3px] left-[0px] w-px h-px z-[3]"
                    loading="lazy"
                    alt=""
                    src="/path-3-1.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0.5px] w-full h-full z-[4]"
                    loading="lazy"
                    alt=""
                    src="/path-4.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[30px]">
                <div className="relative leading-[22px] font-extrabold inline-block min-w-[127px] z-[1] mq450:text-lgi mq450:leading-[18px]">
                  My Income
                </div>
              </div>
              <div className="self-stretch h-[0.5px] relative border-primary-grey border-t-[0.5px] border-solid box-border z-[1]" />
              <div className="w-[411px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-xs">
                <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
                  <div className="w-[254px] flex flex-row items-start justify-between gap-5">
                    <div className="relative leading-[13px] font-semibold inline-block min-w-[67px] z-[1]">
                      This Month
                    </div>
                    <div className="relative leading-[13px] font-semibold inline-block min-w-[67px] z-[1]">
                      Last Month
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[26px] text-5xl text-secondary-blue">
                    <b className="flex-1 relative leading-[29px] inline-block min-w-[107px] whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[23px]">
                      Rp 5,000,000
                    </b>
                    <b className="flex-1 relative leading-[29px] inline-block text-primary-black min-w-[107px] whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[23px]">
                      Rp 3,000,000
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[30px] pr-8 box-border max-w-full text-2xs text-primary-gray2 font-montserrat">
                <div className="flex-1 flex flex-col items-start justify-start gap-[25.6px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[9.9px] max-w-full">
                    <div className="relative leading-[13px] inline-block min-w-[30px] shrink-0 z-[1]">
                      49.0k
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.4px] px-0 pb-0 box-border min-w-[610px] max-w-full mq750:min-w-full">
                      <img
                        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/path.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[8.9px] max-w-full">
                    <div className="relative leading-[13px] inline-block min-w-[31px] shrink-0 z-[1]">
                      48.0k
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[610px] max-w-full mq750:min-w-full">
                      <img
                        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 z-[1]"
                        alt=""
                        src="/path-copy.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[10.9px] max-w-full">
                    <div className="relative leading-[13px] inline-block min-w-[29px] shrink-0 z-[1]">
                      47.0k
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[610px] max-w-full mq750:min-w-full">
                      <img
                        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 z-[1]"
                        alt=""
                        src="/path-copy-2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[8.9px] max-w-full">
                    <div className="relative leading-[13px] inline-block min-w-[31px] shrink-0 z-[1]">
                      46.0k
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[610px] max-w-full mq750:min-w-full">
                      <img
                        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 z-[1]"
                        alt=""
                        src="/path-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[9.9px] max-w-full">
                    <div className="relative leading-[13px] inline-block min-w-[30px] shrink-0 z-[1]">
                      45.0k
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[610px] max-w-full mq750:min-w-full">
                      <img
                        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 z-[1]"
                        alt=""
                        src="/path-copy-4.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[8.9px] max-w-full">
                    <div className="relative leading-[13px] inline-block min-w-[31px] z-[1]">
                      44.0k
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[610px] max-w-full mq750:min-w-full">
                      <footer className="self-stretch flex flex-col items-end justify-start gap-2.5 max-w-full text-left text-sm text-primary-gray2 font-montserrat">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                          loading="lazy"
                          alt=""
                          src="/path-copy-5.svg"
                        />
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[51px] pr-[50px] box-border max-w-full mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
                          <div className="flex-1 flex flex-row items-start justify-between py-0 pl-0 pr-[5px] box-border max-w-full gap-5 mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                              <div className="relative leading-[17px] inline-block min-w-[15px] z-[1]">
                                01
                              </div>
                            </div>
                            <div className="relative leading-[17px] inline-block min-w-[18px] z-[1] mq450:w-full mq450:h-[18px]">
                              05
                            </div>
                            <div className="relative leading-[17px] inline-block min-w-[18px] z-[1] mq450:w-full mq450:h-[18px]">
                              09
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2">
                              <div className="relative leading-[17px] inline-block min-w-[13px] z-[1]">
                                13
                              </div>
                            </div>
                            <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[14px] z-[1] mq450:w-full mq450:h-3.5">
                              17
                            </a>
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                              <div className="relative leading-[17px] inline-block min-w-[14px] z-[1]">
                                21
                              </div>
                            </div>
                            <div className="relative leading-[17px] inline-block min-w-[17px] z-[1] mq450:w-full mq450:h-[17px]">
                              26
                            </div>
                            <div className="relative leading-[17px] inline-block min-w-[13px] z-[1] mq450:w-full mq450:h-[13px]">
                              31
                            </div>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Dashboard;
