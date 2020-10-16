import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {NotesContext} from '../context/NotesContext'
const EditNote = ({navigation,route})=>{
    const id = route.params.id 
    const {state,dispatch} = useContext(NotesContext)
    const ParticularNote = state.find((record)=>{
        return record.id === id
    })
    const [title,setTitle] = useState(ParticularNote.title)
    const [content,setContent] = useState(ParticularNote.content)
    return(
        <View style={{flex:1,margin:8}}>
            <Text style={{fontSize:22}}>Update Title</Text>
            <TextInput 
                value={title}
                onChangeText={(text)=>setTitle(text)}
                style={styles.input}
            />
            <Text style={{fontSize:22}}>Update content</Text>
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
                    dispatch({type:"UPDATE",payload:{id,title,content}})
                    navigation.navigate("notes")
                }}
            >
                <Text style={{fontSize:22,color:"white",textAlign:"center"}}>Update Note</Text>
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

export default EditNote