import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import { Header } from '../components';

export default function Stats(props) {

  const Container = styled(View)`
    height: 100%;
    width: 100%;
    background: #FAFAFC;
  `;

  return (
    <Container>
      <ScrollView>
        <Header title='Activity'/>
        {props.results.map((x, index) =>
          <Text key={index}>
            {x.score}
            {x.reason.map((y, index) =>
              <Text key={index + y.name}>
              {y.emoji}{y.name}
              </Text>
            )}
          </Text>
        )}
        <Button
          title="Dew it"
          onPress={() =>
            (props.setResults([...props.results, {score: 1, reason: [{emoji: '🏠', name:'Home'}, {emoji:'👨‍💻', name: 'Work'}]}]
          ), props.setReasons([...props.reasons], props.reasons(0).scores.push(mood)))}
        />
        {props.reasons.map((x, index) =>
          <Text key={x.name + index}>
            {x.emoji}
            {x.name}
            {x.scores.length >= 1 && x.scores.reduce((a, b) => a + b, 0) / x.scores.length}
          </Text>
        )}
      </ScrollView>
    </Container>
  )
}
