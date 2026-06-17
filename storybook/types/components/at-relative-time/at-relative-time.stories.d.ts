import { Meta, StoryObj } from '@storybook/web-components';
declare const meta: Meta;
export default meta;
/**
 * Basic relative time display. Shows time relative to the current moment.
 */
export declare const Default: StoryObj;
/**
 * Display time from an ISO 8601 string instead of a Date object.
 */
export declare const ISOString: StoryObj;
/**
 * Future timestamps render as "time until" (e.g. "in 3 days"). The tense is
 * chosen automatically from the value — no extra configuration needed.
 */
export declare const FutureTime: StoryObj;
/**
 * Recently updated timestamp. The label refreshes automatically on the
 * component's internal timer — no need to reassign the prop from the host.
 */
export declare const RecentlyUpdated: StoryObj;
/**
 * Pin a fixed refresh cadence with `update_interval` (milliseconds). Here the
 * label recomputes every second; by default the component chooses an adaptive
 * interval based on how old the timestamp is.
 */
export declare const CustomInterval: StoryObj;
/**
 * Display several timestamps at different intervals.
 */
export declare const MultipleTimestamps: StoryObj;
