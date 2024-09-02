import NavigasiSeller from "@/components/seller/sidebar/NavigasiSeller";
import FrameComponent from "@/components/seller/Header/Header";
import bank from "@/assets/seller/bank-BNI.png";
import addBank from "@/assets/seller/add-bank.png";


// export default MyBankAccount;
const MyBankAccount = () => {
  return (
    <div
      className={`w-full bg-whitesmoke-100 max-w-full h-[1304px] overflow-hidden text-left text-base text-white font-nunito-sans `}
    >
      <FrameComponent />
      <div className="absolute top-[152px] left-[351px] bg-white border-primary-grey border-[1px] border-solid box-border w-[1040px] h-[343px]" />
      <img
        className="absolute top-[253px] left-[381px] w-[300px] h-[210px]"
        alt=""
        src={addBank}
      />
      <div className="absolute top-[222.8px] left-[350.8px] border-primary-grey border-t-[0.5px] border-solid box-border w-[1040.5px] h-[0.5px]" />
      <div className="absolute top-[176px] left-[381px] text-5xl capitalize font-extrabold text-primary-black inline-block w-[234px]">
        My Bank Account
      </div>
      <NavigasiSeller />
      <div className="absolute top-[253px] left-[1060px] w-[300px] h-[210px] text-[10px]">
        <div className="absolute top-[0px] left-[0px] w-[300px] h-[150px]">
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[300px] h-[150px]" />
          <div className="absolute top-[27px] left-[190px] w-[90px] h-[21px]">
            <div className="absolute top-[0px] left-[0px] bg-primary-black w-[90px] h-[21px]" />
            <div className="absolute top-[4px] left-[13px] font-semibold">
              Main Account
            </div>
          </div>
          <img
            className="absolute h-[23.33%] w-[23.33%] top-[13.33%] right-[70%] bottom-[63.33%] left-[6.67%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={bank}
          />
          <div className="absolute top-[53.33%] left-[19.33%] text-11xl capitalize text-primary-black whitespace-pre-wrap">
            *** *** ***
          </div>
        </div>
        <div className="absolute top-[170px] left-[159px] w-[140px] h-10 text-center text-xs text-primary-black">
          <div className="absolute top-[0px] left-[0px] border-primary-black border-[1px] border-solid box-border w-[140px] h-10" />
          <b className="absolute top-[13.3px] left-[0px] inline-block w-[140px] h-[14.2px]">
            Edit Acccount
          </b>
        </div>
      </div>
      <div className="absolute top-[253px] left-[722px] w-[300px] h-[210px] text-center text-xs text-primary-black">
        <div className="absolute top-[170px] left-[0px] w-[140px] h-10 text-primary-bg">
          <div className="absolute top-[0px] left-[0px] bg-secondary-blue border-secondary-blue border-[0.5px] border-solid box-border w-[140px] h-10" />
          <b className="absolute top-[10.7px] left-[0px] flex items-center justify-center w-[140px] h-[18.7px]">
            Set as Main
          </b>
        </div>
        <div className="absolute top-[170px] left-[160px] w-[140px] h-10">
          <div className="absolute top-[0px] left-[0px] border-primary-black border-[1px] border-solid box-border w-[140px] h-10" />
          <b className="absolute top-[13.3px] left-[0px] inline-block w-[140px] h-[14.2px]">
            Edit Acccount
          </b>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[300px] h-[150px] text-left text-11xl">
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[300px] h-[150px]" />
          <div className="absolute h-[67.33%] w-[74%] top-[13.33%] right-[19.33%] bottom-[19.33%] left-[6.67%]">
            <img
              className="absolute h-[34.65%] w-[31.53%] top-[0%] right-[68.47%] bottom-[65.35%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={bank}
            />
            <div className="absolute top-[59.41%] left-[17.12%] capitalize whitespace-pre-wrap">
              *** *** ***
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBankAccount;
