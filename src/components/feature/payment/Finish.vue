<template>
  <div class="finish">
    <div class="finish-text">
      <h1 class="finish-text__title">
        Thank You
      </h1>

      <div class="p-b-35">
        <span class="finish-text__description">
          Order ID : {{ order_id }}
        </span>
        <br />
        <br />
        <span class="finish-text__description">
          Your Order will be delivered {{ duration }} with {{ shipment }}
        </span>
      </div>

      <a>
        <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Homepage
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order_id: "XXX1253612",
      duration: "today",
      shipment: "GO-JEK"
    };
  }
};
</script>

<style></style>
