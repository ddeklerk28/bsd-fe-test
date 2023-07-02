import React, { FC } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { ITrend } from 'types';

export interface ITrendDetailCardProps {
  trend?: ITrend;
}

export const TrendDetailCard: FC<ITrendDetailCardProps> = ({ trend }) => {
  return (
    <Card sx={{ width: 600 }} elevation={6}>
      <CardContent>
        <Typography variant="h3" color="text.primary">
          {trend?.name || '???'}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }} color="text.secondary">
          {trend?.type || '???'}
        </Typography>
        <Typography sx={{ maxWidth: 600 }} variant="body2">
          {trend?.description || '???'}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}></CardActions>
    </Card>
  );
};
