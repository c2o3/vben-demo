<template>
  <a-form class="w-5/12" @submit.prevent="handleSubmit">
    <a-row>
      <a-radio-group v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <!-- 简化规则定义，直接在提交时检查 -->
          <a-form-item :name="`radio_${item.id}`">
            <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          </a-form-item>
          <a-form-item :name="`input_${item.id}`">
            <a-input v-model:value="item.inputValue" style="width: 400px" />
          </a-form-item>
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" html-type="submit">提交</a-button>
    <a-button type="default" @click="resetForm">重置</a-button>
  </a-form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Form, Input, Radio, Row, Col, Button, message } from 'ant-design-vue'

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
      const selectedRadioId = ref('')
      const formItems = ref([
        { id: '1', radioLabel: '选项A：', inputValue: '' },
        { id: '2', radioLabel: '选项B：', inputValue: '' },
        { id: '3', radioLabel: '选项C：', inputValue: '' },
        { id: '4', radioLabel: '选项D：', inputValue: '' },
      ])

      const handleSubmit = () => {
        // 简化表单验证逻辑
        if (!selectedRadioId.value) {
          message.warning('请选择一个选项作为正确答案！')
          return
        }

        const isAnyInputEmpty = formItems.value.some((item) => !item.inputValue.trim())
        if (isAnyInputEmpty) {
          message.warning('请填写所有选项内容！')
          return
        }

        console.log('提交表单:', {
          selectedRadioId: selectedRadioId.value,
          formItems: formItems.value,
        })
        message.success('提交成功！')
        // 执行提交操作...
      }

      const resetForm = () => {
        selectedRadioId.value = ''
        formItems.value.forEach((item) => (item.inputValue = ''))
      }

      return {
        formItems,
        selectedRadioId,
        handleSubmit,
        resetForm,
      }
    },
  })
</script>
