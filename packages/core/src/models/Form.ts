import { uid } from "@bob/shared";
import { IFormProps } from "../types";

/** 创建form */
export class Form<ValueType extends object = any> {
  id: string;
  props: IFormProps<ValueType>;

  constructor(props: IFormProps<ValueType>) {
    this.initialize(props);
    // this.initialize(props);
  }

  protected initialize(props: IFormProps<ValueType>) {
    this.id = uid();
    this.props = props;
  }
}
