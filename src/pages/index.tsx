import React from 'next';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Forms/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup.string().required("E-mail obrigatório").email('E-mail inválido'),
  password: yup.string().required("Senha obrigatória"),
})

export default function SignIn() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  
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

          <Input
          name="email"
          type="email"
          label="E-mail"
          error={errors.email}
          {...register("email")}
          />

          <Input 
          name='password' 
          type="password" 
          label='Senha'
          error={errors.password}
          {...register('password')} 
          />

        </Stack>

        <Button type='submit' mt='6' colorScheme="pink" isLoading={isSubmitting}> Entrar </Button>

      </Flex>
    </Flex>
  )
}
