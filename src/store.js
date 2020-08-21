import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                title: 'learn vue router',
                completed: false
            },
            {
                title: 'Learn vuex',
                completed: false
            }
        ]
    },

    mutations: {
        NEW_TODO(state, todoItem) {
            state.todos.push({
                title: todoItem,
                completed: false
            })
        },

        DELETE_TODO(state, todoItem) {
            let index = state.todos.indexOf(todoItem)
            state.todos.splice(index, 1);
        },

        UPDATE_STATUS(state, todoItem) {
            todoItem.completed = !todoItem.completed
        }
    },    

    actions: {
        addNewTodo({commit}, todoItem) {
            commit('NEW_TODO', todoItem)
        },

        deleteTodo({commit}, todoItem) {
            commit('DELETE_TODO', todoItem);
        },

        updateStatus({commit}, todoItem) {
            commit('UPDATE_STATUS', todoItem);
        }
    },

    getters: {
        completedStatus(state) {
            return state.todos.filter(todo => {
                return todo.completed === true;
            }).length;
        },

        pendingStatus(state) {
            return state.todos.filter(todo => {
                return todo.completed === false;
            }).length;
        }
    }
});