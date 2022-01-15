// graphql
import { usePastLaunchesQuery } from '@graphql/gen/graphql';

const SpacesXLaunches = () => {
  const { data, error, loading } = usePastLaunchesQuery();

  console.log(data, error, loading);
  return <h1>What is this</h1>;
};

export default SpacesXLaunches;
