import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Container, ButtonPost } from './styles';

export default function Home() {
  const navigation = useNavigation();
  function Logo(props){
  
    let img = 'http://choosemed.com.br/wp-content/uploads/2021/09/logo_choose-166x37.png';
  
    return(
      <View     
      style={{
       
        justifyContent: 'center',
       alignItems: 'center',
    
    }}
    >
   <Image 
   source={{ uri:img }} style={{ width: props.Largura, height: props.altura }} />
  
      </View>
    );
  }  

  
 return (
  <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Logo  style={{marginTop:50}} Largura={166} altura={37} />
     <Text style={{marginBottom:20, color: '#68abfe', fontSize: 22, margin: 10 }}>Sua vida mais tranquila!</Text>
        <Text style={{ color: 'green', fontSize: 20, marginTop: 0 }}>Saúde e controle</Text>
       <Text style={{ color: 'green', fontSize: 20, margin:0 }}>na palma da sua mão</Text>
       
      <ButtonPost onPress={() => navigation.navigate('NewPost') }>
        <Feather
          name="edit-2"
          color="#FFF"
          size={25}
        />
      </ButtonPost>

   </Container>
  );
}
