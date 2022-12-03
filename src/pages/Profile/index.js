import React, { useCtontex }from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth'; 
import { useContext } from 'react';

export default function Profile() {  
  const { signOut } = useContext(AuthContext); 
 return (
   <View>
       <Text>Pagina Profile</Text>
  <Button title="sair" onPress={()=> signOut()}/>
   </View>
  );
}