import { CreateInbound } from "../../../type";

const localStorageData = localStorage.getItem("createInbound");
let data: CreateInbound[] = [];

const getCreateInboundData = () => {
if (localStorageData) {
  const formateData = JSON.parse(localStorageData);
    data = formateData as CreateInbound[];
  }
  return data;
}


export { getCreateInboundData };
