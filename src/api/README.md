# Props
## v-model | modelValue
```js
modelValue: {
    type: [Object, String, null],
}   
```
## Removable: `Boolean`
is Show remove icon
```js
removable: {
    type: Boolean, 
    required: false,
    default: false,
}
```
## maxFileSize: `Number`
File size in MByte

if the uploaded file large then maxFileSize +> emit `error:fileSize'
```js
maxFileSize: {
    type: Number,
    required: false,
    default: 10,
}
```
## AcceptedTypes: `Array<String>`
Accepted file types to upload

if the uploaded file not includes in +> emit `error:fileSize'
```js
acceptedTypes: {
    type: Array,
    required: false,
    default: () => {
        return ["png", "svg", "jpg", "jpeg"];
    }
}
```