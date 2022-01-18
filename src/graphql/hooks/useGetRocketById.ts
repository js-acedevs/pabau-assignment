// graphql
import { useLaunchRocketByIdQuery } from '@graphql/gen/graphql';

export const useGetRocketById = ({ launchId }: { launchId: string }) => {
  const { data } = useLaunchRocketByIdQuery({
    variables: {
      launchId,
    },
  });

  return {
    data,
  };
};
