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
