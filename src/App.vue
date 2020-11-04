<template>
  <div id="app">
    <h2>하이</h2>
    <button @click="loading()">
      로딩시작 3초
    </button>
    <ValidationProvider rules="number" v-slot="{ errors }">
      <input v-model.trim="val"/>
      <span>{{ errors[0] }}</span>
      {{val}}
    </ValidationProvider>
    <router-view/>
  </div>
</template>

<script>
import bnkBridge from '@/utils/bnkBridge'
import validation from '@/utils/validation'
export default {
  name: 'App',
  data: () => ({
    isMobile:false,
    val:'',
  }),
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  methods:{
    loading(){
        bnkBridge.requestFromWebView("START_LOADING")
      setTimeout(function() { 
        bnkBridge.requestFromWebView("END_LOADING")
      }, 3000);
    },
    onResize () {
      this.isMobile = window.innerWidth < 600
      //추후 가로 세로 계산하여 인치로 변환 고려
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
