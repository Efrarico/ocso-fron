"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { ReactNode } from "react";

export default function CreateEmployee({
  children,
  icon,
  photo,
}: {
  children: ReactNode;
  icon: ReactNode;
  photo: string | undefined;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Image
        src={photo}
        onClick={onOpen}
        isZoomed
        className="object-cover"
        classNames={{
          img: "size-60",
        }}
      />
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
