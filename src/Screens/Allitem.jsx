import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Allitem = ({data}) => {
  return (
    <View>
      <View style={styles.itemcontainer}>
        <Text style={styles.heading}>Item</Text>
        <Text style={styles.heading}> Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.itemcontainer,
              {backgroundColor: item.stock < 15 ? '#f8d7da' : 'green'},
            ]}>
            <Text >{item.name}</Text>
            <Text>
              {item.stock} {item.unit}
            </Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Allitem;

const styles = StyleSheet.create({
  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemtext: {
    fontSize: 16,
    color: '#333',
  },
});
