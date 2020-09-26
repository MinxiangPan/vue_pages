<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to About Page" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import HelloWorld from '@/components/HelloWorld';

@Options({
  components: {
    HelloWorld
  }
})

export default class About extends Vue {
  
}
</script>
