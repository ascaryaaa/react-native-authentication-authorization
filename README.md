Firebase Setup:
1. Add project
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/9bfe01e3-2b68-4b47-a5e2-1d10e36f6932)

2. Add web app
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/010f1e92-4d0d-4713-b80a-a95c2995028d)

3. Register app
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/f6ca3ad8-20ff-4b21-9d21-22942820057a)

4. Add new provider: Native provider Email/Password
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/08c5067a-a07c-474b-a00f-050b2a8bc203)

5. Create handleRegister
`
    const handleRegister = async() => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }
`
log response
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/63ef7739-830c-42f2-aace-3ce2831f0473)

6. Registered
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/e16b3d28-3bc8-4313-b935-34b45a2583c4)

