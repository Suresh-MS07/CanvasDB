import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import type { UseFormRegister,FieldValues,FieldErrors } from "react-hook-form";

export interface AutosaveStatusProps {
  isSaving?: boolean;
  onSave?: () => void;
  onError?: (error: string) => void;
}

export interface AvatarProps {
  src: string | null | undefined;
};

export interface SchemaOption {
  id: "blank" | "example";
  title: string;
  description: string;
  icon: string;
}

export interface ModalProps {
   isOpen?: boolean;
   onClose: () => void;
   onSubmit: () => void;
   title?: string;
   body?: React.ReactElement;
   footer?: React.ReactElement;
   actionLabel: string;
   disabled?: boolean;
   secondaryAction?: () => void;
   secondaryActionLabel?: string;
   onVisualize?: () => void;
   onVisualizeLabel?: string;
   secondaryDisabled?: boolean;
   visualizeDisabled?: boolean;
}

export interface SchemaItem {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  lastModifiedBy?: string;
  modelCount?: number;
  relationCount?: number;
}

export interface MenuItemProps {
   onClick: () => void;
   label: string;
}

export interface NavbarProps {
    currentUser?: SafeUser | null;
}

export interface ContainerProps {
   children: React.ReactNode;
}

export interface FormButtonProps {
   label: string;
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
   outline?: boolean;
   small?: boolean;
   icon?: IconType;
}

export interface HeadigProps {
   title: string;
   subtitle?: string;
   center?: boolean;
}

export interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}


