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



   </Container>
  );
}