export type Time = {
  year: string;
  month: string;
  date: string;
  week: string;
  hour?: number;
  minute?: number;
  time?: string;
};

export const INITIAL_TIME: Time = {
  year: "",
  month: "",
  date: "",
  week: "",
  hour: 0,
  minute: 0,
};
