<script lang="ts">
  export let fontWeight = 500;
  import { sampleTextHtml } from '../stores/stores';
  import TextConvert from './TextConvert.svelte';
</script>

<div
  class="flex justify-between mb-10 pb-10 border-b-2 border-dashed leading-7 border-gray-600 dark:border-white"
>
  <section class="flex-1 px-5">
    <h2 class="text-2xl mb-3" style="font-weight: {fontWeight}">font-weight: {fontWeight}</h2>
    <div class="fw-{fontWeight}">
      {@html $sampleTextHtml}
    </div>
  </section>
  <section class="flex-1 px-5">
    <h2 class="text-2xl mb-3" style="font-variation-settings: 'wght' {fontWeight}">
      font-variation-settings: 'wght' : {fontWeight}
    </h2>
    <div class="fvs-{fontWeight}">
      {@html $sampleTextHtml}
    </div>
  </section>
</div>

<style lang="scss">
</style>
