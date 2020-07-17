# payment-process

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

## Delivery 

![page1](https://user-images.githubusercontent.com/16058195/87740731-22ab4080-c80d-11ea-9cce-ac3fc8ab0f94.png)

- All field on the form will be validate each keypress on the field.
- Validation using Vuelidate form Vue js
- Each field have different validation
    1. Phone minimum 6 and Maximum 20 chars 
    2. Email must fill with email format
    3. Name just normal required form
- Error / Valid data represent with border color
    1. Orange => error
    2. Green => Valid
- Address Has character counter on bottom left of input

**Valdiating form**
![image](https://user-images.githubusercontent.com/16058195/87741340-7c603a80-c80e-11ea-8f32-d8e61c933b6a.png)
- If all the form in not valid. User cant go to next step

**Checkbox Checked**
![image](https://user-images.githubusercontent.com/16058195/87741680-538c7500-c80f-11ea-96ac-94869d3f8976.png)
- If checkbox is checked, Dropshipper field all be disabled and data will be cleared
- On summary will add Dropshipper fee 


## Payment
![page2](https://user-images.githubusercontent.com/16058195/87741040-c4cb2880-c80d-11ea-87b6-c77d01eafb52.png)
- This step user will select the shipment and payment type
- Both are required

**Select Shipment**
![page2select1](https://user-images.githubusercontent.com/16058195/87741043-c5fc5580-c80d-11ea-9d75-e0ac2268752d.png)
**Select Payment**
![page2select2](https://user-images.githubusercontent.com/16058195/87741051-c85eaf80-c80d-11ea-9e8f-cc2f0d74539b.png)

- Shipment have different duration and prices
- Payment Method will change text on the button
- Each Option that selected will be calculate on summary section

## Finish
![page3](https://user-images.githubusercontent.com/16058195/87741290-5175e680-c80e-11ea-9c1f-39e535710635.png)
- ID will generate Random with 5 digit
- If go to homepage pressed, go to first step again with all form cleared 
