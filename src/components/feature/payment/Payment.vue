<template>
  <div class="payment-container">
    <div class="shipment">
      <h1 class="shipment__title--orange">
        Shipment
      </h1>
      <hr />
      <div class="shipment-methods">
        <ul class="shipment-methods__list">
          <template v-for="(value, index) in shipment_list">
            <li
              :class="
                `shipment-methods__list-child
                ${shipment_selected.order - 1 == index ? 'active-list' : ''}`
              "
              :key="index"
              @click="setActive(value, 'shipment')"
            >
              <span>{{ value.name }}</span>
              <span v-if="value.price">{{ value.price | currencyFormat }}</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="payment">
      <h1 class="payment__title--orange">
        Payment
      </h1>
      <hr />
      <div class="payment-methods">
        <ul class="payment-methods__list">
          <template v-for="(value, index) in payment_list">
            <li
              :class="
                `payment-methods__list-child
              ${payment_selected.order - 1 == index ? 'active-list' : ''}`
              "
              :key="index"
              @click="setActive(value, 'payment')"
            >
              <span class="payment-methods__list-child-text">
                {{ value.name }}
              </span>
              <span class="payment-methods__list-child-text" v-if="value.price">
                {{ value.price | currencyFormat }} left
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ReusableFunction from "@/mixins/ReusableFunction";

export default {
  mixins: [ReusableFunction],
  data() {
    return {
      payment_selected: {},
      shipment_selected: {},
      payment_list: [
        {
          order: 1,
          name: "e-Wallet",
          price: 150000,
          is_active: true
        },
        {
          order: 2,
          name: "Bank Transfer",
          is_active: false
        },
        {
          order: 3,
          name: "Virtual Account",
          is_active: false
        }
      ],
      shipment_list: [
        {
          order: 1,
          name: "GO-SEND",
          duration: "today",
          price: 15000,
          is_active: true
        },
        {
          order: 2,
          name: "JNE",
          duration: "2 days",
          price: 8000,
          is_active: false
        },
        {
          order: 3,
          name: "Personar Courier",
          duration: "1 day",
          price: 29000,
          is_active: false
        }
      ]
    };
  },
  mounted() {
    if (localStorage.payment) {
      this.payment_selected = JSON.parse(localStorage.payment);
      this.$emit("delivery", this.payment_selected);
    }

    if (localStorage.shipment) {
      this.shipment_selected = JSON.parse(localStorage.shipment);
      this.$emit("shipment", this.shipment_selected);
    }
  },
  methods: {
    setActive(data, mode) {
      const selected = document.getElementsByClassName(
        `${mode}-methods__list-child`
      );
      Array.from(selected).forEach((value, index) => {
        if (data.order - 1 === index) {
          selected[index].classList.add("active-list");
        } else {
          selected[index].classList.remove("active-list");
        }
      });

      if (mode === "shipment") {
        this.shipment_selected = data;
      } else {
        this.payment_selected = data;
      }
    }
  },
  watch: {
    payment_selected: {
      handler(data) {
        this.$emit("payment", data);
        localStorage.payment = JSON.stringify(data);
      },
      deep: true
    },
    shipment_selected: {
      handler(data) {
        this.$emit("shipment", data);
        localStorage.shipment = JSON.stringify(data);
      },
      deep: true
    }
  }
};
</script>

<style></style>
