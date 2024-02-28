<template>
  <a-form ref="formRef" :model="formModel" :rules="formRules" @submit.prevent="handleSubmit">
    <a-form-item
      label="选项"
      name="selectedOption"
      :rules="[
        {
          required: true,
          message: '请选择一个选项',
        },
      ]"
    >
      <a-radio-group v-model="formModel.selectedOption">
        <a-radio v-for="item in options" :key="item.value" :value="item.value">{{
          item.label
        }}</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      v-for="item in options"
      :key="item.value + 'Input'"
      :label="item.label + '输入'"
      :name="`input${item.value}`"
      :rules="[
        {
          required: true,
          message: '请输入内容',
          validator: (_, value) =>
            formModel.selectedOption === item.value
              ? value
                ? Promise.resolve()
                : Promise.reject()
              : Promise.resolve(),
        },
      ]"
    >
      <a-input v-model="formModel[`input${item.value}`]" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
  import { defineComponent, reactive, ref } from 'vue'
  import { Form, Input, Radio, Button } from 'ant-design-vue'

  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
      AButton: Button,
    },
    setup() {
      const formRef = ref(null)
      const formModel = reactive({
        selectedOption: null,
        input1: '',
        input2: '',
        input3: '',
      })
      const options = [
        { label: '选项A', value: '1' },
        { label: '选项B', value: '2' },
        { label: '选项C', value: '3' },
      ]
      const formRules = reactive({
        selectedOption: [{ required: true, message: '请选择一个选项' }],
        // 其他验证规则根据需要添加
      })

      const handleSubmit = () => {
        formRef.value
          .validate()
          .then(() => {
            console.log('表单验证成功', formModel)
          })
          .catch((err) => {
            console.log('表单验证失败', err)
          })
      }

      return { formRef, formModel, formRules, options, handleSubmit }
    },
  })
</script>
