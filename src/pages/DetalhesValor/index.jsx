import React from 'react';
import {  Button } from 'react-native';
import {Container, ViewButton, Input, Label, Title} from './style'

import { useNavigation, StackActions } from '@react-navigation/native';


export default function DetalhesValor() {
  const navigation = useNavigation();

  function submit() {

    navigation.dispatch(StackActions.popToTop())
  }
  return (
    <Container>

       <Title>
          <Label>Serviços:</Label>
        </Title>
        <Label> Descrição:</Label>
        <Input
          multiline={true}
          placeholder='Maquina 1: Trocar valvula EXV'
        />
        <Label> Peças:</Label>
        <Input
          multiline={true}
          placeholder='1 valvula EXV'
        />


      <ViewButton>
        <Button title="Enviar" onPress={submit} />
      </ViewButton>

    </Container>
  )
}


