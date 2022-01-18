// material ui
import { Grid, Stack, Typography } from '@mui/material';

// config
import { ITEMS_PER_PAGE } from '@config/index';

// atoms
import { If, Ternary } from '@atoms/index';

// molecules
import { Pagination } from '@molecules/index';

// molecules
import { SpaceXLaunchCard } from '@molecules/index';

// graphql
import { useGetPastLaunches } from '@graphql/hooks/useGetPastLaunches';

export const SpaceXPastLaunches = () => {
  // graphql
  const { pastLaunches, pastLaunchesNumber, loading } = useGetPastLaunches();

  return (
    <Ternary condition={!loading} fallback={<p>Loading Data....</p>}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: {
            xs: 'center',
            md: 'flex-start',
          },
          marginTop: '5rem',
        }}
      >
        {pastLaunches.map((launch) => (
          <Grid key={launch?.id} item>
            <SpaceXLaunchCard
              id={launch?.id || ' '}
              missionId={(launch?.missionId && launch.missionId[0]) || ' '}
              missionName={launch?.missionName || ' '}
              launchSuccess={launch?.launchSuccess || false}
              image={(launch?.links?.flickrImages && launch.links.flickrImages[0]) || ' '}
              details={launch?.details || ''}
            />
          </Grid>
        ))}
      </Grid>

      <Pagination itemsToShow={Math.ceil(pastLaunchesNumber / ITEMS_PER_PAGE)} />

      <If condition={!pastLaunches?.length && !loading}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ mt: 20 }}
        >
          <Typography variant="h4" gutterBottom>
            Opss. There is no data to show!!!
          </Typography>
        </Stack>
      </If>
    </Ternary>
  );
};
