

export const crudOperation = (state = [], action) => {
  switch (action.type) {
    case "INSERT":
      return [...state, action.payload];

    case "DELETE":
        return state.filter((state)=> {
            return state.id !== action.payload;
        })

    case "UPDATE":
        const index = state.findIndex((item)=>item.id == action.payload.id)
        const newData = [...state]
        newData[index] = action.payload;
        return newData;
        

    default:
      return state;
  }
};
