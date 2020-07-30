<template>
  <div>
    <button :click="getTime">
      Get time!
    </button>
    <p v-if="time">Time is: <span>{{ time }}</span></p>
  </div>

</template>

<script>
export default {
  name: "ButtonComponent",
  methods: {
    data() {
      return {
        time: ''
      }
    },
    getTime() {
      this.$api.serverless.getTime()
          .then((res) => {
            this.time = res.data.payload;
          })
          .catch((error) => {
            console.log('smt went wrong', error)
          })
    }
  }


}
</script>

<style scoped>

</style>