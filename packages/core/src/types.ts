/**Form 新建时属性接口 */
export interface IFormProps<T extends object = any> {
  values?: Partial<T>;
  initialValues?: Partial<T>;
}
