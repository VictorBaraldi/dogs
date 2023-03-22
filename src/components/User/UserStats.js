import React from 'react';
import Head from '../Helper/Head';
import UseFetch from '../../Hooks/UseFetch';
import { GET_STATS } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = UseFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error erro={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatística" description="Estatística do usuário" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
