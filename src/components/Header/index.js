import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title} from './styles';

export default function Header() {
 return (
   <Container>
      <Title>
        Choose
        <Text style={{ color: '#009d47' }}>Med</Text>
      </Title>

   </Container>
  );
}