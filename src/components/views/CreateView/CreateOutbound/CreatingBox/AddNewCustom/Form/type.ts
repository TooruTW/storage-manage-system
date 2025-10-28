import { UseFormRegister, FieldErrors, Control } from "react-hook-form";

export type FormDataType = {
  name: string;
  contact_person?: string;
  landline_phone?: string;
  mobile_phone?: string;
  address?: string;
};

export type FormComponentProps = {
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
  control?: Control<FormDataType>;
};
