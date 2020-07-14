<template>
  <div class="delivery-body">
    <div class="delivery-body-title flex__row--space-between">
      <h1 class="delivery-body-title__text">
        Delivery Details
      </h1>
      <div>
        <input
          type="checkbox"
          class="delivery-body-title__checkbox--center"
          v-model="delivery.as_dropshipper"
        />
        Send As Dropshipper
      </div>
    </div>

    <div class="delivery-body-form ">
      <div class="grid-2">
        <div class="field">
          <input
            class="delivery-form__input"
            type="email"
            name="email"
            v-model="delivery.email"
            placeholder="Jane@gmail.com"
          />
          <label for="email">Email</label>
        </div>
        <div class="field">
          <input
            class="delivery-form__input"
            type="text"
            name="dripshipper_name"
            v-model="delivery.dripshipper_name"
            placeholder="Jane Smith"
            :disabled="delivery.as_dropshipper"
          />
          <label for="dripshipper_name">Dropshipper name</label>
        </div>
        <div class="field">
          <input
            class="delivery-form__input"
            type="number"
            name="phone_number"
            v-model="delivery.phone_number"
            placeholder="123123123"
          />
          <label for="phone_num">Phone Number</label>
        </div>
        <div class="field">
          <input
            class="delivery-form__input"
            type="number"
            name="dropshipper_phone_number"
            v-model="delivery.dropshipper_phone_number"
            placeholder="Ex, +62818981829381"
            :disabled="delivery.as_dropshipper"
          />
          <label for="dropshipper_phone_number">Dropshipper Phone Number</label>
        </div>
        <div class="field">
          <textarea
            class="delivery-form__input"
            name="delivery_address"
            v-model="delivery.delivery_address"
            maxlength="120"
            rows="5"
          />
          <label for="delivery_address">Delivery Address</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery: {
        as_dropshipper: false,
        email: null,
        dripshipper_name: null,
        phone_number: null,
        dropshipper_phone_number: null,
        delivery_address: null,
        button_text: "Continue To Payment"
      }
    };
  },
  mounted() {
    if (localStorage.delivery) {
      this.delivery = JSON.parse(localStorage.delivery);
    }
    this.$emit("delivery", this.delivery);
  },
  methods: {},
  watch: {
    delivery: {
      handler(data) {
        if (data.as_dropshipper) {
          this.delivery.dripshipper_name = null;
          this.delivery.dropshipper_phone_number = null;
        }
        this.$emit("delivery", data);
        localStorage.delivery = JSON.stringify(data);
      },
      deep: true
    }
  }
};
</script>

<style></style>
