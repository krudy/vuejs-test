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
    <SearchFilter />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import SearchFilter from '../components/SearchFilter.vue';
export default {
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
