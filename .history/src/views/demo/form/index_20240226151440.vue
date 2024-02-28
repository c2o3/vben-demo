<template>
  <div class="w-3/5 h-60 absolute left-40 top-20">
    <a-form>
      <a-row class="mt-5" v-for="item in formList" :key="item.id">
        <!-- 单选框列 -->
        <a-col :span="2.5">
          <a-form-item>
            <a-radio-group>
              <a-radio value="true">{{ item.radioLabel }}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <!-- 输入框列 -->
        <a-col :span="10">
          <a-form-item label="选项">
            <a-input />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'
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
      const formModel = reactive({
        
      })
      const formList = [
        { id: '1', model: '', radioValue: '1', radioLabel: '选项A' },
        { id: '2', model: '', radioValue: '0', radioLabel: '选项B' },
        { id: '3', model: '', radioValue: '0', radioLabel: '选项C' },
        { id: '4', model: '', radioValue: '0', radioLabel: '选项D' },
      ]
    },
  })
</script>
<style lang="scss" scoped></style>
