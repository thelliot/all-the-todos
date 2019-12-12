<template>
  <ol class="">
    <slot />
  </ol>
</template>

<script>
import { ContainerMixin } from 'vue-slicksort';
export default {
  name: 'SortableContainer',
  mixins: [ContainerMixin],
}
</script>
