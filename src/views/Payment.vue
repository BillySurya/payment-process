<template>
  <div class="container">
    <a @click="prevStep">
      <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To
      {{ section_list[step_action - 1] }}
    </a>
    <div class="payment-process-step">
      <ul>
        <li>
          <span :class="`round ${step_action >= 1 ? 'active' : ''}`">1</span>
          Delivery
        </li>
        <li><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
        <li>
          <span :class="`round ${step_action >= 2 ? 'active' : ''}`">2</span>
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
      <section v-if="step_action == 2">
        <Payment @payment="getDelivery" />
      </section>
      <section v-if="step_action == 3"></section>
      <Summary
        :delivery="deliveryData"
        :currentStep="step_action"
        @step="getStep"
      />
    </div>
  </div>
</template>

<script>
import Delivery from "../components/feature/payment/Delivery";
import Payment from "../components/feature/payment/Payment";
import Summary from "../components/feature/payment/Summary";

export default {
  components: {
    Delivery,
    Payment,
    Summary
  },
  data() {
    return {
      deliveryData: null,
      step_action: 1,
      section_list: ["Cart", "Delivery", "Payment", "Finish"]
    };
  },
  mounted() {
    if (localStorage.step) {
      this.step_action = Number(localStorage.step);
    }
  },
  methods: {
    getDelivery(data) {
      this.deliveryData = data;
    },
    getStep(data) {
      this.step_action = data;
    },
    prevStep() {
      if (this.step_action == 1) return false;
      this.step_action -= 1;
    }
  }
};
</script>

<style></style>
