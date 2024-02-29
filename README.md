Firebase Setup:
1. Add project
2. Add web app and register app
3. Add new provider: Native provider Email/Password

![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/08c5067a-a07c-474b-a00f-050b2a8bc203)

5. Create handleRegister
```
    const handleRegister = async() => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch(error) {
            console.log(error)
            Alert.alert('Error on Register', error.message)
        }
    }
```

log response:

![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/87eee5f5-d2e4-453a-8b24-b647620b9b43)

6. Registered
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/386e16de-3c11-46cf-b71e-baadd8dd9212)

Install Async Storage
```
npm i @react-native-async-storage/async-storage
```


