<template>
  <div class="summary">
    <div class="summary-header">
      <h2 class="summary-header__heading c-primary-orange">Summary</h2>

      <span class="summary-header__text">
        {{ total_purchased_item }} items purchased
      </span>
      <hr />

      <div v-if="duration && shipment">
        <h3 class="summary-header__heading">Delivery Estimation</h3>
        <h3 class="summary-header__heading c-primary-green">
          {{ duration }} by {{ shipment }}
        </h3>
        <hr />
      </div>

      <div v-if="paymentMethod">
        <h3 class="summary-header__heading">Payment Method</h3>
        <h3 class="summary-header__heading c-primary-green">
          {{ payment_method }}
        </h3>
      </div>
    </div>
    <div class="summary-footer">
      <div class="l-flex">
        <div v-if="costOfGoods">
          <h4 class="summary-footer__heading">
            Cost of good: <b>{{ cost_of_goods }}</b>
          </h4>
        </div>
        <div v-if="deliveryData.as_dropshipper">
          <h4 class="summary-footer__heading">
            Dropshipping Fee: <b>{{ dropshipping_fee }}</b>
          </h4>
        </div>
        <div v-if="shipment && shipmentCost">
          <h4 class="summary-footer__heading">
            {{ shipment }} shipment: <b>{{ shipment_cost }}</b>
          </h4>
        </div>
        <div v-if="totalCost"></div>
        <h2 class="summary-footer__heading c-primary-orange">
          Total <b>{{ calculateTotal }}</b>
        </h2>
      </div>
      <button
        class="summary-header__button btn-primary-orange"
        @click="nextStep"
      >
        {{ step_text[step - 1].text }}
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
    duration: {
      type: String,
      default: ""
    },
    shipment: {
      type: String,
      default: ""
    },
    paymentMethod: {
      type: String,
      default: ""
    },
    totalPurchasedItem: {
      type: Number,
      default: null
    },
    costOfGoods: {
      type: Number,
      default: null
    },
    shipmentCost: {
      type: Number,
      default: 0
    },
    totalCost: {
      type: Number,
      default: 0
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
      payment_method: "Bank Transfer",
      cost_of_goods: 80000,
      shipment_cost: 90000,
      //   total_cost: 10000,
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
    calculateTotal: function() {
      let additional = this.deliveryData.as_dropshipper
        ? this.dropshipping_fee
        : 0;

      //   additional += this.shipment_cost > 0 ? this.shipment_cost : 0;

      return this.cost_of_goods + additional;
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
