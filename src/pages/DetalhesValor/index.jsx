import React, { useState, useContext } from 'react';
import { Button } from 'react-native';
import { Container, ViewButton, Input, Label, Title } from './style'
import { DataContext } from '../../../contexts/data';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function DetalhesValor() {
  const navigation = useNavigation();
  const [textDescription, setTextDescription] = useState();
  const [textParts, setTextParts] = useState();
  const [detalhesValorData, setDeyalhesValorData] = useState([]);

  const { data, setData } = useContext(DataContext)


  function submit() {
    setDeyalhesValorData({
      textDescription: textDescription,
      textParts: textParts
    })

    setData([data, ...detalhesValorData])


    navigation.dispatch(StackActions.popToTop())

  }


  function toBack() {
    navigation.navigate('Maquina')
  }

  return (
    <Container>

      <Title>
        <Label>Serviços:</Label>
      </Title>
      <Label> Descrição:</Label>
      <Input
        multiline={true}
        onChange={description => setTextDescription(description)}
        placeholder='Maquina 1: Trocar valvula EXV'
      />
      <Label> Peças:</Label>
      <Input
        multiline={true}
        onChange={parts => setTextDescription(parts)}
        placeholder='1 valvula EXV'
      />


      <ViewButton>
        <Button title="VOLTAR" onPress={toBack} />
        <Button title="Enviar" onPress={submit} />
      </ViewButton>

    </Container>
  )
}


