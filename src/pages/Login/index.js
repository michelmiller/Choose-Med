import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles';

export default function Login() {
  const [login, setLogin] = useState(true);


  if(login){

  return (
    <Container>
          <Text>Pagina TESTE</Text>
    </Container>
 );
}



 return (
   <Container>
       <Text>Pagina Login</Text>
   </Container>
  );
}