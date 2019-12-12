<template>
  <li>
    <slot />
  </li>
</template>

<script>
import { ElementMixin } from 'vue-slicksort';

export default {
  name: 'DraggableItem',
  mixins: [ElementMixin],
}
</script>
