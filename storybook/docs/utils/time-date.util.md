[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Classes

### TimeDateUtil

Defined in: [time-date.util.ts:12](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L12)

#### Constructors

##### Constructor

> **new TimeDateUtil**(): [`TimeDateUtil`](#timedateutil)

###### Returns

[`TimeDateUtil`](#timedateutil)

#### Methods

##### ceilingDateByTimeUnit()

> `static` **ceilingDateByTimeUnit**(`date`, `unit`): `Date`

Defined in: [time-date.util.ts:192](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L192)

ceilingDateByTimeUnit: returns a new date with units added or subtracted

###### Parameters

###### date

`Date`

###### unit

`Duration`

###### Returns

`Date`

##### convertSecondsToUnit()

> `static` **convertSecondsToUnit**(`seconds`, `unit`, `decimalPlaces?`, `roundUp?`): `number`

Defined in: [time-date.util.ts:21](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L21)

convertSecondsToUnit: Convert time value from seconds to the specified unit.

###### Parameters

###### seconds

`number`

###### unit

`TimeUnit` | `TimeExtraOptions`

###### decimalPlaces?

`number`

###### roundUp?

`boolean` = `true`

###### Returns

`number`

##### convertToSeconds()

> `static` **convertToSeconds**(`time`): `number`

Defined in: [time-date.util.ts:60](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L60)

###### Parameters

###### time

`TimeWithUnit`

###### Returns

`number`

##### floorDateByTimeUnit()

> `static` **floorDateByTimeUnit**(`date`, `unit`): `Date`

Defined in: [time-date.util.ts:182](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L182)

floorDateByTimeUnit: returns a new date with units added or subtracted

###### Parameters

###### date

`Date`

###### unit

`Duration`

###### Returns

`Date`

##### getAbsoluteDateRange()

> `static` **getAbsoluteDateRange**(`time`): `DateRange`

Defined in: [time-date.util.ts:90](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L90)

###### Parameters

###### time

`DateRangeStrings`

###### Returns

`DateRange`

##### getCurrentDateFilterInDateRangeFormat()

> `static` **getCurrentDateFilterInDateRangeFormat**(`timeDateFilters`): `DateRange`

Defined in: [time-date.util.ts:215](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L215)

###### Parameters

###### timeDateFilters

`ITimeDateFilter`

###### Returns

`DateRange`

##### getCurrentDatePlusHours()

> `static` **getCurrentDatePlusHours**(`hours`): `Date`

Defined in: [time-date.util.ts:111](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L111)

###### Parameters

###### hours

`number`

###### Returns

`Date`

##### getCurrentOrDefaultUnit()

> `static` **getCurrentOrDefaultUnit**(`currentUnit`, `units`): `TimeUnit` \| `TimeExtraOptions`

Defined in: [time-date.util.ts:129](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L129)

###### Parameters

###### currentUnit

`TimeUnit` | `TimeExtraOptions`

###### units

(`TimeUnit` \| `TimeExtraOptions`)[]

###### Returns

`TimeUnit` \| `TimeExtraOptions`

##### getDataPointIntervalFor30SecPoller()

> `static` **getDataPointIntervalFor30SecPoller**(`startDate`, `endDate`): `number`

Defined in: [time-date.util.ts:147](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L147)

getDataPointIntervalFor30SecPoller: return an interval
that provides up to 120 data points between the start and end date.
Ensure that this is at least one minute and goes up in one minute intervals,
which avoids creating empty buckets, except if the device or Vista is down.

###### Parameters

###### startDate

`Date`

###### endDate

`Date`

###### Returns

`number`

##### getDateFromRelativeTime()

> `static` **getDateFromRelativeTime**(`time`): `Date`

Defined in: [time-date.util.ts:69](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L69)

###### Parameters

###### time

`TimeWithUnit`

###### Returns

`Date`

##### getDateMonthsAgo()

> `static` **getDateMonthsAgo**(`months`, `originalDate`): `Date`

Defined in: [time-date.util.ts:123](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L123)

###### Parameters

###### months

`number`

###### originalDate

`Date`

###### Returns

`Date`

##### getDateRange()

> `static` **getDateRange**(`customDateRange`, `relativeTime`, `defaultDates`): `DateRange`

Defined in: [time-date.util.ts:97](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L97)

###### Parameters

###### customDateRange

`DateRange`

###### relativeTime

`TimeWithUnit`

###### defaultDates

`DateRange`

###### Returns

`DateRange`

##### getDateYearsAgo()

> `static` **getDateYearsAgo**(`years`, `originalDate`): `Date`

Defined in: [time-date.util.ts:117](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L117)

###### Parameters

###### years

`number`

###### originalDate

`Date`

###### Returns

`Date`

##### getRelativeDateRange()

> `static` **getRelativeDateRange**(`time`): `DateRange`

Defined in: [time-date.util.ts:81](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L81)

getRelativeDateRange: convert relative date (e.g. 1 year ago) into absolute dates.
Round the these to the nearest minute because we don't care about the seconds
   startDate depends on what the user has chosen
   endDate is not set as technically there is no absolute end date - this will be set
   to the current date on the back-end (in time-date util -  getDateRangeWithEndDate)

###### Parameters

###### time

`TimeWithUnit`

###### Returns

`DateRange`

##### getSecondsAgoFromDate()

> `static` **getSecondsAgoFromDate**(`date`): `number`

Defined in: [time-date.util.ts:65](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L65)

###### Parameters

###### date

`Date`

###### Returns

`number`

##### isSameDateByUnit()

> `static` **isSameDateByUnit**(`date1`, `date2`, `unit`): `boolean`

Defined in: [time-date.util.ts:207](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L207)

isSameDateByUnit: returns true if the dates are the same to the specified unit granularity

###### Parameters

###### date1

`string` | `Date`

###### date2

`string` | `Date`

###### unit

`Duration`

###### Returns

`boolean`

##### shiftDateByUnit()

> `static` **shiftDateByUnit**(`date`, `amount`, `unit`): `Date`

Defined in: [time-date.util.ts:168](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/time-date.util.ts#L168)

shiftDateByUnit: returns a new date with units added or subtracted

###### Parameters

###### date

`string` | `Date`

###### amount

`number`

integer amount to shift date by .// can be negative for subtraction

###### unit

`Duration`

###### Returns

`Date`
