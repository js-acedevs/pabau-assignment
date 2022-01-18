// next
import { useRouter } from 'next/router';

// config
import { ITEMS_PER_PAGE } from '@config/index';

// graphql
import { useAllPastLaunchesQuery, usePastLaunchesQuery } from '@graphql/gen/graphql';

export const useGetPastLaunches = () => {
  const {
    query: { page },
  } = useRouter();

  // Limited Past Launches
  const { data, loading } = usePastLaunchesQuery({
    variables: {
      limit: ITEMS_PER_PAGE,
      offset: Math.abs(Number(page)) * ITEMS_PER_PAGE - (ITEMS_PER_PAGE - 1) || 0,
    },
  });

  // All Past Launches
  const { data: allPastLaunches } = useAllPastLaunchesQuery();

  return {
    pastLaunches: data?.launchesPast || [{}],
    pastLaunchesNumber: allPastLaunches?.launchesPast?.length || 0,
    loading,
  };
};
