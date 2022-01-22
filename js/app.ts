// components
import Modal from "Shared/ts/components/modal";
import { observer } from "Shared/ts/observers/intersection";

const processModalByControllers = () => {
    const modalList: string[] = [];

    observer("[data-modal-dialog-id]", {
        inRange: (controller) => {
            const id = controller.getAttribute("data-modal-dialog-id") ?? "";

            if (modalList.includes(id)) return;

            const container = document.getElementById(id);

            if (!container) return;

            const modal = new Modal(container, {
                ariaLabelledBy: container.getAttribute("aria-labelledby") ?? ""
            });

            modalList.push(id);
        }
    });
};

processModalByControllers();
