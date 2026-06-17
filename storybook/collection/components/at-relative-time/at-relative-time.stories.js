import { html } from "lit";
const meta = {
    title: 'Components/Feedback/Relative Time',
    tags: ['autodocs'],
};
export default meta;
/**
 * Basic relative time display. Shows time relative to the current moment.
 */
export const Default = {
    render: () => {
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 6);
        return html `<at-relative-time
            .timestamp=${pastDate}
        ></at-relative-time>`;
    },
};
/**
 * Display time from an ISO 8601 string instead of a Date object.
 */
export const ISOString = {
    render: () => html `<at-relative-time
            timestamp="2026-06-02T10:30:00Z"
        ></at-relative-time>`,
};
/**
 * Future timestamps render as "time until" (e.g. "in 3 days"). The tense is
 * chosen automatically from the value — no extra configuration needed.
 */
export const FutureTime = {
    render: () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 3);
        return html `<at-relative-time
            .timestamp=${futureDate}
        ></at-relative-time>`;
    },
};
/**
 * Recently updated timestamp. The label refreshes automatically on the
 * component's internal timer — no need to reassign the prop from the host.
 */
export const RecentlyUpdated = {
    render: () => {
        const pastDate = new Date();
        pastDate.setMinutes(pastDate.getMinutes() - 30);
        return html `<at-relative-time
            .timestamp=${pastDate}
        ></at-relative-time>`;
    },
};
/**
 * Pin a fixed refresh cadence with `update_interval` (milliseconds). Here the
 * label recomputes every second; by default the component chooses an adaptive
 * interval based on how old the timestamp is.
 */
export const CustomInterval = {
    render: () => {
        const justNow = new Date(Date.now() - 5000);
        return html `<at-relative-time
            .timestamp=${justNow}
            update_interval="1000"
        ></at-relative-time>`;
    },
};
/**
 * Display several timestamps at different intervals.
 */
export const MultipleTimestamps = {
    render: () => {
        const now = new Date();
        const justNow = new Date(now.getTime() - 30000); // 30 seconds ago
        const anHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
        const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
        const aMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const inThreeDays = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
        const inFiveMonths = new Date(now.getTime() + 150 * 24 * 60 * 60 * 1000);
        return html `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                    Just now:
                    <at-relative-time .timestamp=${justNow}></at-relative-time>
                </div>
                <div>
                    1 hour ago:
                    <at-relative-time
                        .timestamp=${anHourAgo}
                    ></at-relative-time>
                </div>
                <div>
                    2 days ago:
                    <at-relative-time
                        .timestamp=${twoDaysAgo}
                    ></at-relative-time>
                </div>
                <div>
                    1 month ago:
                    <at-relative-time
                        .timestamp=${aMonthAgo}
                    ></at-relative-time>
                </div>
                <div>
                    In 3 days:
                    <at-relative-time
                        .timestamp=${inThreeDays}
                    ></at-relative-time>
                </div>
                <div>
                    In 5 months:
                    <at-relative-time
                        .timestamp=${inFiveMonths}
                    ></at-relative-time>
                </div>
            </div>
        `;
    },
};
