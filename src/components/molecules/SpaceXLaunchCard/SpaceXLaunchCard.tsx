// react
import { FC } from 'react';

// next
import { useRouter } from 'next/router';

// material ui
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

// atoms
import { LaunchStatus } from '@atoms/index';

// types
import { SpaceXLaunchCardProps } from './SpaceXLaunchCard.props';

export const SpaceXLaunchCard: FC<SpaceXLaunchCardProps> = ({
  id,
  missionId,
  missionName,
  launchSuccess,
  image,
  details,
}) => {
  // hooks
  const { push } = useRouter();

  // handlers
  const handleActionClick = () => push(`/launch/${id}`);

  return (
    <LaunchStatus status={launchSuccess}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleActionClick}>
          <CardMedia
            component="img"
            image={
              image && image !== ' '
                ? image
                : 'https://images.unsplash.com/photo-1508132128959-17577240b4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            }
            alt="launch image"
            sx={{ height: '140px', objectFit: 'cover' }}
          />
        </CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">{missionName}</Typography>
            <Typography component="span">
              {id}/{missionId}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
            {`${details.slice(0, 100)}...`}
          </Typography>
        </CardContent>
      </Card>
    </LaunchStatus>
  );
};
