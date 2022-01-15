import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

export interface Button
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  testTitle: string;
}
export const Button: FC<Button> = ({ testTitle, ...rest }): ReactElement => (
  <button {...rest}>{testTitle}</button>
);
