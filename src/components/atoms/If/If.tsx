// react
import { FC, ReactElement } from 'react';

// props
interface IfProps {
  condition?: boolean | null;
}

export const If: FC<IfProps> = ({ condition, children }): ReactElement | null =>
  condition ? <>{children}</> : null;
