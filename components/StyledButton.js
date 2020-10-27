import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';
import styled from 'styled-components';

export default function Header(props) {

  const Container = styled(TouchableHighlight)`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    background: black;
    color: white;
    padding: 8px;
    margin: 16px 32px;
    border-radius: 45px;
  `;

  const Label = styled(Text)`
    fontSize: 24px;
    lineHeight: 32px;
    fontWeight: 400;
    color: white;
    text-align: center;
  `;

  return (
    <Container {...props}>
      <Label>{props.label || "ok"}</Label>
    </Container>
  )
}
