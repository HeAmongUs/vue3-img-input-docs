# Events
## v-model | update:modelValue
Will be emitted on change selected file
```vue
<v-image-input v-model="image" />
<v-image-input :model-value:="image" @update:modelValue="updateHandler" />
```

## error:fileType
Will be emitted when the type of uploaded file not includes in `acceptedTypes:Array<string>` **props**
```vue
<v-image-input @error:fileType="errorHandler" />
```

## error:fileSize
Will be emitted when the size of uploaded file is larger then `maxFileSize:Number` **props**
```vue
<v-image-input @error:fileSize="errorHandler" />
```