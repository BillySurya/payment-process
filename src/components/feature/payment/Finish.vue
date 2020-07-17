<template>
  <div class="finish">
    <div class="finish__container">
      <div class="finish__item">
        <h1 class="finish__title">
          Thank You
        </h1>
      </div>

      <div class="finish__item p-b-35">
        <span class="finish__description bold">
          Order ID : {{ randomString }}
        </span>
        <br />
        <br />
        <span class="finish__description">
          Your Order will be delivered {{ shipment.duration }} with
          {{ shipment.name }}
        </span>
      </div>

      <a class="finish__item" @click="resetPage">
        <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Homepage
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shipment: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    randomString() {
      var randoms = "";
      let chars = "23456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNPQRSTUVWXYZ";
      for (var i = 5; i > 0; --i)
        randoms += chars[Math.floor(Math.random() * chars.length)];
      return randoms;
    }
  },
  data() {
    return {
      step: null
    };
  },
  methods: {
    resetPage() {
      localStorage.clear();
      this.step = 1;
      this.$emit("step", this.step);
    }
  }
};
</script>

<style></style>
