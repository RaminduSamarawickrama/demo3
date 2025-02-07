import { StatusBar } from 'expo-status-bar';
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import ICustomer from "./model/ICustomer";

export default function App() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [customer, setCustomer] = useState<ICustomer[]>([]);

    function handleSubmit() {
        const newCustomer: ICustomer = {name, email, phone};
        setCustomer([...customer, newCustomer]);
    }

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.container}>
                <View style={styles.dataInput}>
                    <TextInput onChangeText={setName} placeholder="Name"/>
                    <TextInput onChangeText={setEmail} placeholder="Email"/>
                    <TextInput onChangeText={setPhone} placeholder="Phone"/>
                    <Button title='Add' onPress={handleSubmit} />
                </View>
                <ScrollView>
                    <View>
                        {customer.map((customer: ICustomer) => (
                            <View key={customer.email} style={styles.dataDisplay}>
                                <Text>{customer.name}</Text>
                                <Text>{customer.phone}</Text>
                                <Text>{customer.email}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout:{
      paddingTop:100,
      flex:1,
  },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    dataInput: {
      flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        width:'80%',
        justifyContent: 'space-between',
    },
    dataDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        width:'100%',
        justifyContent: 'space-evenly',
    }
});
