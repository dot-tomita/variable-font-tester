<script lang="ts">
	import { fly,fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
  import { theme,defaultFontWeight,defaultSampleText } from '../stores/stores';
	const dispatch = createEventDispatcher();
  
  let toggleTheme = $theme === 'dark'
  let markdownInput = $defaultSampleText

  const handleToggleTheme = () => {
    if(toggleTheme) {
      theme.set('normal')
    } else {
      theme.set('dark')
    }
  }

  const handleCancel = () => {
    dispatch('close')
  }
  const handleSave = () => {
    defaultSampleText.set(markdownInput)
    dispatch('close')
  }
</script>


<div transition:fade class="fixed w-full h-full top-0 left-0 z-40  bg-gray-800   text-white  bg-opacity-80 dark:bg-opacity-80 flex items-center justify-center">
  <div transition:fly="{{ y: -500, duration: 500 }}"  class="w-9/12 mx-auto ">

    <div class="flex justify-left mb-7">
      <div>
        <div class="relative inline-block w-10 mr-2 align-middle select-none">
          <input type="checkbox" name="ToggleTheme" id="ToggleTheme" on:change={handleToggleTheme} bind:checked={toggleTheme} class="checked:bg-gray-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
              <label for="ToggleTheme" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
              </label>
          </div>
          <span class="text-white font-bold">
              dark theme
          </span>
      </div>
      <div class="ml-7">
        <div class="flex items-center select-none">
          <input type="range" class="mr-2 bg-white" min="100" max="900" step="100" bind:value={$defaultFontWeight}/>
          <span class="text-white font-bold">
              default font-weight: {$defaultFontWeight}
          </span>
        </div>
      </div>
    </div>

    <div>
      <h1 class="text-xl font-bold mb-3">input markdown and click save to edit sample text.</h1>
      <label class="text-gray-700" for="name">
        <textarea class="appearance-none border border-gray-300 w-full h-96 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:border-transparent" id="comment" placeholder="Edit with markdown" name="comment" rows="5" cols="40" bind:value={markdownInput} />
      </label>
    </div>
  
    <div class="flex justify-between">
      <button on:click={handleCancel} type="button" class="mt-5 mr-5 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">cancel</button>
      <button on:click={handleSave} type="button" class="mt-5 ml-5 py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">save</button>
    </div>
  </div>
</div>