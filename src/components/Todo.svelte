<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  import type { TodoAction, TodoType } from "../pages/types";

  const dispatch = createEventDispatcher<{ [value: string]: TodoType }>();

  export let todo: TodoType = undefined;

  const handleCheckbox = (action: TodoAction) => {
    dispatch(action, { ...todo, completed: !todo.completed });
  };
</script>

<template>
  <div transition:fade class="todo">
    <div
      class="todo__button"
      tabindex={todo.id}
      on:click={() => handleCheckbox("checked")}
    >
      <div class="todo__button__checkbox">
        <input type="checkbox" checked={todo.completed} />
      </div>
      <div class="todo__button__content">
        <div class="todo__button__content__text">{todo.text}</div>
        <div class="todo__button__content__date">{todo.date}</div>
      </div>
    </div>
    <button class="todo__delete" on:click={() => handleCheckbox("deleted")}
      >x</button
    >
  </div>
</template>

<style>
  .todo {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    padding: 0 16px;
    background: white;
  }

  .todo__button {
    display: flex;
    width: 100%;
    padding: 16px 0;
  }

  .todo__button__checkbox {
    margin: 0 16px 0 0;
  }

  .todo__button__content {
    width: 100%;
  }

  .todo__button__content__date {
    color: gray;
    font-size: 14px;
  }

  .todo__delete {
    margin: 0 0 0 16px;
    padding: 0;
    background: none;
    height: 32px;
    width: 32px;
    line-height: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
</style>
