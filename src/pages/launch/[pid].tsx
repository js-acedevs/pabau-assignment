// next
import { useRouter } from 'next/router';

// material icons
import { ArrowBack } from '@mui/icons-material';

// material ui
import { Box } from '@mui/system';
import { Container, CssBaseline, IconButton, Typography } from '@mui/material';

const SingleLaunch = () => {
  // hooks
  const { back, query } = useRouter();

  // pid
  const { pid } = query;

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
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            {pid}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
      </Box>
    </>
  );
};

export default SingleLaunch;
