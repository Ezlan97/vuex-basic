<template>
  <div id="app">
    <h1>Todos</h1>
    <h3>Completed : {{ countCompletedTodos }}</h3>
    <h3>Pending : {{ countNotCompletedTodos }}</h3>
    <todos-list />
    <todo-form />
  </div>
</template>

<script>
import TodosList from './components/todos-list'
import TodoForm from './components/todo-form'

export default {
  name: 'App',
  components: {
    TodosList,
    TodoForm
  },

  computed: {
    countCompletedTodos() {
      return this.$store.getters.completedStatus
    },

    countNotCompletedTodos() {
      return this.$store.getters.notCompletedStatus;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
