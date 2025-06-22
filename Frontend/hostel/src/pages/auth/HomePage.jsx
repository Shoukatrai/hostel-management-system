import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import image from "../../assets/Hero image.jpg"
const HomePage = () => {
  return (
    <>
      <Stack flexDirection={{
        xs: "column-reverse",
        md: "row"
      }} alignItems={"center"} >
        <Box
          component={"img"}
          src={image}
          alt="Hostel Room"
          sx={{
            width: '100%',  
            height: 'auto',       
            borderRadius: 2,
            maxWidth: 500,   
            display: 'block',       
            mx: 'auto'             
          }}
        >
        </Box>
        <Box maxWidth={500} mx="auto" my={4} px={2}>
          <Typography variant='h4' sx={{
            fontSize: {
              xs: '1.25rem', // 20px on mobile
              md: '1.5rem',  // 24px on desktop
            },
            fontWeight: "600",
            color: '#1F2937',
            marginBottom: "10px"
          }}>
            Smart Living for Students & Professionals
          </Typography>

          <Typography variant='body1' sx={{
            fontWeight: "400",
            lineHeight: "1.6",
            marginBottom:"10px"
          }} >
            Live comfortably with furnished rooms, fast Wi-Fi, and flexible plans — all in prime locations, made for your lifestyle.
          </Typography>

             <Button variant="contained">Book Now</Button>
        </Box>
      </Stack>
    </>
  )
}

export default HomePage
