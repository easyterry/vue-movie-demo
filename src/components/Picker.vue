<template lang="html">
  <div>
    <div @click="openPicker()"></div>
  <mt-datetime-picker
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-if="showDate"
      >
    </mt-datetime-picker>
    </div>
</template>

<script>
import {
  DatetimePicker
} from 'mint-ui'
import Vue from 'vue'
Vue.component(DatetimePicker.name, DatetimePicker)
export default {
  data() {
    return {
      showDate: true
    }
  },
  methods: {
    openPicker() {
      this.$refs.picker.open()
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
