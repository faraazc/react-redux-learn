export default function (state=null,action) {
    switch(action.type) {
        case "id":
        return action.payload
    }
    return state
}