import React, { useContext } from 'react';
import { View, Text, Button, Image} from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {
  const { signOut } = useContext(AuthContext);

  function Logo(props){
  
    let img = 'http://choosemed.com.br/wp-content/uploads/2021/09/logo_choose-166x37.png';
  
    return(
      <View>
   <Image source={{ uri:img }} style={{ width: props.Largura, height: props.altura }} />
  
      </View>
    );
  }  

 return (
   <View         
    style={{
    flex:1,
    justifyContent: 'center',
   
    backgroundColor: '#36393F'
}}
>
<Logo  style={{margnTop:20}} Largura={166} altura={37} />
       <Text style ={textColor = "white"}>Pagina Profile</Text>
       <Button title="Sair" onPress={ () => signOut() }/>
   </View>
  );
}