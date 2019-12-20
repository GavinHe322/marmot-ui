import "./index.less";
import { createNamespace } from "../utils/index";

const Button = {
  name: "Button",
  props: {
    text: {
      required: true,
      type: String,
    },
  },
  data() {
    return {}
  },
  methods: {

  },
  render() {
    return (
      <div class={createNamespace("button")}>
        1111
      </div>
    )
  },
}

export default Button;
