[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Classes

### FlooredDateRange

Defined in: [time-date-presentation.util.ts:270](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L270)

#### Implements

- `DateRange`

#### Constructors

##### Constructor

> **new FlooredDateRange**(`startDate`, `endDate`, `unit`): [`FlooredDateRange`](#flooreddaterange)

Defined in: [time-date-presentation.util.ts:271](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L271)

###### Parameters

###### startDate

`Date`

###### endDate

`Date`

###### unit

`Duration`

###### Returns

[`FlooredDateRange`](#flooreddaterange)

#### Properties

##### endDate

> `readonly` **endDate**: `Date`

Defined in: [time-date-presentation.util.ts:273](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L273)

###### Implementation of

`DateRange.endDate`

##### startDate

> `readonly` **startDate**: `Date`

Defined in: [time-date-presentation.util.ts:272](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L272)

###### Implementation of

`DateRange.startDate`

#### Methods

##### create()

> `static` **create**(`timeRange`, `unit`): [`FlooredDateRange`](#flooreddaterange)

Defined in: [time-date-presentation.util.ts:280](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L280)

###### Parameters

###### timeRange

###### end

`Date`

###### start

`Date`

###### unit

`Duration`

###### Returns

[`FlooredDateRange`](#flooreddaterange)

***

### TimeDatePresentationUtil

Defined in: [time-date-presentation.util.ts:18](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L18)

#### Constructors

##### Constructor

> **new TimeDatePresentationUtil**(): [`TimeDatePresentationUtil`](#timedatepresentationutil)

###### Returns

[`TimeDatePresentationUtil`](#timedatepresentationutil)

#### Methods

##### buildDateFromStrings()

> `static` **buildDateFromStrings**(`fromDate`, `fromTime`): `Date`

Defined in: [time-date-presentation.util.ts:35](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L35)

###### Parameters

###### fromDate

`string`

###### fromTime

`string`

###### Returns

`Date`

##### convertTimeRange()

> `static` **convertTimeRange**(`timeRange`): `object`

Defined in: [time-date-presentation.util.ts:125](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L125)

###### Parameters

###### timeRange

`ISelectedTimeRange`

###### Returns

`object`

###### end

> **end**: `Date`

###### start

> **start**: `Date`

##### convertTimeRangeInNumber()

> `static` **convertTimeRangeInNumber**(`timeRange`): `object`

Defined in: [time-date-presentation.util.ts:144](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L144)

###### Parameters

###### timeRange

`ISelectedTimeRange`

###### Returns

`object`

###### end

> **end**: `number`

###### start

> **start**: `number`

##### getCustomFromAndToDate()

> `static` **getCustomFromAndToDate**(`timeRange`): `object`

Defined in: [time-date-presentation.util.ts:71](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L71)

###### Parameters

###### timeRange

`ISelectedTimeRange`

###### Returns

`object`

###### fromDate

> **fromDate**: `Date`

###### toDate

> **toDate**: `Date`

##### getDateLabelMessage()

> `static` **getDateLabelMessage**(`selectedTime`, `format`): `string`

Defined in: [time-date-presentation.util.ts:52](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L52)

###### Parameters

###### selectedTime

`ISelectedTimeRange`

###### format

`DateFormat`

###### Returns

`string`

##### getDayCountFromDateFilter()

> `static` **getDayCountFromDateFilter**(`dateFilter`): `number`

Defined in: [time-date-presentation.util.ts:238](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L238)

###### Parameters

###### dateFilter

`DateRange`

###### Returns

`number`

##### getFormattedDate()

> `static` **getFormattedDate**(`date`, `dateFormat`): `string`

Defined in: [time-date-presentation.util.ts:160](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L160)

###### Parameters

###### date

`string` | `Date`

###### dateFormat

`DateFormat` = `DateFormat.STANDARD`

###### Returns

`string`

##### getHourCountFromTimeRange()

> `static` **getHourCountFromTimeRange**(`timeRange`): `number`

Defined in: [time-date-presentation.util.ts:245](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L245)

###### Parameters

###### timeRange

`ISelectedTimeRange`

###### Returns

`number`

##### getIntervalFor30sPollerFromTimeRange()

> `static` **getIntervalFor30sPollerFromTimeRange**(`timeRange`): `number`

Defined in: [time-date-presentation.util.ts:152](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L152)

###### Parameters

###### timeRange

`ISelectedTimeRange`

###### Returns

`number`

##### getIntervalString()

> `static` **getIntervalString**(`start`, `end`, `translations`): `string`

Defined in: [time-date-presentation.util.ts:221](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L221)

###### Parameters

###### start

`Date`

###### end

`Date`

###### translations

`any`

###### Returns

`string`

##### getTimeOptions()

> `static` **getTimeOptions**(`startTime`, `endTime`): `SelectOption`[]

Defined in: [time-date-presentation.util.ts:89](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L89)

###### Parameters

###### startTime

`string` = `'12:00 am'`

###### endTime

`string` = `'11:00 pm'`

###### Returns

`SelectOption`[]

##### isCustomRange()

> `static` **isCustomRange**(`timeRange`): `boolean`

Defined in: [time-date-presentation.util.ts:261](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L261)

###### Parameters

###### timeRange

`ISelectedTimeRange`

###### Returns

`boolean`

##### translateDurationString()

> `static` **translateDurationString**(`duration`, `translations`): `string`

Defined in: [time-date-presentation.util.ts:195](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date-presentation.util.ts#L195)

###### Parameters

###### duration

`string`

###### translations

`any`

###### Returns

`string`
