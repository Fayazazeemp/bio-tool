import React,{useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import {
    Button,
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    Avatar,
    Tooltip,
    CardActionArea,
    TextField,
    MenuItem,
    Divider,
    IconButton
  } from '@mui/material';
  
  import { styled } from '@mui/material/styles';
  import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Cards from './cards';
  
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

  const currencies = [
    {
      value: 'EUR',
      label: 'From Directory',
    },

  ];
  
  function Wallets() {
  
    const [currency, setCurrency] = useState('EUR');
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };
    
      const [value, setValue] = useState(30);
    
      const handleChange2 = (event, newValue) => {
        setValue(newValue);
      };



    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 3 }}
        >
          <Typography variant="h3">Input Data</Typography>
          <Button
            size="small"
            variant="contained"
          >
            Infer Network
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          sx={{ pb: 3 }}
        >
        <TextField style={{width:'300px'}}
                      id="outlined-select-currency"
                      select
                      label="Select Data From"
                      value={currency}
                      onChange={handleChange}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    </Box>
            <Divider />
            <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          sx={{ pb: 3 , pt: 3}}
        >
          <Button style={{ marginRight:'10px'}}
          size="large"
          variant="outlined"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Browse File
        </Button>
        <Typography style={{ marginRight:'100px'}}>(No file Selected)</Typography>
                    <TextField style={{width:'300px',marginRight:'20px'}}
                      id="outlined-select-currency"
                      select
                      label="Select From Directory"
                      value={currency}
                      onChange={handleChange}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <IconButton color='primary' aria-label="download">
  <FileDownloadOutlinedIcon />
</IconButton>
                    <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>

        </Box>
        <Divider />
        <Cards />
        <Divider style={{marginTop:'20px',marginBottom:'20px'}}/>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 3 }}
        >
          <Typography variant="h3">Interface Statistics</Typography>
          <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderRight="1px solid grey"
          marginRight="5px"
        >
          <Typography variant="subtitle1">Interface Statistics:</Typography>
          <Typography style={{fontWeight:'bold', marginLeft:'5px',marginRight:'5px'}} variant="subtitle1">00 Min 00 Sec</Typography>
        </Box>
        
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderRight="1px solid grey"
          marginRight="5px"
        >
          <Typography variant="subtitle1">Number of Models:</Typography>
          <Typography style={{fontWeight:'bold', marginLeft:'5px',marginRight:'5px'}} variant="subtitle1">00</Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginRight="5px"
        >
          <Typography variant="subtitle1">Number of Models Completed:</Typography>
          <Typography style={{fontWeight:'bold', marginLeft:'5px',marginRight:'5px'}} variant="subtitle1">00</Typography>
        </Box>

        </Box>
        </Box>

        <Divider style={{marginBottom:'20px'}}/>
      </>
    );
  }
  
  export default Wallets;
  