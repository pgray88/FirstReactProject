const initialState = {
    list: [
        {
        id: 1,
        name:'John Doe',
        email: 'johndoe@gmail.com',
        number: '555-867-5309'
        },
        {
        id: 2,
        name:'Emily Blunt',
        email: 'emily.blunt@yahoo.com',
        number: '555-867-5309'
        },
        {
        id: 3,
        name:'Michael Scott',
        email: 'mikescott@aol.com',
        number: '555-867-5309'
        },
        {
        id: 4,
        name:'Bernie Sanders',
        email: 'bernie@gmail.com',
        number: '555-867-5309'
        },
        {
        id: 5,
        name:'Rhianna',
        email: 'rhirhi@gmail.com',
        number: '555-867-5309'
        },
        {
        id: 6,
        name:'Denzel Washington',
        email: 'denwash@hotmail.com',
        number: '555-867-5309'
        },
        
    ],
    name: '',
    email: '',
    number: '',
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LIST':
        const listItem = state.list.filter( item => item.id ===parseInt(action.id, 10))
        return {
            ...state,
            name: listItem[0].name,
            email: listItem[0].email,
            number: listItem [0].number, 
        }

        case  'CAPTURE_INPUT':

        return {
            ...state,
            [action.payload.name]:action.payload.value
        }
        case  'UPDATE':
        const updatedList = state.list.map(item => {
            if (item.id===parseInt(action.id, 10)) {
                item.name = state.name;
                item.email = state.email;
                item.number =state.number;
            }
            return item;
            list: updatedList
        });
         return {
            ...state,
         
        }
        case  'DELETE':
            const newList = state.list.filter(item => item.id !==parseInt(action.id, 10));
        return {
           ...state,
           list: newList
       
       }
       case  'ADD':
        let id;
        state.list.length > 0 ? id = state.list[state.list.length -1].id + 1: 1;
        const newContact = {id, name: state.name, email: state.email, number: state.number}
       return {
          ...state,
          list: state.list.concat(newContact)
      
      }
      default: 
      return state;
    }


    return state;
}

export default reducer;