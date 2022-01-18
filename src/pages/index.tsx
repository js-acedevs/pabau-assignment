// next
import type { NextPage } from 'next';

// organisms
import { SpaceXPastLaunches } from '@organisms/index';

// templates
import { AppLayout } from '@templates/index';

const Home: NextPage = () => (
  <AppLayout>
    <SpaceXPastLaunches />
  </AppLayout>
);

export default Home;
