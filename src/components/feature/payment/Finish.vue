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
          Order ID : {{ order_id }}
        </span>
        <br />
        <br />
        <span class="finish__description">
          Your Order will be delivered {{ duration }} with {{ shipment.name }}
        </span>
      </div>

      <a class="finish__item">
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
  data() {
    return {
      order_id: "XXX1253612",
      duration: "today"
    };
  }
};
</script>

<style></style>
