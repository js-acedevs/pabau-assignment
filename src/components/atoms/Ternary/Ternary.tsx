// react
import { FC, ReactElement } from 'react';

// types

interface TernaryProps {
  condition: boolean;
  fallback: ReactElement;
}

export const Ternary: FC<TernaryProps> = ({ condition, fallback, children }): ReactElement | null =>
  condition ? <>{children}</> : <>{fallback}</>;
