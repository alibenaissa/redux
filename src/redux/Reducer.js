

const initialState = {

Todos:[],
}
export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'ADD':
            return {
                   ...state,Todos :[...state.Todos,action.payload]

            };
            case 'delete':
                return {
                       ...state,
                       Todos : state.Todos.filter(todo =>todo.id!== action.payload)
    
                };
           
    
        default: return state ;
            
    }






}

        
    