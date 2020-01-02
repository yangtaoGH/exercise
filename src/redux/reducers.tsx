// 初始化登录信息是一个对象
interface State {
    name: string;
    pwd: string;
    avator: string;
}
interface Action {
    type?: string;
    [key: string]: any;
}

const authorReducer = (state:State, action:Action): State=> {
    if (!state) {
        state = {
            name: '',
            pwd: '',
            avator: ''
        }
        return state
    }
    switch(action.type) {
        case 'EDIT_INFO':
            console.log('执行')
            return {
                ...state,
                name: state.name,
                pwd: state.pwd,
                avator: state.avator
            }
        case "EDIT_NAME":
            return {
                ...state,
                name: state.name
            }
        case "EDIT_PWD":
            return {
                ...state,
                pwd: state.pwd
            }
        case "EDIT_AVA":
            return {
                ...state,
                avator: state.avator
            }
        default: 
            return state;
    }
    
}

const reducerList = {
    authorReducer: authorReducer
}
export default reducerList;

