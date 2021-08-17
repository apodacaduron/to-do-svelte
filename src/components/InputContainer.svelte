<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ submit: string }>();

  let value = "";

  const handleSubmit = () => {
    dispatch("submit", value);
    value = "";
  };
</script>

<template>
  <div class="input-container">
    <form on:submit|preventDefault={handleSubmit}>
      <input bind:value type="text" name="input" />
      <button type="submit">▶</button>
    </form>
  </div>
</template>

<style>
  .input-container {
    --size: 32px;
    width: 100%;
    height: 56px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 4px 6px 6px rgba(0, 0, 0, 0.1);
    padding-bottom: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .input-container > form {
    display: flex;
  }

  .input-container > form > input {
    border-radius: 8px;
    height: var(--size);
    padding: 0 16px;
    margin: 0 16px 0 0;
  }

  .input-container > form > button {
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
</style>
