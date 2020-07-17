<template>
  <div class="container">
    <a @click="prevStep">
      <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To
      {{ section_list[step_action - 1] }}
    </a>
    <div class="payment-process">
      <ul class="payment-process__menu">
        <li class="payment-process__list">
          <span :class="`round ${step_action >= 1 ? 'active' : ''}`">1</span>
          Delivery
        </li>
        <li class="payment-process__list">
          <i
            class="fa fa-chevron-right payment-process__icon"
            aria-hidden="true"
          ></i>
        </li>
        <li class="payment-process__list">
          <span :class="`round ${step_action >= 2 ? 'active' : ''}`">2</span>
          Payment
        </li>
        <li class="payment-process__list">
          <i
            class="fa fa-chevron-right payment-process__icon"
            aria-hidden="true"
          ></i>
        </li>
        <li class="payment-process__list">
          <span :class="`round ${step_action == 3 ? 'active' : ''}`">3</span>
          Finish
        </li>
      </ul>
    </div>

    <div class="grid-2__custom p-t-20">
      <section v-if="step_action === 1">
        <Delivery @delivery="getDelivery" />
      </section>
      <section v-if="step_action === 2">
        <Payment @payment="getPayment" @shipment="getShipment" />
      </section>
      <section v-if="step_action === 3">
        <Finish :shipment="shipmentData" @step="getStep" />
      </section>
      <Summary
        :delivery="deliveryData"
        :shipment="shipmentData"
        :payment="paymentData"
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
import Finish from "../components/feature/payment/Finish";

export default {
  components: {
    Delivery,
    Payment,
    Summary,
    Finish
  },
  data() {
    return {
      deliveryData: null,
      shipmentData: null,
      paymentData: null,
      step_action: 1,
      section_list: ["Cart", "Delivery", "Payment", "Finish"]
    };
  },
  mounted() {
    if (localStorage.step) {
      this.step_action = Number(localStorage.step);
    }
    if (localStorage.payment) {
      this.paymentData = JSON.parse(localStorage.payment);
    }
    if (localStorage.shipment) {
      this.shipmentData = JSON.parse(localStorage.shipment);
    }
  },
  methods: {
    getDelivery(data) {
      this.deliveryData = data;
    },
    getShipment(data) {
      this.shipmentData = data;
    },
    getPayment(data) {
      this.paymentData = data;
    },
    getStep(data) {
      this.step_action = data;
    },
    prevStep() {
      if (this.step_action == 1) return false;
      this.step_action -= 1;

      localStorage.step = this.step_action;
    }
  }
};
</script>

<style></style>
