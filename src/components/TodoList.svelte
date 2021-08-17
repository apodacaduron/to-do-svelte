<template>
  <div class="todo-list">
    <slot />
  </div>
</template>

<style>
  .todo-list {
    max-width: 1024px;
    padding: 24px;
    margin: auto;
    overflow-y: auto;
  }
</style>
