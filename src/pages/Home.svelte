<script lang="ts">
  import { onMount } from "svelte";
  import type { TodoType } from "./types";

  import InputContainer from "../components/InputContainer.svelte";
  import TodoList from "../components/TodoList.svelte";
  import Todo from "../components/Todo.svelte";

  let todos: TodoType[] = [];

  const onSubmit = (todo: CustomEvent<string>) => {
    const newTodo: TodoType = {
      id: Math.floor(Math.random() * Date.now()),
      text: todo.detail,
      completed: false,
      date: Date().toString(),
    };
    todos = [...todos, newTodo];
    updateLocalStorage();
  };

  const onTodoChecked = (todo: CustomEvent<TodoType>) => {
    const todoIdx = todos.findIndex((_todo) => _todo.id === todo.detail.id);

    todos[todoIdx] = todo.detail;
    updateLocalStorage();
  };

  const onTodoDeleted = (todo: CustomEvent<TodoType>) => {
    todos = todos.filter((_todo) => _todo.id !== todo.detail.id);
    updateLocalStorage();
  };

  const updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  onMount(async () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
  });
</script>

<template>
  <div class="todo-app">
    <div class="todo-app__list">
      <TodoList>
        {#each todos as todo}
          <Todo {todo} on:checked={onTodoChecked} on:deleted={onTodoDeleted} />
        {/each}
      </TodoList>
    </div>
    <div class="todo-app__input-container">
      <InputContainer on:submit={onSubmit} />
    </div>
  </div>
</template>

<style>
  .todo-app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f7fa;
  }

  .todo-app > .todo-app__list {
    height: calc(100% - 88px);
    overflow-y: auto;
  }

  .todo-app > .todo-app__input-container {
    flex: 0;
  }
</style>
