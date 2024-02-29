# Firebase Setup:
1. Add project: Create a new project in the Firebase console.
2. Add web app and register app: After creating the project, add a web app to it. Register your app by providing the necessary details such as the app's nickname and optional configurations.
3. Add new provider: Native provider Email/Password: In the Firebase console, navigate to the Authentication section and enable the Email/Password provider. This allows users to sign in using their email and password credentials.

![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/08c5067a-a07c-474b-a00f-050b2a8bc203)

# Login and Register
For handling user authentication, you can utilize Firebase Authentication in your React Native application. Below are the steps to implement login and register functionalities:
1. Initialize Authentication
```
    const auth=FIREBASE_AUTH
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
```
2. Input Fields
```
            <TextInput 
                style={styles.input} 
                placeholder="email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.input} 
                placeholder="password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}    
            />
```

## Register
1. Create handleRegister
```
    const auth=FIREBASE_AUTH
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

2. log response example:
```
 LOG  {"_tokenResponse": {"displayName": "", "email": "jhon@gmail.com", "expiresIn": "3600", "idToken": "eyJhbG
```


3. Registered on firebase
![image](https://github.com/ascaryaaa/react-native-authentication-authorization/assets/73589875/386e16de-3c11-46cf-b71e-baadd8dd9212)

## Login
1. Install Async Storage
```
npm i @react-native-async-storage/async-storage
```
2. Create handle Login function
```
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password) //1. sign in user
        .then(response => response.user.getIdToken()) //2. call user id token
        .then(token => AsyncStorage.setItem('token', token) ) //3. store token
        .then(() => {
            Alert.alert('Login Success!', 'Welcome!')
        }) 
    }
```
3. Create new screen and add it to navigation stack
```
import Home from './screens/Home';
///
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title:'Home',
            headerShown: false,
            headerTitleAlign: 'center'
          }}
        />
```
4. Navigate login to the new screen
```
            Alert.alert('Login Success!', 'Welcome!', [
                {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Home')
                }
            ])
```
```
const Login = ({navigation}) => {

}
```
Final loginHandle Code:
```
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password) //1. sign in user
        .then(response => response.user.getIdToken()) //2. call user id token
        .then(token => AsyncStorage.setItem('token', token) ) //3. store token
        .then(() => {
            Alert.alert('Login Success!', 'Welcome!', [
                {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Home')
                }
            ])
        }) 
    }
```
