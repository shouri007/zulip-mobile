import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Touchable } from './';

export const colorHashFromName = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = hash * 31 + name.charCodeAt(1);
  let colorHash = hash % 0xffffff;
  if (colorHash < 0x100000) colorHash += 0x100000;
  return `#${colorHash.toString(16)}`;
};

export const initialsFromName = (name: string) =>
  name.match(/\S+\s*/g).map(x => x[0].toUpperCase()).join('');

export default ({ name, size, isCircular, onPress }) => {
  const frameStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    height: size,
    width: size,
    borderRadius: isCircular ? size / 2 : size / 8,
    backgroundColor: colorHashFromName(name),
  };
  const textStyle = {
    color: 'white',
    fontSize: size / 3,
  };

  return (
    <Touchable onPress={onPress}>
      <View style={frameStyle}>
        <Text style={textStyle}>{initialsFromName(name)}</Text>
      </View>
    </Touchable>
  );
};
