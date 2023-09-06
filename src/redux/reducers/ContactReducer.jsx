const initialState = [
  {
    id:0,
    name:"RAHUL",
    number:1234567890,
    email:"abc@gmail.com"
  },
  {
    id:1,
    name:"RAHUL",
    number:3456789021,
    email:"rahul@gmail.com"
  },
];

const contactReducer = (state= initialState,action) => {
  switch(action.type){
    case "ADD_CONTACT":
      state = [...state,action.payload];
      return state; 
    case "EDIT_CONTACT":
      const updatedState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
      state = updatedState;
      return state;
    case "DELETE_CONTACT":
      const filterContact = state.filter (contact=>contact.id !== action.payload && contact);
      state = filterContact;
      return state;  
    default:
      return state;
  }
};

export default contactReducer;