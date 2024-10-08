import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, FormControl, FormLabel, Input, Text, Alert, AlertIcon, InputGroup, InputLeftAddon, Center } from '@chakra-ui/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { clearError, saveUser, setEmailOrMobile, setError, toggleInputType } from '../utils/Redux/action';

const SignUp = () => {
  const emailOrMobile = useSelector((state) => state.sign.emailOrMobile);
  const isEmail = useSelector((state) => state.sign.isEmail);
  const loading = useSelector((state) => state.sign.loading);
  const error = useSelector((state) => state.sign.error);
  const saveUserStatus = useSelector((state) => state.sign.saveUser);  // Check if the user is saved
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const emailParams = searchParams.get("email");
    const mobileParams = searchParams.get("mobile");
    if (emailParams) {
      dispatch(setEmailOrMobile(emailParams));
    } else if (mobileParams) {
      dispatch(toggleInputType());
      dispatch(setEmailOrMobile(mobileParams));
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (saveUserStatus) {
      navigate('/');  // Redirect to homepage after successful signup
    }
  }, [saveUserStatus, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());

    if (isEmail) {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailPattern.test(emailOrMobile)) {
        dispatch(setError("Please enter a valid email"));
        return;
      }
    } else {
      if (emailOrMobile.length < 10) {
        dispatch(setError("Please enter a valid mobile number"));
        return;
      }
    }

    const userData = {
      contact: emailOrMobile,
      isEmail: isEmail,
    };

    dispatch(saveUser(userData));  // Dispatch saveuser action
  };

  return (
    <Center>
      <Box w={{ base: "90%", md: "400px" }} mx="auto" mt="50px" p={5} borderWidth={1} borderRadius="30px">
        <Text as="b" p="5" fontSize="34px">Welcome to Tata CliQ</Text>

        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>{isEmail ? "Email Address" : "Mobile Number"}</FormLabel>
            {isEmail ? (
              <Input
                type="email"
                value={emailOrMobile}
                onChange={(e) => dispatch(setEmailOrMobile(e.target.value))}
                placeholder="example@example.com"
              />
            ) : (
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  value={emailOrMobile}
                  onChange={(e) => dispatch(setEmailOrMobile(e.target.value))}
                  placeholder="1234567890"
                />
              </InputGroup>
            )}
          </FormControl>

          <Text mt={2} onClick={() => dispatch(toggleInputType())}>
            {isEmail ? "Use Mobile Number" : "Use Email Address"}
          </Text>

          <Button
            type="submit"
            bgGradient="linear-gradient(to-br, #89216b, #da4453)"
            color="#fff"
            isLoading={loading}
            mt={4}
          >
            Continue
          </Button>
        </form>

        <Text mt={4} textAlign="center">
          Already have an account?{" "}
          <Button variant="link" onClick={() => navigate('/signin')}>
            Sign In
          </Button>
        </Text>
      </Box>
    </Center>
  );
};

export default SignUp;
