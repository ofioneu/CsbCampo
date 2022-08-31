import React, { useState, useContext } from 'react';
import { Container, Title, Label, Input, ViewButton, ImageBackground } from './style';
import { StyleSheet, Button, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../../../contexts/data';

export default function Cliente() {

  const { data, setData } = useContext(DataContext)


  const navigation = useNavigation();

  function navegaMaquina() {
    navigation.navigate('Maquina')
   
    Object.keys(data).forEach((item)=>{
      console.log(item + ' : ' + data[item])
    })
  }


  function toBack() {
    setData({...data, 
      origem: null,
      clientName: null,
      cnpj: null,
      contactName: null,
      email: null
    })
    navigation.navigate('Origem')

    Object.keys(data).forEach((item)=>{
      console.log(item + ' : ' + data[item])
    })
  }


  return (
    <Container>
      <Title>
        <Label>Dados do cliente:</Label>
      </Title>
      <Label> Nome:</Label>
      <Input
        value={data.clientName}
        placeholder='Nome do Cliente'
        onChangeText={e => {setData({...data, clientName: e})}}
      />

      <Label>CNPJ:</Label>
      <TextInputMask style={styles.input}
        value={data.cnpj}
        onChangeText={e => {setData({...data, cnpj: e})}}
        type={'cnpj'}
        placeholder='36.196.281/0001-47'

      />
      <Label> Nome do contato:</Label>
      <TextInput style={styles.input}
        value={data.contactName}
        placeholder='Luiz da manutenção'
        onChangeText={e => {setData({...data, contactName: e})}}
      />
      <Label> E-mail:</Label>
      <TextInput style={styles.input}
        value={data.email}
        autoCapitalize='none'
        onChangeText={e => {setData({...data, email: e})}}
        placeholder='juca@empresa.com.br'
      />


      <ViewButton>
        <Button title="VOLTAR" onPress={toBack} />
        <Button title="PROXIMO" onPress={navegaMaquina} />
      </ViewButton>

    </Container >
  )
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'red',
  },
})