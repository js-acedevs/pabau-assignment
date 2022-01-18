// apollo client
import { ApolloClient } from '@apollo/client';

// apollo cache
import { cache } from './cache';

// apollo httplink
import { link } from './link/httplink';

export const client = new ApolloClient({
  link,
  cache,
});
