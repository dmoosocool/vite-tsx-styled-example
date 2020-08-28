import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const { msg } = props
    return () => <p>{msg}</p>
  },
})
