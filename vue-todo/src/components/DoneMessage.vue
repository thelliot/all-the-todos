<template>
  <div class="done-message">
    <h3 class="heading heading--large done-message__emoji">{{message.emoji}}</h3>
    <h3 class="heading heading--small done-message__text">{{message.text}}</h3>
  </div>
</template>

<script>
import { DONE_MESSAGES } from '../constants';
import { randomIndex } from '../helpers/utils';

export default {
  name: 'DoneMessage',
  computed: {
    message() {
      return randomIndex(DONE_MESSAGES)
    }
  },
}
</script>

<style lang="scss" scoped>
.done-message {
  text-align: center;
  &__emoji {
    font-size: 2.75rem;
  }
  &__text {
    white-space: pre-wrap;
  }
  .heading {
    margin: 0;
  }
}
</style>