import { UseFormRegister, FieldErrors, Control } from "react-hook-form";

export type FormDataType = {
  storeName: string;
  contactPerson?: string;
  landlinePhone?: string;
  mobilePhone?: string;
  address?: string;
};

export type FormComponentProps = {
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
  control?: Control<FormDataType>;
};
