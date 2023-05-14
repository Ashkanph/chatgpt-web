<script lang="ts">
  import SelectPredefinedPrompts from './SelectPredefinedPrompts.svelte'

  const inputPrompt = (prompt: string) => {
    input.value = prompt
    input.style.height = 'auto'
    input.style.height = input.scrollHeight + 'px'
  }

  export let input : HTMLTextAreaElement
</script>

{#if input}
<SelectPredefinedPrompts 
  onPredefinedPromptSelect={prompt => inputPrompt(prompt)}
  label="prompt" />

<div class="columns is-centered">
  <div class="column is-half has-text-centered">or type below:</div>
</div>
{/if}