<template lang="html">
    <mt-popup position="bottom" v-model="showPop">
      <mt-picker :slots="slots" @change="onValuesChange">
      </mt-picker>
    </mt-popup>
</template>

<script>
import { Picker, Popup} from 'mint-ui'
import Vue from 'vue'
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup);
export default {
  data() {
    return {
      showPop: true,
      slots: [{
        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
      }]
    };
  },
  methods: {
    onValuesChange(picker, values) {
      console.log(values);
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
