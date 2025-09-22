import "dayjs/locale/zh-tw";
import TimeComponent from "./TimeComponent";
import ButtonContainer from "./ButtonContainer";
import MainImage from "./MainImage";
const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-7">
      <h1 className="text-h1 font-bold">進出貨管理系統</h1>
      <MainImage />
      <TimeComponent />
      <ButtonContainer />
    </div>
  );
};

export default Home;
