// apollo client
import { HttpLink } from '@apollo/client';

// config
import { API_URL } from '@config/index';

export const link = new HttpLink({
  uri: API_URL,
});
