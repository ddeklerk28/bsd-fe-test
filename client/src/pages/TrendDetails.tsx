import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { TrendDetailCard } from '../components/TrendDetailCard';
import { ITrend } from 'types';

import { api } from '../api';

export const TrendDetails = () => {
  const [trend, setTrend] = useState<ITrend | undefined>(undefined);

  const params = useParams();

  useEffect(() => {
    const trendId = params.id;

    if (trendId) {
      api.fetchTrend(trendId).then((response) => {
        setTrend(response.data);
      });
    }
  }, []);

  return (
    <TrendDetailsContainer>
      <TrendDetailCard trend={trend} />
    </TrendDetailsContainer>
  );
};

const TrendDetailsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  height: 'calc(100vh - 64px)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));
