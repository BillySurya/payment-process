<template>
  <div class="payment-container">
    <div class="shipment">
      <h1 class="shipment__title--orange">
        Shipment
      </h1>
      <hr />
      <div class="shipment-methods">
        <ul>
          <template v-for="(value, index) in shipment_list">
            <li class="shipment-methods__list" :key="index">
              <span>{{ value.name }}</span>
              <br />
              <span>{{ value.price }}</span>
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
      <div class="payment-methods"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shipment_list: [
        {
          name: "GO-SEND",
          price: 15000
        },
        {
          name: "JNE",
          price: 8000
        },
        {
          name: "Personar Courier",
          price: 29000
        }
      ]
    };
  }
};
</script>

<style></style>
