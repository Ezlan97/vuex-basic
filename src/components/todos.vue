<template>
  <div>
    <div style="width: 250px; margin:5px auto;">
      <div style="display:flex; justify-content:space-between">
        <span :class="{completed: todo.completed}" @click="updateStatus()">{{ todo.title }}</span>
        <button class="btn" @click="deleteTodo()">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],

  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
    updateStatus() {
      this.$store.dispatch("updateStatus", this.todo);
    }
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>