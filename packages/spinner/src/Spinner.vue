<template>
  <div :class="$style.root">
    <span :class="$style.spinner" ref="progress"></span>
    <p v-if="text" :class="$style.text" ref="text">{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Spinner',
    props: {
      text: {
        type: String,
        required: false,
      },
    }
  };
</script>

<style lang="scss" module>
$spinner__primary-color: #0057ff !default;
$spinner__color-white: #fff !default;
$spinner__color-black: #000 !default;
$spinner__text-font-size: 16px !default;
$spinner__height: 35px !default;

@keyframes spinner__spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.root {
  height: $spinner__height;
  position: relative;
}

.spinner {
  animation: spinner__spin 1.4s infinite linear;
  background: linear-gradient(50deg, $spinner__primary-color 25%, rgba($spinner__primary-color, 0) 65%);
  border-radius: 50%;
  height: $spinner__height;
  position: absolute;
  width: $spinner__height;

  &::before,
  &::after {
    content: '';
    left: 0;
    position: absolute;
    top: 0;
  }

  &::before {
    background: $spinner__primary-color;
    border-radius: 100% 0 0;
    height: 50%;
    width: 50%;
  }

  &::after {
    background: $spinner__color-white;
    border-radius: 50%;
    bottom: 0;
    height: 75%;
    margin: auto;
    right: 0;
    width: 75%;
  }
}

.text {
  color: $spinner__color-black;
  font-size: $spinner__text-font-size;
  margin-bottom: 0;
  margin-top: $spinner__text-font-size * -.5;
  padding-left: 50px;
  position: relative;
  top: 50%;
}

</style>
