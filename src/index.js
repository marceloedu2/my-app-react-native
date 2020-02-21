import React from 'react'
import {StatusBar} from 'react-native'
import 'react-native-gesture-handler'
import './config/ReactotronConfig'
import Routes from './routes'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1285de" />
      <Routes />
    </>
  )
}
export default App
