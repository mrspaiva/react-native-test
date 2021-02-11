import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7499',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20
  },

  user: {
    width: '94%',
    height: 35,
    borderWidth: 0.8,
    borderColor: '#fff',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    justifyContent: 'center'
  },

  userText: {
    color: '#fff',
    paddingHorizontal: 14
  },

  password: {
    width: '94%',
    height: 35,
    borderWidth: 0.8,
    borderColor: '#fff',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopWidth: 0,
    justifyContent: 'center',
    marginBottom: 20
  },

  passwordText: {
    color: '#fff',
    paddingHorizontal: 14
  },

  button: {
    width: '94%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: '#7499'
  }
})