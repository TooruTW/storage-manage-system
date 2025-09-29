import { Inventory } from "../type/dataType";

const FAKE_DATA: Inventory[] = [
  {productName: "商品1", unit: "個", quantity: "100", lastInboundDate: "2021-01-01"},
  {productName: "商品2", unit: "斤", quantity: "200", lastInboundDate: "2021-01-04"},
  {productName: "商品3", unit: "罐", quantity: "300", lastInboundDate: "2021-01-06"},
  {productName: "商品4", unit: "箱", quantity: "400", lastInboundDate: "2021-01-07"},
  {productName: "商品5", unit: "袋", quantity: "500", lastInboundDate: "2021-01-08"},
  {productName: "商品6", unit: "桶", quantity: "600", lastInboundDate: "2021-01-12"},
  {productName: "商品7", unit: "包", quantity: "700"  , lastInboundDate: "2021-01-17"},
  {productName: "商品8", unit: "盒", quantity: "800", lastInboundDate: "2021-01-25"},
  {productName: "商品9", unit: "瓶", quantity: "900", lastInboundDate: "2021-01-30"},
];

export { FAKE_DATA };
