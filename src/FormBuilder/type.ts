import { UseFormReturnType } from "@mantine/form";

export type UIElement = {
  name: string;
  type: UIElementType;
  viewBoxType: "Menu" | "Form" | "DataForm";
  position: number;
  id: number;
};

export type UIElementType = 
'Input' 
|'Button' 
|'Single Select Checkbox'
|'Multi Select Checkbox' 
|'Single Select DropDown'
|'Multi Select DropDown' 
|'Text'
|'Checkbox'
|'Text'
|'Image'
|'Textarea'
|'Date'
|'Color'
|'Uploader'

export interface Attribute {
  name: string;
  type: string;
  icon: JSX.Element;
  position: number;
  id: number;
}

export interface CustomElementProps{
  type: UIElementType;
  id: number;
}
export interface RenderComponentProps{
  type: UIElementType;
}
export type FormState = {
  formList: UIElement[];
  addFormElement: (form: UIElement) => void;
  removeFormElement: (id: number) => void;
  updateFormElement: (id: number, newForm: UIElement) => void;
  updateFormElementIndex: (id: number, elementId: number) => void;
};


export type CreateAttributeProps = {
  attribute: Attribute;
};

export type AttributesWraperProps = {
  children: React.ReactElement[];
};
export type RenderComponenProps<T> = {
  componentType: string;
  formAddapter:UseFormReturnType<T>;
}

export type DroppableFormAreaProps = {
  onDrop: (attribute: UIElement) => void;
  formListState: UIElement[];
  removeFormList: (attributeId: number) => void;
};
export interface FormProviderProp {
  children:React.ReactElement
}






export interface stateProps {
  callBackState: (names: string[]) => void;
  attributes: Attribute[];
  setAttributes: React.Dispatch<React.SetStateAction<Attribute[]>>;
}
export interface viewHandlerProps {
  isLoading?: boolean;
  taskName?: string;
}



export interface DragStartProps {
    ev: React.DragEvent;
    id: string;
}



export interface Props {
  callBackState: (names: string[]) => void;
  attributes: Attribute[];
  setAttributes: React.Dispatch<React.SetStateAction<Attribute[]>>;
  isLoading?: boolean;
  taskName?: string;
}
export interface ActionProps {
  attributes: Attribute[];
  setAttributes: React.Dispatch<React.SetStateAction<Attribute[]>>;
  isLoading?: boolean;
  taskName: string;
  ev?: React.DragEvent;
}
export interface DragEventProps {
  ev: React.DragEvent;
  renderType?: "Menu" | "Form";
  attributes: Attribute[];
  setAttributes: React.Dispatch<React.SetStateAction<Attribute[]>>;
  targetId?:number
}
export interface renderTaskProps extends Props {
  viewBoxType?: "Menu" | "Form";
}
