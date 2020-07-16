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
        <div
          :class="{
            'error-form': $v.delivery.email.$error,
            'valid-form': !$v.delivery.email.$invalid,
            field: true
          }"
        >
          <input
            class="delivery__input"
            type="email"
            name="email"
            id="email"
            v-model="$v.delivery.email.$model"
            placeholder="Ex, Jane@gmail.com"
          />
          <label class="delivery__label" for="email">Email</label>
        </div>
        <div
          :class="{
            'error-form': delivery.as_dropshipper
              ? false
              : $v.delivery.dropshipper_name.$error,
            'valid-form': delivery.as_dropshipper
              ? false
              : !$v.delivery.dropshipper_name.$invalid,
            'disabled-form': delivery.as_dropshipper,
            field: true
          }"
        >
          <input
            class="delivery__input"
            type="text"
            name="dropshipper_name"
            id="dropshipper_name"
            v-model="$v.delivery.dropshipper_name.$model"
            :disabled="delivery.as_dropshipper || false"
            placeholder="Ex, Jane Smith"
          />
          <label class="delivery__label" for="dropshipper_name"
            >Dropshipper name</label
          >
        </div>
        <div
          :class="{
            'error-form': $v.delivery.phone_number.$error,
            'valid-form': !$v.delivery.phone_number.$invalid,
            field: true
          }"
        >
          <input
            class="delivery__input"
            type="text"
            name="phone_number"
            id="phone_number"
            v-model="$v.delivery.phone_number.$model"
            placeholder="Ex, +62818981829381"
            maxlength="20"
            @keypress="isNumber($event)"
          />
          <label class="delivery__label" for="phone_number">Phone Number</label>
        </div>
        <div
          :class="{
            'error-form': delivery.as_dropshipper
              ? false
              : $v.delivery.dropshipper_phone_number.$error,
            'valid-form': delivery.as_dropshipper
              ? false
              : !$v.delivery.dropshipper_phone_number.$invalid,
            'disabled-form': delivery.as_dropshipper,
            field: true
          }"
        >
          <input
            class="delivery__input"
            type="text"
            name="dropshipper_phone_number"
            id="dropshipper_phone_number"
            v-model="$v.delivery.dropshipper_phone_number.$model"
            :disabled="delivery.as_dropshipper"
            placeholder="Ex, +62818981829381"
            maxlength="20"
            @keypress="isNumber($event)"
          />
          <label class="delivery__label" for="dropshipper_phone_number"
            >Dropshipper Phone Number</label
          >
        </div>
        <div
          :class="{
            'error-form': $v.delivery.delivery_address.$error,
            'valid-form': !$v.delivery.delivery_address.$invalid,
            field: true
          }"
        >
          <textarea
            class="delivery__input"
            name="address"
            v-model="$v.delivery.delivery_address.$model"
            maxlength="120"
            rows="5"
            autocomplete="none"
          />
          <label class="delivery__label" for="address">Delivery Address</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  requiredIf
} from "vuelidate/lib/validators";

const regEx = value => /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g.test(value);

export default {
  data() {
    return {
      delivery: {
        data_valid: false,
        as_dropshipper: false,
        email: null,
        dropshipper_name: null,
        phone_number: null,
        dropshipper_phone_number: null,
        delivery_address: null
      }
    };
  },
  mounted() {
    if (localStorage.delivery) {
      this.delivery = JSON.parse(localStorage.delivery);
      this.$v.delivery.$reset();
      this.$v.delivery.$touch();
    }
    this.$emit("delivery", this.delivery);
  },
  methods: {
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode != 9 &&
        charCode != 40 &&
        charCode != 41 &&
        charCode != 43 &&
        charCode != 45
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  watch: {
    delivery: {
      handler(data) {
        if (data.as_dropshipper) {
          this.delivery.dropshipper_name = null;
          this.delivery.dropshipper_phone_number = null;
        }
        this.delivery.data_valid = !this.$v.delivery.$invalid;
        this.$emit("delivery", data);
        localStorage.delivery = JSON.stringify(data);
      },
      deep: true
    }
  },
  validations() {
    return {
      delivery: {
        as_dropshipper: {
          required
        },
        email: {
          required,
          email
        },
        dropshipper_name: {
          required: requiredIf(() => !this.delivery.as_dropshipper)
        },
        phone_number: {
          required,
          regEx,
          minLength: minLength(6),
          maxLength: maxLength(20)
        },
        dropshipper_phone_number: {
          required: requiredIf(() => !this.delivery.as_dropshipper),
          regEx,
          minLength: minLength(6),
          maxLength: maxLength(20)
        },
        delivery_address: { required }
      }
    };
  }
};
</script>

<style></style>
