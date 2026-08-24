[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Classes

### ToasterService

Defined in: [toaster.service.ts:11](https://github.com/alliedtelesis-labs-nz/atui-components/blob/5e5f54a3a7b3ec2a12a2405f934ab396b53fd8bf/atui-components-stencil/src/utils/toaster.service.ts#L11)

#### Constructors

##### Constructor

> **new ToasterService**(): [`ToasterService`](#toasterservice)

###### Returns

[`ToasterService`](#toasterservice)

#### Methods

##### show()

> `static` **show**(`type`, `message`, `options?`): `Promise`\<`AtIToastHandle`\>

Defined in: [toaster.service.ts:25](https://github.com/alliedtelesis-labs-nz/atui-components/blob/5e5f54a3a7b3ec2a12a2405f934ab396b53fd8bf/atui-components-stencil/src/utils/toaster.service.ts#L25)

Show a toast message

###### Parameters

###### type

`AtIToastType`

The type of the toast

###### message

`string`

The message to display in the toast

###### options?

`AtIToastOptions` = `{}`

Additional options for the toast (title, position, timeout, dismissible)

###### Returns

`Promise`\<`AtIToastHandle`\>

A handle to the shown toast, for a caller that needs to take it
down itself. A caller showing an ordinary timed toast can ignore it.
