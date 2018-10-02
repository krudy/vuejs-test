<template>
  <div class="header-container">
    <div class="logo-wrapper">
        <Logo class="logo"/>
    </div>
  </div>
</template>

<script>
import Logo from '../static/autotrader_logo.svg';
export default {
  name: 'page-header',
  components: {
    Logo,
  },
};
</script>

<style scoped>
.header-container {
  background-color: #ffffff;
  padding: 20px 14px;
}
.logo {
  width: 100%;
}
.logo-wrapper {
  max-width: 200px;
  max-height: 50px;
}
</style>

