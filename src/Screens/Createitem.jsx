import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';

const Createitem = ({data, setdata}) => {
  const [itemname, setitemname] = useState('');
  const [itemquantity, setitemquantity] = useState('');
  const [isedit, setisedit] = useState(false);
  const [itemid, setitemid] = useState(null);
  

  //add item fuctionality 
  const additemHandler=() => {
      if (itemname === '' || itemquantity === '') {
        alert('Please fill all the fields');
        return;
      }
      const newItem = {
        id: Date.now(),
        name: itemname,
        stock: parseInt(itemquantity),
        unit: 'KG',
      };
      setdata([...data, newItem]);
      //for  Clear the input fields
      setitemname('');
      setitemquantity('');
      setisedit(false);
    
  }

  const deletyeHandler=(id)=>{
      if (data.length === 0) {
        alert('No items to delete');
        return;
      }
      setdata(data.filter(item => item.id!== id));
  }

   const editItemHandler=(item)=>{
      setisedit(true);
      setitemname(item.name);
      setitemid(item.id);
      
   }
   const updateitemhandler=()=>{
      if (itemname === '' || itemquantity === '') {
        alert('Please fill all the fields');
        return;
      }
      const updatedItem = {
        id: itemid,
        name: itemname,
        stock: parseInt(itemquantity),
        unit: 'KG',
      };
      setdata(data.map(item => (item.id === itemid ? updatedItem : item)));
      //for  Clear the input fields
      setitemname('');
      setitemquantity('');
      setisedit(false);
   } 
 
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter the item name..."
        style={styles.input}
        value={itemname}
        onChangeText={item => setitemname(item)}
      />
      <TextInput
        placeholder="Enter the item Quantity.."
        style={styles.input}
        value={itemquantity}
        onChangeText={item => setitemquantity(item)}
      />
      <Pressable
        onPress={() => (isedit ? updateitemhandler() : additemHandler())}>
        <Text style={styles.btnText}>{isedit ? 'edit Item' : 'add Item'}</Text>
      </Pressable>

      <View style={styles.listcontainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemcontainer,
                {backgroundColor: item.stock < 15 ? '#f8d7da' : 'green'},
              ]}>
              <Text>{item.name}</Text>
              <Text>
                {item.stock} {item.unit}
              </Text>
              {/* edit and delete */}
              {/* onpress par ham kispe click kaer rahe uski id item.id me rahti h */}
              <View style={{flexDirection: 'row', gap: 10}}>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text>edit</Text>
                </Pressable>
                <Pressable onPress={() => deletyeHandler(item.id)}>
                  <Text>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Createitem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#FE691E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  listcontainer: {
    paddingVertical: '4%',
  },

  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
    fontSize: 20,
    color: '#333',
  },

  itemtext: {
    fontSize: 16,
    color: '#333',
  },
});
