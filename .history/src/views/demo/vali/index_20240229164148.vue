<template>
  <a-form class="w-5/12" ref="formRef" @finish="onFinish" @finish-failed="onFinishFailed">
    <a-row>
      <a-radio-group v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <!-- 注意：将 rules 应用于 a-form-item 而不是 a-input 或 a-radio -->
          <a-form-item
            :name="`radio_${item.id}`"
            :rules="[{ required: true, message: '请选择一个正确答案！' }]"
          >
            <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          </a-form-item>
          <a-form-item
            :name="`input_${item.id}`"
            :rules="[{ required: true, message: '请输入选项内容！' }]"
          >
            <a-input v-model:value="item.inputValue" style="width: 400px" />
          </a-form-item>
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit" html-type="submit">提交</a-button>
    <a-button type="default" @click="resetForm">重置</a-button>
  </a-form>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
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
      const formRef = ref()
      const selectedRadioId = ref('')
      const formItems = reactive([
        { id: '1', radioLabel: '选项A：', inputValue: '' },
        { id: '2', radioLabel: '选项B：', inputValue: '' },
        { id: '3', radioLabel: '选项C：', inputValue: '' },
        { id: '4', radioLabel: '选项D：', inputValue: '' },
      ])

      const handleSubmit = () => {
        formRef.value
          .validate()
          .then(() => {
            console.log('验证成功', formItems, selectedRadioId.value)
            // 进行提交操作...
          })
          .catch((error) => {
            console.log('验证失败', error)
          })
      }

      const onFinish = (values) => {
        console.log('Success:', values)
      }

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
      }

      const resetForm = () => {
        formRef.value.resetFields()
      }

      return {
        formItems,
        selectedRadioId,
        handleSubmit,
        onFinish,
        onFinishFailed,
        resetForm,
        formRef,
      }
    },
  })
</script>
