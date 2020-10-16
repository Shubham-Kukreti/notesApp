export const initialState = [
    {id:1,title:"test1",content:"testing1"}
]



export const reducer = (state,{type,payload})=>{
    switch(type){
        case "ADD":
            return[...state,{
                id:Math.random(), 
                title:payload.title,
                content:payload.content
            }
        ]
        case "REMOVE":
            return state.filter((note)=> payload !== note.id)
        
        case "UPDATE":
            return state.map(record=>{
                if(payload.id === record.id)
                return payload
                else
                return record
            })
    }
    return state
}