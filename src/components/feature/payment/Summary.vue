<template>
  <div class="summary">
    <div class="summary-header">
      <h2 class="summary-header__heading c-primary-orange">Summary</h2>

      <span class="summary-header__text">
        {{ total_purchased_item }} items purchased
      </span>
      <hr />

      <div v-if="shipment">
        <h3 class="summary-header__heading">Delivery Estimation</h3>
        <h3 class="summary-header__heading c-primary-green">
          today by {{ shipment.name }}
        </h3>
        <hr />
      </div>

      <div v-if="payment">
        <h3 class="summary-header__heading">Payment Method</h3>
        <h3 class="summary-header__heading c-primary-green">
          {{ payment.name }}
        </h3>
      </div>
    </div>
    <div class="summary-footer">
      <div class="l-flex">
        <div v-if="cost_of_goods">
          <h4 class="summary-footer__heading">
            Cost of good: <b>{{ cost_of_goods }}</b>
          </h4>
        </div>
        <div v-if="deliveryData.as_dropshipper">
          <h4 class="summary-footer__heading">
            Dropshipping Fee: <b>{{ dropshipping_fee }}</b>
          </h4>
        </div>
        <div v-if="shipment">
          <h4 class="summary-footer__heading">
            {{ shipment.name }} shipment:
            <b>{{ shipment.price ? shipment.price : 0 }}</b>
          </h4>
        </div>
        <h2 class="summary-footer__heading">
          Total
          <b class="summary-footer__heading-price">{{ calculateTotal }}</b>
        </h2>
      </div>
      <button
        class="summary-header__button btn-primary-orange"
        @click="nextStep"
        :hidden="currentStep === 3"
      >
        {{ changeText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delivery: {
      type: Object,
      default: () => {}
    },
    currentStep: {
      type: Number,
      default: 1
    },
    shipment: {
      type: Object,
      default: () => {}
    },
    payment: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      step: 1,
      deliveryData: {
        as_dropshipper: false
      },
      dropshipping_fee: 5900,
      total_purchased_item: 10,
      cost_of_goods: 80000,
      payment_method: "Bank Transfer",
      step_text: [
        {
          order: 1,
          text: "Continue To Payment"
        },
        {
          order: 2,
          text: "Pay with E-Wallet"
        },
        {
          order: 3,
          text: "Finish"
        }
      ]
    };
  },
  computed: {
    calculateTotal() {
      let additional = this.deliveryData.as_dropshipper
        ? this.dropshipping_fee
        : 0;

      if (this.shipment) additional += this.shipment.price || 0;

      return this.cost_of_goods + additional;
    },
    changeText() {
      let selectedPayment = "E-Wallet";
      if (this.payment) selectedPayment = this.payment.name;
      return `Pay with ${selectedPayment}`;
    }
  },
  watch: {
    delivery(data) {
      this.deliveryData = data;
    },
    currentStep(data) {
      this.step = data;
    }
  },
  methods: {
    nextStep() {
      this.step += 1;
      this.$emit("step", this.step);
      localStorage.step = this.step;
    }
  }
};
</script>

<style></style>
