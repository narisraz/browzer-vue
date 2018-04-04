<template>
  <div>
    your profile
  </div>
</template>

<script>
  export default {
    beforeCreate: function () {
      this.$store.state.title = "Profile"
    }
  }
</script>
