<template>
  <div id="app">
    <button @click="loading()">
      로딩시작 3초
    </button>
    <div>
    <span>웹뷰이동</span>
    <input v-model.trim="val"/>
    <button @click="changeWebView(val)">
      다른웹뷰 ->
    </button>
    </div>
        
    <!-- <ValidationProvider rules="number" v-slot="{ errors }"> -->

      <br>
      <!-- <span>{{ errors[0] }}</span> -->
    <!-- </ValidationProvider> -->
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
    },
    changeWebView(url){
      bnkBridge.requestFromWebView("OPEN_WEBVIEW",{action:'SUB',url:url})
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
