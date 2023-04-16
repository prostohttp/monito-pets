import { Form, Field } from "vee-validate";

export default {
  install(app) {
    app.component("VeeForm", Form);
    app.component("VeeField", Field);
  },
};
