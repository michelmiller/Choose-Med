import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth'

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText} from './styles';

export default function Login() {
  const { signUp } = useContext(AuthContext);
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin(){
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleLogin(){
    if(email === '' || password === ''){
      console.log('Preencha todos os campos!');
      return;
    }

    alert('Login')
  }

  function handleSignUp(){
    if(name === '' || email === '' || password === ''){
      console.log('Preencha todos os campos!');
      return;  
    }
    //cadastrando usuario!
    signUp(email, password, name);
  }

  if(login){
    return(
    <Container>
      <Title>
        Choose
        <Text style={{ color: '#009d47' }}>Med</Text>
      </Title>


      <Input
      placeholder="email@email.com"
      value={email}
      onChangeText={ (text) => setEmail(text) }
      />
      <Input
      placeholder="******"
      secureTextEntry={true}
      value={password}
      onChangeText={ (text) => setPassword(text) }
      />

      <Button onPress={handleLogin}>
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
        Choose 
        <Text style={{ color: '#009d47' }}>Med</Text>
      </Title>

      <Input
      placeholder="Nome"
      value={name}
      onChangeText={(text) => setName(text)}
    />
    <Input
      placeholder="email@email.com"
      value={email}
      onChangeText={ (text) => setEmail(text) }
    />
    <Input
      placeholder="******"
      secureTextEntry={true}
      value={password}
      onChangeText={ (text) => setPassword(text) }
    />

    <Button onPress={handleSignUp}>
      <ButtonText>Cadastrar</ButtonText>
    </Button>

    <SignUpButton onPress={ () => toggleLogin() }>
      <SignUpText>Já tenho uma conta.</SignUpText>
    </SignUpButton>
  </Container> 
  );
}