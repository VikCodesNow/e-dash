"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return(
        <Modal
        title="Create Store"
        description="Creates a new store for you"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
      >
        Form to be added
      </Modal>
    );
};
