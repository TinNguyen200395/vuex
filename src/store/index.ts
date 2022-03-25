import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const storeData = {
    // dùng để hiện thị dữ liệu và khai báo các biến
    state:{
        todos:[
            {id:1, title: 'Viec 1', completed:true},
            {id:2, title: 'Viec 2', completed:false},
            {id:3, title: 'Viec 3', completed:false}
        ],
        auth:{
            isAuthenticated: true
        }
    },
    // dùng để nhận dữ liệu
    getters:{
        getList (state:any) {
            return state.todos
        },
        getListDone (state:any) {
            return state.todos.filter((todo: { completed: any; }) => todo.completed)
        },
        getAuth (state:any) {
            return state.auth
        },
        progress (state:any) {
            return  Math.round(state.todos.filter((todo: { completed: any }) => todo.completed).length/
             state.todos.length*100)
        }
    },
    // dùng để xử lý giao diện các nút sự kiện ....
    mutations:{
        TOGGLE_AUTH(state:any){
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
        MARK_COMPLETE(state:any,todoId:any){
            state.todos.map((todo: any) => {
                if(todo.id === todoId) todo.completed = !todo.completed
                return todo
            })
        }


    },
    // dùng để ây dựng các method 
    actions:{


    }
}
const store = new Vuex.Store(storeData)
export default store
