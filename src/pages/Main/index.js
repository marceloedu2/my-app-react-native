import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Keyboard} from 'react-native'
import {Container, Form, Input, SubmitButton} from './styles'
import api from '../../services/api'

const Main = () => {
  const [state, setState] = useState({
    newUser: '',
    users: []
  })

  const handleAddUsers = async () => {
    const {users, newUser} = state

    const response = await api.get(`users/${newUser}`)

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url
    }

    setState({...state, data})
    Keyboard.dismiss()
    console.tron.log(users)
  }
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitaliza="none"
          placeholder="Adicionar Usuário"
          onChangeText={text => setState({...state, newUser: text})}
          returnKeyType="send"
        />
        <SubmitButton onPress={handleAddUsers}>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>
    </Container>
  )
}

Main.navigationOptions = {
  title: 'Usuários'
}

export default Main
