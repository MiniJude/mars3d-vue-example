<template>
  <mars-dialog :visible="true" right="10" top="10" width="330">
    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">原始数据:</span>
        <mars-button @click="drawLine" class="btn_control">绘制线</mars-button>
        <mars-button danger @click="clearAll" class="btn_control">清除</mars-button>
      </a-space>
    </div>

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">计算平行线:</span>
        <mars-input-number  v-model:value="value" :min="1" :max="10" addon-after="公里"/>
        <mars-button @click="parallelLines">计算</mars-button>
      </a-space>
    </div>
    <div>
      <a-space>
        <span class="mars-pannel-item-label">计算曲线:</span>
        <mars-button class="btn_compute" @click="calculationCurve">计算</mars-button>
      </a-space>
    </div>
  </mars-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import * as mapWork from "./map.js"

const value = ref<number>(5)

// 绘制线
const drawLine = () => {
  mapWork.drawLine()
}

// 清除
const clearAll = () => {
  mapWork.clearLayer()
}

// 绘制平行线
const parallelLines = () => {
  mapWork.parallelLines(value.value)
}

// 绘制曲线
const calculationCurve = () => {
  mapWork.calculationCurve()
}
</script>

<style scoped lang="less">
.mars-pannel-item-label{
  width: 74px;
}
.btn_control {
    width:105px;
}
.btn_compute {
  width: 218px;
}

:deep(.ant-input-number-input) {
  width: 107px;
}
</style>
