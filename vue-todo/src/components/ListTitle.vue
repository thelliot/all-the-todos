<template>
  <h2>{{title}}</h2>
</template>

<script>
export default {
  name: 'ListTitle',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>
