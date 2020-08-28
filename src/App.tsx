import { defineComponent } from 'vue'
import Hello from './components/hello'
import Logo from './assets/logo.png'

export default defineComponent({
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={Logo} />
        <Hello msg="Hello Vue 3.0 + Vite" />
      </>
    )
  },
})
