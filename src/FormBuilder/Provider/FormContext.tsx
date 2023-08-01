import React, { createContext, useContext, useState } from 'react';
import { FormProviderProp, FormState, UIElement } from '../type';

const FormContext = createContext<FormState | undefined>(undefined);

export const useFormState = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
};

const FormProvider: React.FC<FormProviderProp> = ({ children }) => {
    const [formList, setFormList] = useState<UIElement[]>([]);

    React.useEffect(() => {
      // Fetch the list of forms from the backend server
      // axios
      //   .get("http://localhost:3000/forms")
      //   .then((response) => {
      //     setFormList(response.data);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching forms:", error);
      //   });
    }, []);
  
    const addFormElement = (form: UIElement) => {
      const maxId = formList.reduce((max, form) => ((form.id &&form.id > max) ? form.id : max), 0);
      const newForm: UIElement = { ...form, id: maxId + 1 };
      setFormList((prevFormList) => [...prevFormList, newForm]);
    };
  
    const removeFormElement = (id: number) => {
      setFormList((prevFormList) => prevFormList.filter((form) => form.id !== id));
    };
  
    const updateFormElement = (id: number, newForm: UIElement) => {
      setFormList((prevFormList) =>
        prevFormList.map((form) => (form.id === id ? newForm : form))
      );
    };
    const updateFormElementIndex = (id: number, elementId: number) => {
        const dragIndex = formList.findIndex((form) => form.position === elementId);
        const hoverIndex = formList.findIndex((form) => form.position === id);

            // The instalition of the list 
            console.log("The instalition of the list")                                
            const reorderedFormList = [...formList];
            console.log({reorderedFormList})


            // The draged list
            console.log("The draged list")                                
            const [draggedForm] = reorderedFormList.splice(dragIndex, 1);
            console.log({draggedForm})

            // The updated order/index list
            console.log("The updated order/index list")                                
            reorderedFormList.splice(hoverIndex, 0, draggedForm);
            console.log({reorderedFormList})

            // The updated position of the list
            console.log("The updated position of the list")                
            const updatedList =  reorderedFormList.map((form, index) => ({
                ...form,position: index
            }))

            console.log("updatedList")
            console.log(updatedList)
            // set the updated order list to the state
            setFormList(reorderedFormList);
      };

    return (
      <FormContext.Provider value={{ formList, addFormElement, removeFormElement, updateFormElement,updateFormElementIndex }}>
        {children}
      </FormContext.Provider>
    );
  };
  
export default FormProvider;
