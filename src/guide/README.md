# Installation
Install the component using the preferred package manager
```bash
    npm i vue3-img-input
```
Then import and register component

> Note: `css` file is imported separately
## Global
In the main.js file
```js 
    // main.js
    import VImageInput from 'vue3-img-input'
    app.component('v-image-input', VImageInput)
```

## Local
In the component.vue file
```js
    // Coomponent.vue <script>
    import VImageInput from "@/components/VImageInput";
    
    export default {
        components: {
            ...
            VImageInput,
            ...
        }
    }
```