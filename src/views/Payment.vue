<template>
  <div class="container">
    <span>
      <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To
      {{ step }}
    </span>
    <div class="payment-process-step">
      <ul>
        <li>
          <span :class="`round ${step_action == 1 ? 'active' : ''}`">1</span>
          Delivery
        </li>
        <li><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
        <li>
          <span :class="`round ${step_action == 2 ? 'active' : ''}`">2</span>
          Payment
        </li>
        <li><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
        <li>
          <span :class="`round ${step_action == 3 ? 'active' : ''}`">3</span>
          Finish
        </li>
      </ul>
    </div>

    <div class="grid-2__custom p-t-20">
      <section v-if="step_action == 1">
        <Delivery @delivery="getDelivery" />
      </section>
      <section v-if="step_action == 2"></section>
      <section v-if="step_action == 3"></section>
      <Summary :delivery="deliveryData" />
    </div>
  </div>
</template>

<script>
import Delivery from "../components/feature/payment/Delivery";
import Summary from "../components/feature/payment/Summary";
export default {
  components: {
    Delivery,
    Summary
  },
  data() {
    return {
      deliveryData: null,
      step: "Cart",
      step_action: 1
    };
  },
  methods: {
    getDelivery(data) {
      console.log(data);
      this.deliveryData = data;
    }
  }
};
</script>

<style></style>
