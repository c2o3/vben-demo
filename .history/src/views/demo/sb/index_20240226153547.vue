<template>
  <a-form>
    <a-row v-for="item in 4">
      <a-col :span="2.5">
        <a-radio-group>
          <a-radio>12112221</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="12">
        <a-form-item>
          <a-input />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
  import { defineComponent } from 'vue'
  import { Form, Input, Radio, Row, Col } from 'ant-design-vue'

  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
      ARow: Row,
      ACol: Col,
    },
    setup() {
    },
  })
</script>
