declare module "number-to-chinese-words" {
  interface Converter {
    toWords(number: number): string;
  }

  const converter: Converter;
  export default converter;
}
