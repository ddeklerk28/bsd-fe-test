import React, { FC, useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Input,
  Box,
} from '@mui/material';
import { ITrend } from 'types';

export interface ITrendDetailCardProps {
  trend: ITrend;
  onEdit: (id: string, newName: string) => void;
}

export const TrendDetailCard: FC<ITrendDetailCardProps> = ({ trend, onEdit }) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(trend?.name || '');

  return (
    <Card sx={{ width: 600 }} elevation={6}>
      <CardContent>
        {showInput ? (
          <Box>
            <Input
              placeholder="Enter trend name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <Button
              onClick={() => {
                onEdit(trend.id, newName);
                setShowInput(false);
              }}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                setShowInput(false);
                setNewName(trend?.name || '');
              }}
            >
              Cancel
            </Button>
          </Box>
        ) : (
          <Typography
            variant="h3"
            color="text.primary"
            sx={{ cursor: 'pointer' }}
            onClick={() => setShowInput(true)}
          >
            {trend?.name || '???'}
          </Typography>
        )}
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