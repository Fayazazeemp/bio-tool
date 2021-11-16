import React from 'react'

import {
    Button,
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    Avatar,
    Tooltip,
    CardActionArea
  } from '@mui/material';
  
  import { styled } from '@mui/material/styles';
  import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import CardCompo from './card';
  
  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
          background: transparent;
          margin-left: -${theme.spacing(0.5)};
          margin-bottom: ${theme.spacing(1)};
          margin-top: ${theme.spacing(2)};
  `
  );
  
  const AvatarAddWrapper = styled(Avatar)(
    ({ theme }) => `
          background: ${theme.colors.alpha.black[5]};
          color: ${theme.colors.primary.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
  `
  );
  
  const CardAddAction = styled(Card)(
    ({ theme }) => `
          border: ${theme.colors.primary.main} dashed 1px;
          height: 100%;
          color: ${theme.colors.primary.main};
          
          .MuiCardActionArea-root {
            height: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .MuiTouchRipple-root {
            opacity: .2;
          }
          
          &:hover {
            border-color: ${theme.colors.alpha.black[100]};
          }
  `
  );

function Cards() {
    return (
        <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 3 , mt: 3}}
        >
          <Typography variant="h3">Select Algorithm</Typography>
        </Box>
        <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT'/>
            </Grid>

            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT' />
            </Grid>

            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT' />
            </Grid>

            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT' />
            </Grid>

            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT' />
            </Grid>

            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT' />
            </Grid>

            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT' />
            </Grid>
            <Grid xs={12} sm={6} md={1.5} item>
                <CardCompo text= 'MRENT' />
            </Grid>
        </Grid>
        </>
    )


}

export default Cards
