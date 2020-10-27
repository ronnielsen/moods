import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components';

export default function Header(props) {

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

  const User = styled(View)`
    height: 32px;
    width: 32px;
    border-radius: 45px;
    background: black;
    alignItems: center;
    justifyContent: center;

  `;

  const Label = styled(Text)`
    fontSize: 18px;
    fontWeight: 400;
    color: white;
  `;

  return (
    <Container>
      <User>
        <Label>{props.letter || 'R'}</Label>
      </User>
      {props.append}
    </Container>
  )
}
