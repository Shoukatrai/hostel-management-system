import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import image from "../../assets/login profile.png"
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <>
      <Typography variant='h3' textAlign={"center"} gap={"20px"} marginBottom={"20px"} >
        Welcome Back!
      </Typography>



      <Stack flexDirection={{
        xs: "column",
        md: "row"
      }}
        alignItems={"center"}
        justifyContent={"space-between"}

        maxWidth={500}  px={2}
        mx={"auto"}
        gap={{
          xs: "10px",
          md:"50px"
        }}
      >
        <Box
          component={"img"}
          src={image}
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            maxWidth: 500,
            display: 'block',
            mx: 'auto',
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "50%"
          }}
        >
        </Box>
        <Box>
          <Button>Login As Student</Button>
          <Button>Login As Admin</Button>
          <Box>
            <Typography>
              Don't Have an Account?
            </Typography>
            <Link to={"/signup"} >
              SignUp
            </Link>

          </Box>
        </Box>
      </Stack>

    </>
  )
}

export default LoginPage
