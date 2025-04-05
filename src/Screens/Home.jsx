import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Allitem from './Allitem';
import Createitem from './Createitem';
import { SafeAreaView } from 'react-native-safe-area-context';




const Home = () => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
   {id: 1, name: 'Wheat', stock: 30, unit: 'KG'},
   {id: 2, name: 'Rice', stock: 10, unit: 'KG'},
   {id: 3, name: 'Sugar', stock: 7, unit: 'KG'},
   {id: 4, name: 'Salt', stock: 3, unit: 'KG'},
   {id: 5, name: 'Lentils', stock: 8, unit: 'KG'},
   {id: 6, name: 'Flour', stock: 4, unit: 'KG'},
   {id: 7, name: 'Corn', stock: 50, unit: 'KG'},
   {id: 8, name: 'Barley', stock: 9, unit: 'KG'},
   {id: 9, name: 'Chickpeas', stock: 5, unit: 'KG'},
   {id: 10, name: 'Oats', stock: 2, unit: 'KG'},
 ]);

return (
    < SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Inventory Manager</Text>
      <View style={styles.btncontainer}>
        <Pressable
          style={[styles.button, view === 0 && styles.activeButton]}
          onPress={() => setview(0)}>
          <Text style={[styles.buttonText, view === 0 && styles.activeText]}>
            All items
          </Text>
        </Pressable>

        <Pressable
          style={[styles.button, view === 1 && styles.activeButton]}
          onPress={() => setview(1)}>
          <Text style={[styles.buttonText, view === 1 && styles.activeText]}>
            StockOut
          </Text>
        </Pressable>

        <Pressable
          style={[styles.button, view === 2 && styles.activeButton]}
          onPress={() => setview(2)}>
          <Text style={[styles.buttonText, view === 2 && styles.activeText]}>
            Add item
          </Text>
        </Pressable>
      </View>

      {view === 0 && <Allitem data={data} />}
      {view === 1 && <Allitem data={data.filter((item)=>item.stock<20)} />}
      {view === 2 && <Createitem data={data} setdata={setdata} />}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  btncontainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  activeButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    color: 'green',
  },
  activeText: {
    color: 'white',
  },
});
