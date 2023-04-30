type Constructor<T = {}> = new (...args: any[]) => T;

export function MixinFunction<
  BaseType extends Constructor
>(BaseClass: BaseType) {
  return class extends BaseClass {
    constructor(...args: any[]) {
      super(...args);
    }
    alertMessage( msg: string) {
      alert(msg)
    }
  };
}
