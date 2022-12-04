import React, { useContext } from 'react';
import { View, Text, Button, Image} from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {
  const { signOut } = useContext(AuthContext);

  function Logo(props){
  
    let img = 'http://choosemed.com.br/wp-content/uploads/2021/09/logo_choose-166x37.png';
  
    return(
        <View style={{  flex: 1, marginTop:0, width: '100%', justifyContent: 'center', backgroundColor: '#202225',  }}>
   <Image source={{ uri:img }} style={{ width: props.Largura, height: props.altura }} />
  
      </View>
    );
  }  


  return(
    <View style={{  flex: 1, marginTop:0, width: '100%', justifyContent: 'center', backgroundColor: '#202225',  }}>
    <Logo  style={{ alignItems: 'center',}} Largura={166} altura={37} />
    <Button style={{paddingTop:0, width: '80%'}} title="Sair" onPress={ () => signOut() }/>
   </View>
  );
}



<Button style={{paddingTop:0}} title="Sair" onPress={ () => signOut() }/>


