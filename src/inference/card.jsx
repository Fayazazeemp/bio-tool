

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
  
  import AccountBalanceChart from './doughnut';
  import { styled } from '@mui/material/styles';
import Doughnutt from './doughnut';
  


function CardCompo({text}) {
    return (
        <Card sx={{ px: 1 }}>
            <CardContent>
              <Doughnutt/>
                <Typography variant="subtitle2" align='center' noWrap style={{marginTop:'15px', fontSize:'10px'}}>
                  {text}
                </Typography>
            </CardContent>
          </Card>
    )
}

export default CardCompo

