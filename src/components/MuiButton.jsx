import React from 'react'
import { Button, Stack, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
      <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Text</Button>
            <Button variant='outlined'>Text</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>secondary</Button>
            <Button variant='text' color='error'>error</Button>
            <Button variant='outlined' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='text' color='success'>success</Button>
        </Stack>
        <Stack spacing={2} display='block' direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>  
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert('Hello')}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
            <IconButton aria-label='send' color='success' size='small'><SendIcon/></IconButton>
        </Stack>       
    </Stack>
  )
}