/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';

 import {View, StyleSheet,Image, ScrollView, Text, Modal,Button,TouchableHighlight} from 'react-native';
 
 const App = () =>{
  const [modalVisibleplaya, setModalVisibleplaya]= useState(false);
  const [modalVisibleplato, setModalVisibleplato]= useState(false);
  const [modalVisibleturistico, setModalVisibleturistico]= useState(false);
 return(
 <>
 <ScrollView >
  <Modal transparent={true} animationType='slide' visible={modalVisibleplaya} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>

    <View style={styles.vistaModal}>
      <View style={styles.Modal}>
        <Text>El Salvador cuenta con hermosas playas a nivel Centroaméricano.</Text>
        <Button title='Cerrar' onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
      <Text style={styles.subtitulo}>Ir a la playa</Text>
      </View>
    </View>
    </Modal>
 <View style={{flexDirection:'row'}} >
 <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
 </View>
 <View style={styles.contenedor}>
 <Text style={styles.titulo}>Que hacer en El Salvador</Text>
 <ScrollView horizontal>
  <View>
    <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
  <Image style={styles.cuidad} source={require('./src/img/actividad1.jpg')}/>
  </TouchableHighlight>
  </View>
  <View>
  <Image style={styles.cuidad} source={require('./src/img/actividad2.jpg')}/>
  </View>
  </ScrollView>
  </View>
 

 <Text style={styles.titulo}>Platillos Salvadoreños</Text>
<View>
<Modal transparent={true} animationType='slide' visible={modalVisibleplato} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>

    <View style={styles.vistaModal}>
      <View style={styles.Modal}>
        <Text>El Salvador cuenta con Ricos Platos Tipicos.</Text>
        <Button title='Cerrar' onPress={()=>{setModalVisibleplato(!modalVisibleplato)}}></Button>
      <Text style={styles.subtitulo}>Ir a los restaurantes</Text>
      </View>
    </View>
    </Modal>
<View>
<TouchableHighlight onPress={()=>{setModalVisibleplato(!modalVisibleplato)}}>
  <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')}/>
  </TouchableHighlight>
  </View>
  <View>
  <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')}/>
  </View>
  <View>
  <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')}/>
  </View>
</View>
<Text style={styles.titulo}>Rutas Turisticas</Text>
<View style={styles.listado}>
  <Modal transparent={true} animationType='slide' visible={modalVisibleturistico} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>

    <View style={styles.vistaModal}>
      <View style={styles.Modal}>
        <Text>El Salvador cuenta con unos Hermosos Lugares Turisticos.</Text>
        <Button title='Cerrar' onPress={()=>{setModalVisibleturistico(!modalVisibleturistico)}}></Button>
      <Text style={styles.subtitulo}>Ir a los lugares turisiticos</Text>
      </View>
    </View>
    </Modal>
  <View style={styles.listaItem}>
  <TouchableHighlight onPress={()=>{setModalVisibleturistico(!modalVisibleturistico)}}>
  <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')}/>
  </TouchableHighlight>
  </View>
  <View style={styles.listaItem}>
  <Image style={styles.mejores} source={require('./src/img/rutas2.jpg')}/>
  </View>
  <View style={styles.listaItem}>
  <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')}/>
  </View>
  <View style={styles.listaItem}>
  <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')}/>
  </View>
  </View>
  </ScrollView>
  
 </>
 );
 };
 const styles = StyleSheet.create({
 banner:{
 height:250,
 flex:1
 },
 titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10,
 },
 contenedor:
{
  marginHorizontal:10,
},
cuidad:{
  width:250,
  height:300,
  marginRight:10,
},
mejores:{
  width:'100%',
  height:200,
  marginVertical:5
},
listaItem:{
  flexBasis:'49%',
},
listado:{
  flexDirection:'row',
  flexWrap: 'wrap',
  justifyContent:'space-between',
},
vistaModal:{
  backgroundColor:'#fff',
  flex:1,
},
Modal: {
  backgroundColor:'#fff',
  margin: 50,
  padding: 40,
  borderRadius: 10,
  flex: 1,
},
subtitulo:{
  fontWeight: 'bold',
  fontSize: 14,
  justifyContent: 'center',
}

 });
 export default App;