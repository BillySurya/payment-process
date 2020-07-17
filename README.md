# payment-process

Tools:
- Vue.js
- Stylus
- Vuelidate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
---------------------------------------------------------------------------------------------
### Payment Process File Structure
```
├── README.md
├── babel.config.js
├── package.json
├── public
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   ├── img
    │   └── css
    │       ├── pages
    |       |    └── payment.html
    │       ├── main.styl
    |       └── mixins.styl
    ├── components
    │   └── feature
    |         └── payment
    │               ├── Delivery.vue
    │               ├── Finish.vue
    |               ├── Summary.vue
    │               └── Payment.vue
    ├── main.js
    ├── mixins
    |     └── ReusableFunction.js
    └── views
          └── ItemPayment.vue
    
```
Payment Process Main Page is on ItemPayment.vue. All different step form are invoked to this file throught component that located on **/components/feature/payment**.
All stored data each component sent to ItemPayment and pass them to Summary component to display value based on data selected or data that user entry.
Reusable function is file that store global function that can used for all files.
