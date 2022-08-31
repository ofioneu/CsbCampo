import React, { useState, useContext } from 'react';
import { Button } from 'react-native';
import { Container, ViewButton, Input, Label, Title } from './style'
import { DataContext } from '../../../contexts/data';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function DetalhesValor() {
  const navigation = useNavigation();
  const { data, setData } = useContext(DataContext)


  function submit() {

     Object.keys(data).forEach((item) => {
      console.log(item + ' : ' + data[item])
    })
    navigation.dispatch(StackActions.popToTop())

  }


  function toBack() {
    setData({...data, 
      description: null,
      parts: null
    })

    Object.keys(data).forEach((item)=>{
      console.log(item + ' : ' + data[item])
    })
    navigation.navigate('Maquina')
  }

  return (
    <Container>

      <Title>
        <Label>Serviços:</Label>
      </Title>
      <Label> Descrição  E VALORES:</Label>
      <Input
        multiline={true}
        value={data.description}
        onChangeText={e => {setData({...data, description: e})}}
        placeholder='Maquina 1: Trocar valvula EXV =  5000,00'
      />
      <Label> Peças:</Label>
      <Input
        value={data.parts}
        multiline={true}
        onChangeText={e => {setData({...data, parts: e})}}
        placeholder='1 valvula EXV'
      />


      <ViewButton>
        <Button title="VOLTAR" onPress={toBack} />
        <Button title="Enviar" onPress={submit} />
      </ViewButton>

    </Container>
  )
}


