import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate(-1);
  };

  const isHomeRoute =
    location.pathname === '/' || location.pathname === '/trend';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleBackClick}
            color="inherit"
            sx={{ display: isHomeRoute ? 'none' : 'flex' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trend Spotter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
