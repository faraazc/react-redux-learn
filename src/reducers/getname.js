export default function (state=null,action) {
    switch(action.type) {
        case "name":
        return action.payload
    }
    return state
}