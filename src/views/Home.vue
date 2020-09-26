<template>
  <div class="home" :style="cssVars">
    <div class='leftEmpty'></div>
    <div class='rightEmpty'></div>
    <div class="content">Content</div>
    <!-- <About data={this.state.resumeData.main}></About>
    <Portfolio data={this.state.resumeData.resume}></Portfolio>
    <Contact data={this.state.resumeData.main}></Contact> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from 'axios';

@Options({
  components: {
  },
  computed: {
    cssVars() {
      return {
        '--grid-template-columns' : this.gridTemplateColumns
      }
    }
  },
  methods: {
    resizeWindow() {
      if(window.innerWidth < 500 && this.gridTemplateColumns != '1fr 10fr 1fr'){
        this.gridTemplateColumns = '1fr 10fr 1fr';
      }
      else if(window.innerWidth >= 500 && this.gridTemplateColumns != '1fr 2.5fr 1fr'){
        this.gridTemplateColumns = '1fr 2.5fr 1fr';
      }
    }
  },
  mounted() {
    axios.get('/resumeData.json')
      .then(res=>(this.resumeData=res.data))
      .catch(err=>alert('Error: loading data failure, please reload page.'));
    this.resizeWindow();
    window.addEventListener("resize", this.resizeWindow);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeWindow);
  },
})

export default class Home extends Vue {
  data() {
    return {
      resumeData: {},
      gridTemplateColumns: '1fr 2.5fr 1fr'
    };
  }
}
</script>

<style scoped>
.home {
  grid-template-columns: var(--grid-template-columns)
}
</style>

