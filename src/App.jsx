import { defineComponent } from 'vue'
import HelloWorldVue from './components/HelloWorld.vue.js'

export default defineComponent({
  setup() {
    return () => <HelloWorldVue />
  },
})
