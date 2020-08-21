<template>
  <div>
    <div style="width: 250px; margin:5px auto;">
      <div style="display:flex; justify-content:space-between">
        <span :class="{completed: todo.completed}" @click="updateStatus(todo)">{{ todo.title }}</span>
        <button class="btn" @click="deleteTodo(todo)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ["todo"],

  methods: {
    ...mapActions({
      deleteTodo: 'deleteTodo',
      updateStatus: 'updateStatus'
    })
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>