<template>
  <a-form class="w-5/12" ref="formRef" :model="formModel">
    <a-row>
      <a-radio-group v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="(item, index) in formItems" :key="item.id" class="pt-3">
          <a-form-item>
            <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          </a-form-item>
          <a-form-item
            :rules="[
              {
                required: true,
                message: '输入不能为空',
              },
              {
                validator: validateInput,
                trigger: 'blur',
              },
            ]"
          >
            <a-input v-model:value="item.inputValue" style="width: 400px" />
          </a-form-item>
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </a-form>
</template>

<script>
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
      const formRef = ref(null)
      const selectedRadioId = ref([])
      const formModel = ref({
        formItems: [
          { id: '1', radioLabel: '选项A：', inputValue: '' },
          { id: '2', radioLabel: '选项B：', inputValue: '' },
          { id: '3', radioLabel: '选项C：', inputValue: '' },
          { id: '4', radioLabel: '选项D：', inputValue: '' },
        ],
      })

      const validateInput = (rule, value) => {
        if (!value) {
          return Promise.reject('输入不能为空')
        }
        if (!/[a-zA-Z0-9]+/.test(value)) {
          return Promise.reject('内容必须是数字和字母的组合')
        }
        return Promise.resolve()
      }

      const handleSubmit = () => {
        formRef.value
          .validate()
          .then(() => {
            console.log('提交成功', formModel.value)
          })
          .catch((error) => {
            console.error('校验失败', error)
          })
      }

      return { formRef, formModel, selectedRadioId, handleSubmit }
    },
  })
</script>
