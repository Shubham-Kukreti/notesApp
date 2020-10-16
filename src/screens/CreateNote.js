import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {NotesContext} from '../context/NotesContext'
const CreateNote = ({navigation})=>{
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const {state,dispatch} = useContext(NotesContext)
    return(
        <View style={{flex:1,margin:8}}>
            <Text style={{fontSize:22}}>Enter Title</Text>
            <TextInput 
                value={title}
                onChangeText={(text)=>setTitle(text)}
                style={styles.input}
            />
            <Text style={{fontSize:22}}>Enter content</Text>
            <TextInput 
                value={content}
                onChangeText={(text)=>setContent(text)}
                style={styles.input}
                numberOfLines={3}
                multiline={true}
            />
            <TouchableOpacity
                style={{backgroundColor:"blue",
                marginTop:30,
                padding:12,
                marginHorizontal:30,
                borderRadius:15,
            }}
                onPress={()=>{
                    dispatch({type:"ADD",payload:{title,content}})
                    navigation.goBack()
                }}
            >
                <Text style={{fontSize:22,color:"white",textAlign:"center"}}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        marginVertical:8
    }
})

export default CreateNote