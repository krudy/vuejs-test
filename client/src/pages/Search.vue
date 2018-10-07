<template>
  <div class="container">
    <Header />
    <div class="text-wrapper">
      <div class="title">
        Car Dimensions
      </div>
      <div class="description">
        Ever wanted to know the dimensions of a car? It’s useful to determine 
        if a car will fit into your garage, for parking and car park restrictions 
        and to know if there is space in the car for all your daily needs. We 
        have provided the dimensions for a wide range of makes and models by 
        year for you to easily and quickly view all you need to know
      </div>
    </div>
    <SearchFilter
      v-bind:makes="makes"
      v-bind:models="models"
      v-bind:years="range(1960,2018)"
      v-bind:getModels="getModels"
      v-bind:onSubmit="onSubmit"
    />
  </div>
</template>

<script defer>
import Vue from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';
import SearchFilter from '../components/SearchFilter.vue';
import router from '../router';
export default {
  name: 'SearchPage',
  data() {
    return { makes: [], models: [] };
  },
  methods: {
    range: function(start, end) {
      if (start === end) return [start];
      return [...this.range(start + 1, end), start];
    },
    getModels: function(makeId) {
      axios
        .get('/api/models', { params: { make_id: makeId } })
        .then(response => (this.models = response.data.data));
    },
    onSubmit: function(make, model, year) {
      router.push({
        name: 'Result',
        params: {
          make: make.name,
          make_seo: make.name_seo,
          model: model.name,
          model_seo: model.name_seo,
          year: year,
        },
      });
    },
  },
  mounted() {
    axios.get('/api/makes').then(response => (this.makes = response.data.data));
  },
  components: {
    Header,
    SearchFilter,
  },
};
</script>

<style scoped>
.container {
  background-color: #d4d7d9;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.text-wrapper {
  padding: 24px;
}
.title {
  font-size: 42px;
  font-weight: 500;
}
.description {
  margin-top: 20px;
  font-size: 16px;
}
</style>
