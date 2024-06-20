import React, { FC } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';

import { ITrend } from 'types';

interface ITrendSummaryCardProps {
  trend: ITrend;
  onClick: (id: string) => void;
}
export const TrendSummaryCard: FC<ITrendSummaryCardProps> = ({
  trend,
  onClick,
}) => {
  return (
    <Card elevation={6}>
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {!!trend.name && '???'}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          {trend.type ? trend.type : '???'}
        </Typography>
        <Typography
          sx={{
            maxWidth: 275,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          variant="body2"
        >
          {trend.description ? trend.description : '???'}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => onClick(trend.id)}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};
