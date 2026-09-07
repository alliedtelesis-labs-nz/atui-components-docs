import { ToasterService } from "../../utils/toaster.service";
if (typeof window !== 'undefined') {
    window.ToasterService = ToasterService;
}
export default {
    title: 'Components/Toaster',
    argTypes: {
        position: {
            options: [
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
            ],
            control: { type: 'select' },
        },
        type: {
            options: ['success', 'error', 'info', 'warning', 'default'],
            control: { type: 'select' },
        },
        message: { control: 'text' },
        title: { control: 'text' },
        timeout: { control: 'number' },
        dismissible: { control: 'boolean' },
        closeButton: { control: 'boolean' },
    },
};
const Template = (args) => `
  <at-toaster position="${args.position}">
    <at-button label="Show Toast" type="primaryOutline">
    </at-button>
  </at-toaster>
  <script>
    document.querySelector("at-button").onclick = () => {
      ToasterService.show("${args.type}", "${args.message}", {
        title: "${args.title}",
        position: "${args.position}",
        timeout: ${args.timeout},
        dismissible: ${args.dismissible},
      closeButton: ${args.closeButton},
    });
  };
  </script>
`;
export const Default = Template.bind({});
Default.args = {
    position: 'bottom-right',
    type: 'success',
    title: 'Success!',
    message: 'Operation completed successfully',
    timeout: 5000,
    dismissible: true,
    closeButton: false,
};
/**
 * The friction ladder's low tier: act now, then offer the way back on the toast
 * itself rather than pre-confirming. Taking the action dismisses the toast. The
 * countdown bar says how long the offer stands, and hovering the toast or
 * tabbing into it stops the clock, resuming with the time that was left.
 */
export const WithUndoAction = () => `
  <at-button data-name="remove" label="Remove Widget" type="destructive"></at-button>
  <p data-name="state">Widget is on the dashboard</p>
  <script>
    const state = document.querySelector('[data-name="state"]');
    document.querySelector('[data-name="remove"]').onclick = () => {
      state.textContent = "Widget removed";
      ToasterService.show("info", "Widget removed.", {
        timeout: 8000,
        action: {
          label: "Undo",
          onTrigger: () => {
            state.textContent = "Widget is on the dashboard";
          },
        },
      });
    };
  </script>
`;
/**
 * A toast for a condition rather than an event: `timeout: 0` so it never
 * expires on its own, and the handle `show` returns is what takes it down when
 * the condition clears. Dismissing twice, or after the toast has been tapped
 * away, does nothing.
 */
export const DismissedByHandle = () => `
  <at-button data-name="show" label="Start" type="primary"></at-button>
  <at-button data-name="dismiss" label="Recovered" type="secondary"></at-button>
  <script>
    let handle = null;
    document.querySelector('[data-name="show"]').onclick = async () => {
      handle ??= await ToasterService.show("error", "Cannot reach the service", {
        title: "Reconnecting",
        timeout: 0,
      });
    };
    document.querySelector('[data-name="dismiss"]').onclick = async () => {
      await handle?.dismiss();
      handle = null;
    };
  </script>
`;
/**
 * Every dismissible toast with a timeout carries a countdown bar. Hover it, or
 * tab into it, and the clock stops until you leave: a toast the user is reading
 * or reaching for should not be pulled out from under them. A long timeout here
 * so the pause is easy to see by hand.
 */
export const PausesOnHover = () => `
  <at-button data-name="show" label="Show a slow toast" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ToasterService.show("success", "Hover me, or tab to the Undo.", {
        title: "Saved",
        timeout: 15000,
        action: { label: "Undo", onTrigger: () => {} },
      });
    };
  </script>
`;
/**
 * The bar carries the toast's type, drawn from the same accent token as the
 * message icon, so the countdown reads as part of the message rather than as
 * chrome bolted underneath it. Raises all five at once to compare.
 */
export const CountdownByType = () => `
  <at-button data-name="show" label="Show every type" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ["default", "info", "success", "warning", "error"].forEach((type) =>
        ToasterService.show(type, \`A \${type} toast, counting down.\`, {
          timeout: 15000,
        }),
      );
    };
  </script>
`;
