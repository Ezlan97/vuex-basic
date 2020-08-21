<template>
  <div>
    <todos v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>  
</template>

<script>
import Todos from './todos'

export default {
  components: {
    Todos
  },

  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>