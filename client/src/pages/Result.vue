<template>
    <div class="container">
      <Header />
      <div class="title">{{ $route.params.year }} {{ make }} {{ model }}</div>
      <div class="description">
        The dimensions show below are the height, width and length of each variant 
        for the {{ make }} {{ model }} {{ $route.params.year }}. Accessories not included. The 
        height, measured from the ground to the top of the car, ranges from 
        {{ minimum.height }}cm to {{ maximum.height }}cm depending on the variant. 
        The width ranges from {{ minimum.width }}cm to {{ maximum.width }}cm. The 
        length ranges from {{ minimum.length }}cm to {{ maximum.length }}cm.
      </div>
      <div class="table-wrapper">
        <div class="table-head-row">
          <div class="table-content-item">Variant</div>
          <div class="table-content-item">HxWxL (cm)</div>
          <div class="table-content-item">Kerb Weight (kg)</div>
        </div>

        <div class="table-body-row">
          <div class="table-content-row" v-for="dimension in dimensions">
            <div class="table-content-item tablle-content-variant">{{ dimension.variant }}</div>
            <div class="table-content-item">{{ dimension.height }}x{{ dimension.width }}x{{ dimension.length }}</div>
            <div class="table-content-item">{{ dimension.kerb_weight }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';
export default {
  data() {
    return { dimensions: [], maximum: {}, minimum: {}, make: '', model: '' };
  },
  mounted() {
    axios
      .get('/api/dimensions', {
        params: {
          make: this.$route.params.make,
          make_seo: this.$route.params.make_seo,
          model: this.$route.params.model,
          model_seo: this.$route.params.model_seo,
          year: this.$route.params.year,
        },
      })
      .then(response => {
        this.dimensions = response.data.data.dimensions.filter(
          dimension =>
            !!dimension.height &&
            !!dimension.width &&
            !!dimension.length &&
            !!dimension.variant &&
            !!dimension.variant_seo &&
            !!dimension.kerb_weight,
        );
        this.make = response.data.data.make;
        this.model = response.data.data.model;
        this.maximum = response.data.data.maximums;
        this.minimum = response.data.data.minimums;
      });
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.container {
  background-color: #d4d7d9;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.title {
  font-size: 42px;
  font-weight: 500;
  margin: 20px;
}
.description {
  margin: 20px;
  font-size: 16px;
}
.table-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
}
.table-head-row {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: black;
  color: #ffffff;
}
.table-content-row {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.table-content-row:nth-child(even) {
  background: #f9fafb;
}
.table-content-item {
  max-width: 200px;
  width: 100%;
}
.tablle-content-variant {
  color: #e74c3c;
}
</style>
