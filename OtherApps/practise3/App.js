/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';

const passwordValid = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(10),
  number: Yup.number().required(),
});

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleValidForm = () => {
    const form = {
      name,
      email,
      number,
      password,
    };
    console.log(passwordValid.isValid(form));
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Name:</Text>
        <TextInput
          onChangeText={event => setName(event)}
          style={styles.inputStyles}
        />
        <Text style={styles.heading}>Email:</Text>
        <TextInput
          onChangeText={event => {
            setEmail(event);
          }}
          style={styles.inputStyles}
        />
        <Text style={styles.heading}>Number:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={event => {
            setNumber(Number(event));
          }}
          style={styles.inputStyles}
        />
        <Text style={styles.heading}>Password:</Text>
        <TextInput
          onChangeText={event => {
            setPassword(event);
          }}
          style={styles.inputStyles}
        />
        <TouchableOpacity
          onPress={handleValidForm}
          style={{
            backgroundColor: '#5FD068',
            width: 170,
            borderRadius: 35,
            margin: 50,
          }}>
          <Text style={styles.submitBtn}>Sumbit Button </Text>
        </TouchableOpacity>
      </View>
      {isValid ? (
        <View>
          <Text>Name:{name}</Text>
          <Text>Email:{email}</Text>
          <Text>Number:{number}</Text>
          <Text>Password:{password}</Text>
          <Text>{isValid}</Text>
        </View>
      ) : (
        <View>
          <Text>false:{isValid}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  submitBtn: {
    padding: 15,
    backgroundColor: '#5FD068',
    width: 170,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
  },
  heading: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputStyles: {
    backgroundColor: '#E8E2E2',
    marginHorizontal: 20,
    padding: 5,
    color: '#000000',
  },
});

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import * as Yup from 'yup';

// const passwordValid = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string()
//     .min(4, 'Password must be at least 4 characters')
//     .max(10, 'Password can be at most 10 characters'),
//   number: Yup.number().required('Number is required'),
// });

// export default function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const handleValidForm = () => {
//     const form = {
//       name,
//       email,
//       number: parseInt(number),
//       password,
//     };
//     passwordValid
//       .isValid(form)
//       .then(valid => setIsValid(valid))
//       .catch(error => console.log(error));
//   };

//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Name:</Text>
//         <TextInput onChangeText={setName} />
//         <Text>Email:</Text>
//         <TextInput value={email} onChangeText={setEmail} />
//         <Text>Number:</Text>
//         <TextInput
//           value={number}
//           onChangeText={setNumber}
//           keyboardType="numeric"
//         />
//         <Text>Password:</Text>
//         <TextInput
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={true}
//         />
//         <TouchableOpacity onPress={handleValidForm}>
//           <Text>Submit</Text>
//         </TouchableOpacity>
//       </View>
//       {isValid && (
//         <View>
//           <Text>Name: {name}</Text>
//           <Text>Email: {email}</Text>
//           <Text>Number: {number}</Text>
//           <Text>Password: {password}</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({});
