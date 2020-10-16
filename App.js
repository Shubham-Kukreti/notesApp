import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ListNotesScreen from './src/screens/ListNotesScreen'
import {NotesProvider} from './src/context/NotesContext'
import CreateNote from './src/screens/CreateNote'
import ShowNote from './src/screens/ShowNoteScreen'
import EditNote from './src/screens/EditNoteScreen'
const Stack = createStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="notes" 
        component={ListNotesScreen} 
        options={{
          headerTitleAlign:"center",
          title:"All Notes"
        }}
        />
        <Stack.Screen 
        name="create" 
        component={CreateNote} 
        options={{
          headerTitleAlign:"center",
          title:"Create Note"
        }}
        />
        <Stack.Screen 
        name="show" 
        component={ShowNote} 
        options={{
          headerTitleAlign:"center",
          title:"Note"
        }}
        />
        <Stack.Screen 
        name="edit" 
        component={EditNote} 
        options={{
          headerTitleAlign:"center",
          title:"Update Note"
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default ()=>{
  return(
    <NotesProvider>
      <App />
    </NotesProvider>
    
  )
}