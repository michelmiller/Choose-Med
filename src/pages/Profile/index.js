import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import { View, Text} from 'react-native';

import { Container, UploadButton, UploadText, Avatar, Name, Email, Button, ButtonText } from './styles';
import Header from '../../components/Header';



export default function Profile() {
  const { signOut, user } = useContext(AuthContext);

  const [url, setUrl] = useState(null);

 return (
   <Container>
     <Header/>

    {
      url ?
      (
        <UploadButton onPress={ () => alert('CLICOU') }>
          <UploadText>+</UploadText>
          <Avatar
          source={{ uri: url }}
          />
        </UploadButton>
      ) : 
      (
        <UploadButton onPress={ () => alert('CLICOU') }>
          <UploadText>+</UploadText>
        </UploadButton>   
      )
    }  

    <Name numberOfLines={1}>{user.nome}</Name>
    <Email  numberOfLines={1} >{user.email}</Email>

    <Button bg="#428cfd" >
      <ButtonText color="#FFF" >Atualizar perfil</ButtonText>
    </Button>

    <Button bg="#f1f1f1" onPress={ () => signOut() } >
      <ButtonText color="#3b3b3b">Sair</ButtonText>
    </Button>

   </Container>
  );
}