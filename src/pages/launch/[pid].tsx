// next
import { useRouter } from 'next/router';

// material icons
import { ArrowBack } from '@mui/icons-material';

// material ui
import { Container, CssBaseline, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

// graphql
import { useGetRocketById } from '@graphql/hooks/useGetRocketById';
import { LaunchStatus } from '../../components/atoms';

const SingleLaunch = () => {
  // hooks
  const {
    back,
    query: { pid },
  } = useRouter();

  // graphql
  const { data } = useGetRocketById({ launchId: pid?.toString() || '' });

  // handlers
  const handleGoBack = () => back();

  return (
    <>
      <IconButton sx={{ margin: '20px' }} aria-label="go back one step" onClick={handleGoBack}>
        <ArrowBack />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          sm: {
            display: 'block',
          },
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            {data?.launch?.missionName && data.launch.missionName}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {data?.launch?.details}
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>
                <Typography component="span" sx={{ paddingRight: '20px' }}>
                  Active:{' '}
                </Typography>
                <LaunchStatus status={data?.launch?.rocket?.rocket?.active || false} />
              </li>
              <li>Cost Per Launch: {data?.launch?.rocket?.rocket?.costPerLaunch}$</li>
              <li>Boosters: {data?.launch?.rocket?.rocket?.boosters}</li>
              <li>Company: {data?.launch?.rocket?.rocket?.company}</li>
              <li>Name: {data?.launch?.rocket?.rocket?.name}</li>
              <li>Description: {data?.launch?.rocket?.rocket?.description}</li>
              <li>Country: {data?.launch?.rocket?.rocket?.country}</li>
              <li>Type: {data?.launch?.rocket?.rocket_type}</li>
            </ul>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default SingleLaunch;
