<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/25. -->
<!--A sSearch bar for city Search-->

<template>
  <div :class="['search-bar','search-bar-'+theme]"
        :style="searchBarStyle">
    <div class="search-bar-input-wrapper"
      :style="{right: needShowCancel ? '114px' : '20px'}"
      :class="['search-bar-input-wrapper-'+theme]">
      <input @blur="onBlur"
            @focus="onFocus"
            @input="onInput"
            @return="onSubmit"
            :autofocus="autofocus"
            :disabled="disabled"
            :value="value"
            ref="search-input"
            :type="inputType"
            :placeholder="placeholder"
            :class="['search-bar-input']" />
    </div>
    <div v-if="disabled"
          @click="inputDisabledClicked"
          class="disabled-input"></div>
    <image class="search-bar-ICON"
            :aria-hidden="true"
            :src="inputIcon"></image>
    <image class="search-bar-close"
            v-if="showClose"
            :aria-hidden="true"
            @click="closeClicked"
            :src="closeIcon"></image>
    <text :class="['search-bar-button','search-bar-button-'+theme]"
          v-if="needShowCancel"
          @click="cancelClicked">{{cancelLabel}}</text>
  </div>
</template>

<style scoped>
.search-bar {
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffffff;
  /* width: 750px; */
  flex: 1;
  height: 84px;
  flex-direction: row;
}

.search-bar-yellow {
  background-color: #ffc900;
}

.search-bar-transparent {
  background-color: transparent;
}

.search-bar-input-wrapper {
  position: absolute;
  top: 10px;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 40px;
  padding-left: 60px;
  font-size: 26px;
  /* width: 624px; */
  flex: 1;
  left: 20px;
  height: 64px;
  line-height: 64px;
  background-color: #e5e5e5;
  border-radius: 6px;
}
.search-bar-input {
  background-color: transparent;
  flex: 1;
}

.search-bar-input-wrapper-yellow {
  background-color: #fff6d6;
  placeholder-color: #666666;
}

.search-bar-input-wrapper-transparent {
  placeholder-color: #666666;
}

.search-bar-ICON {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 34px;
  top: 28px;
}

.search-bar-close {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 120px;
  top: 28px;
}

.search-bar-button {
  width: 94px;
  height: 36px;
  font-size: 30px;
  text-align: center;
  background-color: #ffffff;
  margin-top: 16px;
  margin-right: 0;
  color: #333333;
  position: absolute;
  right: 8px;
  top: 9px;
}

.search-bar-button-yellow {
  background-color: #ffc900;
}

.search-bar-button-transparent {
  color: white;
  background-color: transparent;
}

.disabled-input {
  /* width: 750px; */
  height: 64px;
  position: absolute;
  left: 0;
  right: 0;
  background-color: transparent;
}
</style>

<script>
import { INPUT_ICON, ARROW_ICON, CLOSE_ICON } from './type';

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    alwaysShowCancel: {
      type: Boolean,
      default: false,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'gray',
    },
    defaultValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    cancelLabel: {
      type: String,
      default: '取消 ',
    },
    searchBarStyle: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    needShowCancel() {
      return this.alwaysShowCancel || this.showCancel;
    },
  },
  data: () => ({
    inputIcon: INPUT_ICON,
    closeIcon: CLOSE_ICON,
    arrowIcon: ARROW_ICON,
    showCancel: false,
    showClose: false,
    value: '',
  }),
  created() {
    if (this.defaultValue) {
      this.value = this.defaultValue;
    }
    if (this.disabled) {
      this.showCancel = false;
      this.showClose = false;
    }
  },
  methods: {
    onBlur() {
      const self = this;
      setTimeout(() => {
        self.showCancel = false;
        self.detectShowClose();
        self.$emit('searchbarInputOnBlur', { value: self.value });
      }, 10);
    },
    autoBlur() {
      this.$refs['search-input'].blur();
    },
    onFocus() {
      if (this.isDisabled) {
        return;
      }
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('searchbarInputOnFocus', { value: this.value });
    },
    closeClicked() {
      this.value = '';
      if (this.showCancel) {
        this.showCancel = false;
      }
      if (this.showClose) {
        this.showClose = false;
      }
      this.$emit('searchbarCloseClicked', { value: this.value });
      this.$emit('searchbarInputOnInput', { value: this.value });
    },
    onInput(e) {
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('searchbarInputOnInput', { value: this.value });
    },
    onSubmit(e) {
      this.onBlur();
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('searchbarInputReturned', { value: this.value });
    },
    cancelClicked() {
      if (this.showCancel) {
        this.showCancel = false;
      }
      if (this.showClose) {
        this.showClose = false;
      }
      this.$emit('searchbarCancelClicked', { value: this.value });
    },
    detectShowClose() {
      this.showClose = this.value.length > 0 && this.showCancel;
    },
    depClicked() {
      this.$emit('searchbarDepChooseClicked', {});
    },
    inputDisabledClicked() {
      this.$emit('searchbarInputDisabledClicked', {});
    },
    setValue(value) {
      this.value = value;
    },
    getValue() {
      return this.value;
    },
  },
};
</script>
