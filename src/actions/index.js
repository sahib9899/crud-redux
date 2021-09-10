export const insertData = (data) => {
    return{
        type: 'INSERT',
        payload: data
    }
}
export const updateData = (data) => {
    return{
        type: 'UPDATE',
        payload: data
    }
}
export const deleteData = (id) => {
    return{
        type: 'DELETE',
        payload: id
    }
}
