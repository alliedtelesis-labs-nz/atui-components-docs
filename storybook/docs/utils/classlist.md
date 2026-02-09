[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Functions

### classlist()

> **classlist**(`base`, `config?`): (`props?`) => `string`

Defined in: [classlist.ts:20](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/classlist.ts#L20)

A utility function for creating conditional class names similar to class-variance-authority
but implemented locally to avoid dependency issues.

#### Parameters

##### base

`ClassValue`

##### config?

`CVAProperties`

#### Returns

> (`props?`): `string`

##### Parameters

###### props?

`Record`\<`string`, `any`\>

##### Returns

`string`

***

### cn()

> **cn**(...`inputs`): `string`

Defined in: [classlist.ts:96](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/classlist.ts#L96)

Combines class names with clsx

#### Parameters

##### inputs

...`ClassValue`[]

#### Returns

`string`
