import AsyncStorage from "@react-native-async-storage/async-storage"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"

const Home = ({navigation}) => {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        AsyncStorage
        .getItem('token') //check token existed
        .then(token => {
            if (token !== null) { //if token existed
                return fetch('https://api.jikan.moe/v4/top/anime')
            }
            return Promise.reject('Not Authorize') //if token not existed
        })
        .then(response => response.json()) //convert response token
        .then(({data}) => setAnimes(data))
    },[])
    
    const handleLogout = () => {
        AsyncStorage
        .removeItem('token')
        .then(() => navigation.navigate('Login'))
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            {animes.map(({title}) => <Text>{title}</Text>)}
            <TouchableOpacity title='login' style={styles.button} onPress={handleLogout}>
                <Text style={{color:'white'}} >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#4287f5',
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
        margin: 5,
    }
});

export default Home;