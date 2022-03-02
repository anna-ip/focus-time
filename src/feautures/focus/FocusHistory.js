import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/color';



export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return null;

    const renderItem = ({ item }) => {
  return <Text style={styles.item}>-{item}</Text>;
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
});
