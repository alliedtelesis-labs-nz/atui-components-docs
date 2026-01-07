[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Classes

### ToasterService

Defined in: [toaster.service.ts:10](https://github.com/alliedtelesis-labs-nz/atui-components/blob/6c0bcd4ac3bdb94d83d1d3cb900644bd3a24e6a5/atui-components-stencil/src/utils/toaster.service.ts#L10)

#### Constructors

##### Constructor

> **new ToasterService**(): [`ToasterService`](#toasterservice)

###### Returns

[`ToasterService`](#toasterservice)

#### Methods

##### show()

> `static` **show**(`type`, `message`, `options`): `Promise`\<`void`\>

Defined in: [toaster.service.ts:22](https://github.com/alliedtelesis-labs-nz/atui-components/blob/6c0bcd4ac3bdb94d83d1d3cb900644bd3a24e6a5/atui-components-stencil/src/utils/toaster.service.ts#L22)

Show a toast message

###### Parameters

###### type

`ToastType`

The type of the toast

###### message

`string`

The message to display in the toast

###### options

`ToastOptions` = `{}`

Additional options for the toast (title, position, timeout, dismissible)

###### Returns

`Promise`\<`void`\>
