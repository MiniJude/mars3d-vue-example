<template>
  <mars-dialog :visible="true" right="10" top="10" width="330">
    <a-form  :labelCol="{ span:4 }">
      <a-form-item label="状态:">
        <a-checkbox v-model:checked="formState.enabled" @change="onChangeState">开启效果</a-checkbox>
      </a-form-item>
      <a-form-item label="对比度:">
        <mars-slider v-model:value="formState.contrast" @change="onChangeContrast" :min="-255.0" :max="255.0" :step="0.01" />
      </a-form-item>
      <a-form-item label="亮度:">
        <mars-slider v-model:value="formState.brightness" @change="onChangeBrightness" :min="-0.1" :max="3.0" :step="0.01" />
      </a-form-item>
      <a-form-item label="增量:">
        <mars-slider v-model:value="formState.delta" @change="onChangeDelta" :min="1" :max="5" :step="0.01" />
      </a-form-item>
      <a-form-item label="步长:">
        <mars-slider v-model:value="formState.stepSize" @change="onChangeStep" :min="0" :max="7" :step="0.01" />
      </a-form-item>
      <a-form-item label="Sigma:">
        <mars-slider v-model:value="formState.sigma" @change="onChangeSigma" :min="1" :max="10" :step="0.01" />
      </a-form-item>
    </a-form>
  </mars-dialog>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import * as mapWork from "./map.js"

const formState = reactive({
  enabled: true,
  contrast: 128,
  brightness: -0.3,
  delta: 1.0,
  stepSize: 5.0,
  sigma: 3.78
})

const onChangeState = () => {
  mapWork.setBloomEffect(formState.enabled)
}

const onChangeContrast = () => {
  mapWork.setContrast(formState.contrast)
}

const onChangeBrightness = () => {
  mapWork.setBrightness(formState.brightness)
}

const onChangeDelta = () => {
  mapWork.setDelta(formState.delta)
}

const onChangeStep = () => {
  mapWork.setStep(formState.stepSize)
}

const onChangeSigma = () => {
  mapWork.setSigma(formState.sigma)
}
</script>
