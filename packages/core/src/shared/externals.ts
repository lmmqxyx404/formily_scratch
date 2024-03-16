import { Form } from "../models/Form";
import { IFormProps } from "../types";

/** core核心概念，创建form */
const createForm = <T extends object = any>(options?: IFormProps<T>) => {
  return new Form(options);
};

export { createForm };
