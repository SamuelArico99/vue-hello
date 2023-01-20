const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      media: 'https://unsplash.it/300/300?image=10'
    }
  },
  methods: {

  }
}).mount('#app');