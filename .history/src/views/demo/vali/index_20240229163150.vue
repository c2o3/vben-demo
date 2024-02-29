<template>
  <a-form class="w-5/12" @finish-failed="onFinishFailed" @finish="onFinish">
    <a-row>
      <a-radio-group v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <a-form-item name="radio" :rules="[{ required: true, message: '请选择一个正确答案！' }]">
            <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          </a-form-item>
          <a-form-item name="input">
            <a-input
              v-model:value="item.inputValue"
              style="width: 400px"
              :rules="[{ required: true, message: '请输入选项内容！' }]"
            />
          </a-form-item>
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit" html-type="submit">提交</a-button>
    <a-button type="default" @click="resetForm">重置</a-button>
  </a-form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Form, Input, Radio, Row, Col, Button } from 'ant-design-vue'
  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
      ARow: Row,
      ACol: Col,
      AButton: Button,
    },
    setup() {
      const selectedRadioId = ref()
      const inputValue = ref('')

      const formItems = ref([
        { id: '1', radioLabel: '选项A：', inputValue: '' },
        { id: '2', radioLabel: '选项B：', inputValue: '' },
        { id: '3', radioLabel: '选项C：', inputValue: '' },
        { id: '4', radioLabel: '选项D：', inputValue: '' },
      ])
      //提交表单内容
      const handleSubmit = () => {
        if (!selectedRadioId.value && !inputValue.value) {
          alert('正确答案和选项内容都请不要为空！')
        } else if (!selectedRadioId.value) {
          alert('请选择正确答案！')
        } else if (!inputValue.value) {
          alert('请填写选项内容!')
        } else {
          // 调取接口发送数据
          return
        }
        console.log(formItems.value, selectedRadioId.value)
      }
      const onFinish = (values: any) => {
        console.log('Success:', values)
      }

      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
      }
      return {
        formItems,
        selectedRadioId,
        handleSubmit,
        onFinish,
        onFinishFailed,
      }
    },
  })
</script>
