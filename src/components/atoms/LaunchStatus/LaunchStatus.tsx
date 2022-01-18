// react
import { FC } from 'react';

// material ui
import { Badge } from '@mui/material';

interface LaunchStatusProps {
  status: boolean;
}
export const LaunchStatus: FC<LaunchStatusProps> = ({ status, children }) => (
  <Badge
    color={status ? 'primary' : 'secondary'}
    variant="dot"
    sx={{ '& .MuiBadge-badge': { borderRadius: '999', height: 20, minWidth: 20 } }}
  >
    {children}
  </Badge>
);
