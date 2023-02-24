import { createStore } from "vuex";

const store = createStore({
    state: {
        count: 0,
        items: [],
        snackbar: {
            isOpen: false,
            text: '',
            timeout : 1000,
        }
    },
    mutations: {
        addPosting(state, posting) {
            state.snackbar.isOpen = true
            state.snackbar.text = 'Posting success'
            setTimeout(()=>{  
                state.items.push({
                    title: posting,
                    status: true
                })
            },1000)
        },

        deleteItems(state, payload) {
            state.snackbar.isOpen = true
            state.snackbar.text = 'Delete success'
            setTimeout(() =>{
                let indexItems = state.items.indexOf(store.getters.itemsTodo(payload.title))
                state.items.splice(indexItems, 1)
            },1000)
        },

        deleteAllItems(state, payload){
            state.snackbar.isOpen = true
            state.snackbar.text = 'Delete all success'
            setTimeout(() => {
                state.items.splice(0, state.items.length)
            },1000)
        },
    },
    getters: {
        itemsTodo: (state) => (todoTitle) => {
            return state.items.find(item => item.title === todoTitle)
        }
    },
    actions: {
    }
})

export default store