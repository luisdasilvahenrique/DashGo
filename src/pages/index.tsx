import React from 'next';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Forms/Input';
import { resolve } from 'path';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async(values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align='center'
      justify="center"
    >
      <Flex
        flexDir='column'
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>

          <Input name='email' type="email" id='email' label='E-mail' {...register('email')} />
          <Input name='password' type="password" id='password' label='Senha' {...register('password')} />

        </Stack>

        <Button type='submit' mt='6' colorScheme="pink" isLoading={formState.isSubmitting}> Entrar </Button>

      </Flex>
    </Flex>
  )
}
