<template>
  <div class="filter-container">
    <select v-model="selectedMake" v-on:change="getModels(selectedMake.id)">
      <option disabled value="">Select Make</option>
      <option
        v-for="make in makes"
        v-bind:key="make.id"
        v-bind:value="make"
      >
        {{ make.name }}
      </option>
    </select>
    <select v-model="selectedModel">
      <option disabled value="">Select Model</option>
      <option
        v-for="model in models"
        v-bind:key="model.id"
        v-bind:value="model"
      >
        {{ model.name }}
      </option>
    </select>
    <select v-model="selectedYear">
      <option disabled value="">Select Year</option>
      <option v-for="year in years" v-bind:key="year" v-bind:value="year">{{year}}</option>
    </select>
    <button class="filter-submit">Show Dimensions</button>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'SearchFilter',
  props: {
    makes: {
      type: Array,
      required: true,
    },
    models: {
      type: Array,
      required: true,
    },
    years: {
      type: Array,
      required: true,
    },
    getModels: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      selectedMake: '',
      selectedModel: '',
      selectedYear: '',
      result: '',
    };
  },
};
</script>

<style scoped>
.filter-container {
  background-color: #e34234;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 24px;
}
.filter-submit {
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
</style>
