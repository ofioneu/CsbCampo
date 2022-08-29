import React, { useState, useContext } from 'react';
import { Container, Title, Label, Input, ViewButton, ImageBackground } from './style';
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../../../contexts/data';

export default function Cliente() {

  const [clienteName, setClienteName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [clientData, setClientData] = useState({})
  const { data, setData } = useContext(DataContext)




  const navigation = useNavigation();

  function navegaMaquina() {
    navigation.navigate('Maquina')
    setClientData({
      clienteName: clienteName,
      cnpj: cnpj,
      contactName: contactName,
      email: email
    })

    setData(clientData)
  }


  function toBack() {
    navigation.navigate('Origem')
  }


  return (
    <Container>
      <Title>
        <Label>Dados do cliente:</Label>
      </Title>
      <Label> Nome:</Label>
      <Input
        placeholder='Nome do Cliente'
        onChange={textNameCliente => setClienteName(textNameCliente)}
      />

      <Label>CNPJ:</Label>
      <TextInputMask style={styles.input}
        value={cnpj}
        onChangeText={textCnpj => setCnpj(textCnpj)}
        type={'cnpj'}
        placeholder='36.196.281/0001-47'

      />
      <Label> Nome do contato:</Label>
      <TextInput style={styles.input}
        placeholder='Luiz da manutenção'
        onChange={textContactName => setContactName(textContactName)}
      />
      <Label> E-mail:</Label>
      <TextInput style={styles.input}
        value={email}
        autoCapitalize='none'
        onChangeText={text => setEmail(text)}
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