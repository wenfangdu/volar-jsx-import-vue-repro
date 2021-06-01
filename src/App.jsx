import HelloWorldVue from '@/components/HelloWorld.vue.js'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => <HelloWorldVue />
  },
})
