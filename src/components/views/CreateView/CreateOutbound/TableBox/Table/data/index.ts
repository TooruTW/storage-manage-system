import { CreateOutbound } from "../../../type";

const localStorageData = localStorage.getItem("createOutbound");
let data: CreateOutbound[] = [];

const getData = () => {
if (localStorageData) {
  const formateData = JSON.parse(localStorageData);
    data = formateData as CreateOutbound[];
  }
  return data;
}


export { getData };
