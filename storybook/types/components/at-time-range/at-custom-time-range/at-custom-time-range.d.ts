import { EventEmitter } from '../../../stencil-public-runtime';
import { DateRangeStrings } from '../../../types';
import { SelectOption } from '../../../types/select';
export declare class AtCustomTimeRangeComponent {
    /**
     * Whether time selection is enabled in addition to date selection
     */
    can_set_time: boolean;
    /**
     * Minimum number of seconds for the time range
     */
    min_seconds: number;
    /**
     * Minimum selectable date
     */
    min_date: Date;
    validateMinDate(newValue: Date, oldValue: Date): void;
    /**
     * Maximum selectable date
     */
    max_date: Date;
    validateMaxDate(newValue: Date, oldValue: Date): void;
    /**
     * Default value for the from date
     */
    default_from_date: Date;
    validateDefaultFromDate(newValue: Date, oldValue: Date): void;
    /**
     * Default value for the to date
     */
    default_to_date: Date;
    validateDefaultToDate(newValue: Date | null, oldValue: Date | null): void;
    /**
     * Current value of the from date
     */
    from_date_value: Date;
    validateFromDateValue(newValue: Date | null, oldValue: Date | null): void;
    /**
     * Current value of the to date
     */
    to_date_value: Date;
    validateToDateValue(newValue: Date | null, oldValue: Date | null): void;
    /**
     * Whether to lock the end date to the current time
     */
    lock_end_date_to_now: boolean;
    isFromMinDay: boolean;
    isToMaxDay: boolean;
    isFromMaxDay: boolean;
    isToMinDay: boolean;
    toDate: string;
    toTime: string;
    fromDate: string;
    fromTime: string;
    translations: any;
    setDateNowSwitch: HTMLAtToggleSwitchElement;
    toDatePickerEl: HTMLInputElement;
    toTimePickerEl: HTMLAtSelectElement;
    el: any;
    componentWillLoad(): Promise<void>;
    componentWillRender(): void;
    clearSelection(): void;
    private ceilingMaxDate;
    private floorMinDate;
    private getCustomToDateTime;
    private getCustomFromDateTime;
    private updateMinMaxFlags;
    protected setDateNow(): void;
    private setToDateAndTime;
    private setFromDateAndTime;
    get getFromTimes(): SelectOption[];
    get getToTimes(): SelectOption[];
    /**
     * Emitted when the user cancels the time range selection
     */
    atuiCancel: EventEmitter<null>;
    /**
     * Emitted when the user submits the time range selection
     */
    atuiSubmit: EventEmitter<DateRangeStrings>;
    handleCancel(): void;
    handleSubmit(): void;
    render(): any;
}
