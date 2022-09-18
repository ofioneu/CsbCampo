import React, { useState, useContext } from "react";
import { Button } from "react-native";
import { Container, ViewButton, Input, Label, Title } from "./style";
import { DataContext } from "../../../contexts/data";
import { useNavigation, StackActions } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import { Audio } from 'expo-av';

export default function DetalhesValor() {
  const navigation = useNavigation();
  const { data, setData } = useContext(DataContext);
  const [sound, setSound] = React.useState();

// função sucesso no envio
  async function sucesso() {
    Toast.show({
      type: 'success',
      text1: 'Enviado!!'
    });
    
    //carregando o som
    const { sound } = await Audio.Sound.createAsync(
       require('../../../assets/small-bell-ring-01a.mp3')
    );
    setSound(sound);

    //tocando o som
    await sound.playAsync();
    // voltando para a tela inicial
    navigation.dispatch(StackActions.popToTop())
    
  }
  function showToastNot() {
    Toast.show({
      type: 'error',
      text1: 'Falha ao enviar a mensagem!!'
    });
    
  }

  async function submit() {
    // enviando o contex data para a api
    const response = await fetch("http://192.168.1.77:3000/data", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // recebe a resposta da api
    const responseText = await response.text();
    
    // evento a ser disparado relativo a response da api
    if(responseText == 'ok'){
      sucesso()
    }
    else{
      showToastNot()
    }

    
  }

  // função que retorna a tela anterior e remove as infos inseridas no context data
  function toBack() {
    setData({ ...data, description: null, parts: null });

    Object.keys(data).forEach((item) => {
      console.log(item + " : " + data[item]);
    });
    navigation.navigate("Maquina");
  }

  return (
    <Container>
      <Title>
        <Label>Serviços:</Label>
      </Title>
      <Label> Descrição E VALORES:</Label>
      <Input
        multiline={true}
        value={data.description}
        onChangeText={(e) => {
          setData({ ...data, description: e });
        }}
        placeholder="Maquina 1: Trocar valvula EXV =  5000,00"
      />
      <Label> Peças:</Label>
      <Input
        value={data.parts}
        multiline={true}
        onChangeText={(e) => {
          setData({ ...data, parts: e });
        }}
        placeholder="1 valvula EXV"
      />

      <ViewButton>
        <Button title="VOLTAR" onPress={toBack} />
        <Button title="Enviar" onPress={submit} />
      </ViewButton>
    </Container>
  );
}
