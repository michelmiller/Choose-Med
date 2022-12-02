import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText} from './styles';

export default function Login() {
  const [login, setLogin] = useState(true);

  function toggleLogin(){
    setLogin(!login);
  }


  if(login){
    return(
    <Container>
      <Title>
        Dev 
        <Text style={{ color: '#e52246' }}>Post</Text>
      </Title>

      <Input
      placeholder="email@email.com"
      />
      <Input
      placeholder="******"
      secureTextEntry={true}
      />

      <Button onPress={ () => alert('TESTE') }>
        <ButtonText>Acessar</ButtonText>
      </Button>

      <SignUpButton onPress={ () => toggleLogin() }>
        <SignUpText>Criar uma conta.</SignUpText>
      </SignUpButton>
    </Container> 
    )
  }

 return (
  <Container>
    <Title>
      Dev 
      <Text style={{ color: '#e52246' }}>Post</Text>
    </Title>

    <Input
    placeholder="Nome"
    />
    <Input
    placeholder="email@email.com"
    />
    <Input
    placeholder="******"
    secureTextEntry={true}
    />

    <Button onPress={ () => alert('TESTE') }>
      <ButtonText>Cadastrar</ButtonText>
    </Button>

    <SignUpButton onPress={ () => toggleLogin() }>
      <SignUpText>Já tenho uma conta.</SignUpText>
    </SignUpButton>
  </Container> 
  );
}