<template>
  <div>
    <br>
    <input type="text" v-model="newTodoItem">
    <button @click="addNewTodoItem()">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    }
  },

  methods: {
    addNewTodoItem() {
      this.$store.dispatch('addNewTodo', this.newTodoItem)
    }
  }
}
</script>

<style>

</style>