import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { TrendDetailCard } from '../components/TrendDetailCard';

import { api } from '../api';

export const TrendDetails = () => {
  const [trend, setTrend] = useState<any>();

  const params = useParams() as { id: string };

  useEffect(() => {
    api.fetchTrend(params.id).then((response) => {
      setTrend(response.data);
    });
  }, []);

  const handleEdit = (id: string, newName: string) => {};

  return (
    <TrendDetailsContainer>
      <TrendDetailCard trend={trend} onEdit={handleEdit}/>
    </TrendDetailsContainer>
  );
};

const TrendDetailsContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(8)})`,
}));
