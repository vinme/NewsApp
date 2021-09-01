<template>
  <div>
    <main-layout :apiKey="apiKey" />
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
export default {
  name: "App",
  data: () => {
    return {
      apiKey: "3b1f39eca06e4c54b950adb2b77eb5a4",
    };
  },
  components: { MainLayout },
};
</script>
