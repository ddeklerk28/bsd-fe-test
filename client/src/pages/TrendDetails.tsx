import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { TrendDetailCard } from '../components/TrendDetailCard';

import { api } from '../api';

export const TrendDetails = () => {
  const [trend, setTrend] = useState<any>(undefined);

  const params = useParams();

  return (
    <TrendDetailsContainer>
      <TrendDetailCard trend={trend} />
    </TrendDetailsContainer>
  );
};

const TrendDetailsContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(8)})`,
}));
