import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { auth } from '../../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const handlePress = (email: string, password: string): void => {
  // 登録
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log((userCredential.user.uid))
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { message } = error
      Alert.alert(String(message))
    })
}

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.title}>Sign up</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChange={(event) => { setEmail(event.nativeEvent.text) }}
            autoCapitalize='none'
            keyboardType='email-address'
            placeholder='Email Address'
            textContentType='emailAddress'
          />
          <TextInput
            style={styles.input}
            value={password}
            onChange={(event) => { setPassword(event.nativeEvent.text) }}
            autoCapitalize='none'
            secureTextEntry
            placeholder='password'
            textContentType='password'
          />
        </View>
        <Button label='Submit' onPress={() => { handlePress(email, password) }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/log_in' asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },

  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default SignUp
