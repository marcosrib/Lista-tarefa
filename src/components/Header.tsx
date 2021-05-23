import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import dark from '../theme/dark'
import light from '../theme/light'

interface Props {
  theme: boolean
}
export function Header({ theme }: Props) {
  return (
    <View style={[styles.header, theme ? { backgroundColor: dark.theme.backgroundAlt } : { backgroundColor: light.theme.backgroundAlt }  ]}>
      <Text style={[styles.headerText, theme ? { color: dark.theme.white } : { color: light.theme.white } ]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }, theme ? { color: dark.theme.white } : { color: light.theme.white } ]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
