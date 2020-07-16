<template>
  <div class="summary">
    <div class="summary__header">
      <h2 class="summary__title">Summary</h2>

      <div class="summary__header__list">
        <span class="summary__text">
          {{ total_purchased_item }} items purchased
        </span>
      </div>
      <hr />

      <div v-if="shipment" class="summary__header__list">
        <b class="summary__bold">Delivery Estimation</b>
        <h3 class="summary__heading c-primary-green">
          today by {{ shipment.name }}
        </h3>
        <hr />
      </div>

      <div v-if="payment" class="summary__header__list">
        <b class="summary__bold">Payment Method</b>
        <h3 class="summary__heading c-primary-green">
          {{ payment.name }}
        </h3>
      </div>
    </div>
    <div class="summary__footer">
      <div class="summary__footer__menu">
        <div v-if="cost_of_goods" class="summary__footer__list">
          <span class="summary__footer__heading">
            Cost of good:
          </span>
          <b>{{ cost_of_goods | currencyFormat }}</b>
        </div>
        <div v-if="deliveryData.as_dropshipper" class="summary__footer__list">
          <span class="summary__footer__heading">
            Dropshipping Fee:
          </span>
          <b>{{ dropshipping_fee | currencyFormat }}</b>
        </div>
        <div v-if="shipment" class="summary__footer__list">
          <span class="summary__footer__heading">
            <b>{{ shipment.name }}</b> shipment:
          </span>
          <b>{{ shipment.price | currencyFormat }}</b>
        </div>
        <h2 class="summary__total">
          Total
          <b class="summary__price">{{ calculateTotal }}</b>
        </h2>
      </div>
      <button
        class="summary__button"
        @click="nextStep"
        :hidden="currentStep === 3"
      >
        {{ changeText }}
      </button>
    </div>
  </div>
</template>

<script>
import ReusableFunction from "@/mixins/ReusableFunction";

export default {
  mixins: [ReusableFunction],
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

      return new Intl.NumberFormat().format(this.cost_of_goods + additional);
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
