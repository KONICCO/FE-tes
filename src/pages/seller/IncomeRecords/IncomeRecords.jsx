import FrameComponent from "@/components/seller/Header/Header";
import ContentContainer from "@/pages/seller/IncomeRecords/ContentContainer";
import NavigasiSeller from "@/components/seller/sidebar/NavigasiSeller";
const HistoryIncome = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent/>
      <main className="w-[1410px] h-[1178px] flex flex-row items-start justify-start pt-0 pb-[301px] pl-0 pr-5 box-border gap-[50px] max-w-full lg:pb-[196px] lg:box-border mq1050:pl-5 mq1050:box-border mq750:h-auto mq750:gap-[25px] mq750:pb-[127px] mq750:box-border">
        <NavigasiSeller />

        <ContentContainer />
      </main>
    </div>
  );
};

export default HistoryIncome;
