// react
import { FC } from 'react';

// material ui
import { Container } from '@mui/material';

export const AppLayout: FC = ({ children }) => <Container maxWidth="lg">{children}</Container>;
