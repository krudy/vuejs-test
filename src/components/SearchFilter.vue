<template>
  <div class="filter-container">
    <select v-model="make">
      <option disabled value="">Select Make</option>
      <filter-option
        v-for="make in placeholder.make"
        v-bind:key="make.id"
        v-bind:option="make.name"
      ></filter-option>
    </select>
    <select v-model="model">
      <option disabled value="">Select Model</option>
      <filter-option
        v-for="make in placeholder.model"
        v-bind:key="make.id"
        v-bind:option="make.name"
      ></filter-option>
    </select>
    <select v-model="year">
      <option disabled value="">Select Year</option>
      <filter-option
        v-for="make in placeholder.year"
        v-bind:key="make.id"
        v-bind:option="make.name"
      ></filter-option>
    </select>
    <button class="filter-submit" v-on:click="result = `${make}+${model}+${year}`">Show Dimensions</button>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.component('filter-option', {
  props: ['option'],
  template: '<option>{{ option }}</option>',
});

export default {
  name: 'search-filter',
  props: {
    filter1: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      placeholder: {
        make: [
          { id: 1, name: 'make 1' },
          { id: 2, name: 'make 2' },
          { id: 3, name: 'make 3' },
        ],
        model: [
          { id: 1, name: 'model 1' },
          { id: 2, name: 'model 2' },
          { id: 3, name: 'model 3' },
        ],
        year: [
          { id: 1, name: 'year 1' },
          { id: 2, name: 'year 2' },
          { id: 3, name: 'year 3' },
        ],
      },
      make: '',
      model: '',
      year: '',
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
