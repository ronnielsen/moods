import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, View } from 'react-native';
import styled from 'styled-components';
import Feather from 'react-native-vector-icons/Feather';

export default function Nav(props) {

  const Container = styled(View)`
    background: #FAFAFC;
    width: 100%;
    padding: 16px 32px;
    marginTop: 32px;
    flexDirection: row;
    alignItems: center;
    alignSelf: stretch;
    background: #ddd;
  `;

  const Back = styled(TouchableHighlight)`
    height: 32px;
    width: 32px;
    border-radius: 45px;
    background: black;
    alignItems: center;
    justifyContent: center;
  `;

  const Icon = styled(Text)`
    fontSize: 18px;
    fontWeight: 400;
    color: white;
  `;

  return (
    <Container>
      <Back onPress={() => props.setScreen(props.to)}>
        <Icon>
          <Feather name='chevron-left' size={24} />
        </Icon>
      </Back>
      {props.append}
    </Container>
  )
}
