import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { TrendSummaryCard } from '../components/TrendSummaryCard';
import { ITrend } from 'types';

import { api } from '../api';

export const Trends = () => {
  const [trends, setTrends] = useState<ITrend[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    api.fetchTrends().then((response) => {
      setTrends(response.data);
    });
  }, [])

  const handleTrendClick = (id: string) => {
    navigate(`/trend`)
  };

  return (
    <TrendContainer>
      {trends.map((trend) => {
        return (
          <TrendSummaryCard key={trend.id} trend={trend} onClick={handleTrendClick} />
        );
      })}
    </TrendContainer>
  );
};

const TrendContainer = styled(Box)(({ theme }) => ({
  // styles
}));
