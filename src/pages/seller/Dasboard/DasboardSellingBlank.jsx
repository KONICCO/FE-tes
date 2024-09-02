import NavigasiSeller from "@/components/seller/sidebar/NavigasiSeller";
import FrameComponent from "@/components/seller/Header/Header";

const DashboardSellingHandlingB = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent />
      <main className="w-[1170px] h-[1439px] flex flex-row items-start justify-start pt-0 pb-[1233px] pl-0 pr-5 box-border gap-48 max-w-full text-left text-lg text-grey-2 font-nunito-sans lg:gap-24 lg:pb-[521px] lg:box-border mq750:gap-12 mq750:pl-5 mq750:pb-[339px] mq750:box-border mq450:gap-6">
        <NavigasiSeller />
        {Kemenubank()}
      </main>
    </div>
  );

  function Kemenubank() {
    return (
      <div className="flex-1 flex flex-col items-start justify-start pt-[110px] px-0 pb-0 box-border max-w-[calc(100%_-_492px)] shrink-0 text-center text-base text-primary-black mq750:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[29px]">
          <div className="self-stretch relative tracking-[0.2px] font-semibold">
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
    );
  }
};

export default DashboardSellingHandlingB;
