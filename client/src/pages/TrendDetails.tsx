import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { TrendDetailCard } from '../components/TrendDetailCard';

import { api } from '../api';

export const TrendDetails = () => {
  const [trend, setTrend] = useState<any>();

  const params = useParams();

  useEffect(() => {
    api.fetchTrend('3').then((response) => {
      setTrend(response.data);
    });
  }, []);

  const handleEdit = (newName: string) => {
    api.updateTrend('3', { name: newName }).then((response) => {
      setTrend(response.data);
    });
  };

  return (
    <TrendDetailsContainer>
      <TrendDetailCard trend={trend} onEdit={handleEdit}/>
    </TrendDetailsContainer>
  );
};

const TrendDetailsContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(8)})`,
}));
