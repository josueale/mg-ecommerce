export default interface API<T> {
  isSuccess:  boolean;
  code:       number;
  message:    string;
  value:      T;
}