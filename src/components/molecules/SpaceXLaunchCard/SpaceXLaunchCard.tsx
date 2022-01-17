// react
import { FC } from 'react';

// next
import { useRouter } from 'next/router';

// material ui
import { Box } from '@mui/system';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

// types
import { SpaceXLaunchCardProps } from './SpaceXLaunchCard.props';

export const SpaceXLaunchCard: FC<SpaceXLaunchCardProps> = () => {
  // hooks
  const { push } = useRouter();

  // handlers
  const handleActionClick = () => push('/launch/3');

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleActionClick}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
      </CardActionArea>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Lizard</Typography>
          <Typography component="span">109</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleActionClick}>
          Share
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
