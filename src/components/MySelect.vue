

<template>
  <select class="form-control" id="exampleFormControlSelect1" v-model="modelValue" @change="changeOption">
    <option  disabled value="">Сортировка постов</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.form-control{
  width: 200px;
}
</style>