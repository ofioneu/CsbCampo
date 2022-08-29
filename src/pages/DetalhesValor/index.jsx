import React, { useState, useContext } from 'react';
import { Button } from 'react-native';
import { Container, ViewButton, Input, Label, Title } from './style'
import { DataContext } from '../../../contexts/data';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function DetalhesValor() {
  const navigation = useNavigation();
  const [textDescription, setTextDescription] = useState();
  const [textParts, setTextParts] = useState();

  const { data, setData } = useContext(DataContext)


  function submit() {
  
    setData({...data,
      textDescription: textDescription,
      textParts: textParts    
    })

    Object.keys(data).forEach((item)=>{
      console.log(item + ' : ' + data[item])
    })
    // navigation.dispatch(StackActions.popToTop())

  }


  function toBack() {
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
        onChangeText={description => setTextDescription(description)}
        placeholder='Maquina 1: Trocar valvula EXV =  5000,00'
      />
      <Label> Peças:</Label>
      <Input
        multiline={true}
        onChangeText={parts => setTextParts(parts)}
        placeholder='1 valvula EXV'
      />


      <ViewButton>
        <Button title="VOLTAR" onPress={toBack} />
        <Button title="Enviar" onPress={submit} />
      </ViewButton>

    </Container>
  )
}


