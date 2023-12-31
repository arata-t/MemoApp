import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Link } from 'expo-router'

const SignUp = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <View>
          <Text style={styles.title}>Sign up</Text>
          <TextInput style={styles.input} value='Email Address' />
          <TextInput style={styles.input} value='Password' />
        </View>
        <Button label='Submit' onPress={() => { Alert.alert('Press from sign_in') }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/log_in' asChild>
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
