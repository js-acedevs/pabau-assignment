// react
import { useState, ChangeEvent } from 'react';

// config
import { ITEMS_PER_PAGE } from '@config/index';

// material ui
import { Box, Grid, Pagination } from '@mui/material';

// atoms
import { If } from '@atoms/index';

// molecules
import { SpaceXLaunchCard } from '@molecules/index';

// graphql
import { usePastLaunchesQuery } from '@graphql/gen/graphql';

// dummy data
import { pastLaunches } from '../../../static/pastLaunches';

export const SpaceXPastLaunches = () => {
  // local states
  const [page, setPage] = useState(1);

  // graphql
  const { data } = usePastLaunchesQuery({
    variables: {
      limit: ITEMS_PER_PAGE,
      offset: page * ITEMS_PER_PAGE - 4,
    },
  });

  // handlers
  const handleChange = (event: ChangeEvent<unknown>, value: number) => setPage(value);

  console.log(page, data);

  return (
    <>
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
        <If condition={data?.launchesPast?.length !== 0}>
          {data?.launchesPast?.map((launch) => (
            <Grid key={launch?.id} item>
              <SpaceXLaunchCard />
            </Grid>
          ))}
        </If>
      </Grid>

      <If condition={pastLaunches.length > ITEMS_PER_PAGE}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '3rem 1rem',
          }}
        >
          <Pagination
            count={Math.ceil(pastLaunches.length / ITEMS_PER_PAGE)}
            defaultPage={1}
            size="large"
            onChange={handleChange}
          />
        </Box>
      </If>
    </>
  );
};
