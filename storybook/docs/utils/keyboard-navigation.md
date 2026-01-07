[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Interfaces

### KeyboardNavigationOptions

Defined in: [keyboard-navigation.ts:4](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L4)

#### Properties

##### container

> **container**: `HTMLElement`

Defined in: [keyboard-navigation.ts:5](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L5)

##### focusOnOpen?

> `optional` **focusOnOpen**: `boolean`

Defined in: [keyboard-navigation.ts:9](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L9)

##### onEnter()?

> `optional` **onEnter**: (`target`) => `void`

Defined in: [keyboard-navigation.ts:7](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L7)

###### Parameters

###### target

`HTMLElement`

###### Returns

`void`

##### onEscape()?

> `optional` **onEscape**: () => `void`

Defined in: [keyboard-navigation.ts:6](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L6)

###### Returns

`void`

##### onSpace()?

> `optional` **onSpace**: (`target`) => `void`

Defined in: [keyboard-navigation.ts:8](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L8)

###### Parameters

###### target

`HTMLElement`

###### Returns

`void`

## Variables

### FOCUSABLE\_SELECTOR

> `const` **FOCUSABLE\_SELECTOR**: "button, \[href\], input, select, textarea, \[tabindex\]:not(\[tabindex=\"-1\"\])" = `'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'`

Defined in: [keyboard-navigation.ts:1](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L1)

## Functions

### createMenuKeydownHandler()

> **createMenuKeydownHandler**(`options`): (`event`) => `void`

Defined in: [keyboard-navigation.ts:127](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L127)

#### Parameters

##### options

[`KeyboardNavigationOptions`](#keyboardnavigationoptions)

#### Returns

> (`event`): `void`

##### Parameters

###### event

`KeyboardEvent`

##### Returns

`void`

***

### focusElementAtIndex()

> **focusElementAtIndex**(`elements`, `index`): `void`

Defined in: [keyboard-navigation.ts:18](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L18)

#### Parameters

##### elements

`HTMLElement`[]

##### index

`number`

#### Returns

`void`

***

### focusFirstElement()

> **focusFirstElement**(`container`, `delay`): `void`

Defined in: [keyboard-navigation.ts:159](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L159)

#### Parameters

##### container

`HTMLElement`

##### delay

`number` = `50`

#### Returns

`void`

***

### getCurrentFocusIndex()

> **getCurrentFocusIndex**(`elements`): `number`

Defined in: [keyboard-navigation.ts:28](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L28)

#### Parameters

##### elements

`HTMLElement`[]

#### Returns

`number`

***

### getFocusableElements()

> **getFocusableElements**(`container`): `HTMLElement`[]

Defined in: [keyboard-navigation.ts:12](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L12)

#### Parameters

##### container

`HTMLElement`

#### Returns

`HTMLElement`[]

***

### handleArrowNavigation()

> **handleArrowNavigation**(`event`, `container`): `void`

Defined in: [keyboard-navigation.ts:32](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L32)

#### Parameters

##### event

`KeyboardEvent`

##### container

`HTMLElement`

#### Returns

`void`

***

### handleHomeEndNavigation()

> **handleHomeEndNavigation**(`event`, `container`): `void`

Defined in: [keyboard-navigation.ts:66](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L66)

#### Parameters

##### event

`KeyboardEvent`

##### container

`HTMLElement`

#### Returns

`void`

***

### handleTabFocusTrap()

> **handleTabFocusTrap**(`event`, `container`): `void`

Defined in: [keyboard-navigation.ts:86](https://github.com/alliedtelesis-labs-nz/atui-components/blob/990f7f01fc6387c1eec7eb1391b96e19db5111a1/atui-components-stencil/src/utils/keyboard-navigation.ts#L86)

#### Parameters

##### event

`KeyboardEvent`

##### container

`HTMLElement`

#### Returns

`void`
