import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
type FormListType={
    id:number,
    label:string,
    position:number,
}
const FormElement: React.FC<{ 
    form: FormListType,
    formList:FormListType[],
    setFormList:React.Dispatch<React.SetStateAction<FormListType[]>>

}> = ({ form,formList,setFormList }) => {


  const { id, label } = form;

  const [{ isDragging }, drag] = useDrag({
    type: 'FORM_ELEMENT',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'FORM_ELEMENT',
    hover: (item: { id: number }) => {
           setTimeout(() => {
            // console.log({
            //     item:item.id,
            //     id:id
            // });

           }, 600);
           if (item.id !== id) {
            const dragIndex = formList.findIndex((form) => form.id === item.id);
            const hoverIndex = formList.findIndex((form) => form.id === id);

            console.log({
                dragIndex,
                hoverIndex
            });

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
          }


    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <li ref={(node) => drag(drop(node))} style={{ 
        opacity,
        height:"30px",
        width:"200px",
        border:isDragging?"1px inset gray":"1px solid",
        borderRadius:"7px",
        marginBottom:"5px",
        color:isDragging?'transparent':'inherit'
        }}>
      {label}
    </li>
  );
};

const FormList: React.FC<{ 
    formList:FormListType[],
    setFormList:React.Dispatch<React.SetStateAction<FormListType[]>>

}> = ({
    formList,setFormList
}) => {

  return (
    <div>
      <ul style={
        {
            padding:'10px',
        }
      }>
        {formList.map((form) => (
          <FormElement key={form.position} form={form} formList={formList} setFormList={setFormList} />
        ))}
      </ul>
    </div>
  );
};

const AppCompact: React.FC = () => {

   const [formList,setFormList] = React.useState<FormListType[]>([
    {
    id:1,
    label:"data 1",
    position:0
   },
   {
    id:2,
    label:"data 2",
    position:1
   },
   {
    id:3,
    label:"data 3",
    position:2
   },
   {
    id:4,
    label:"data 4",
    position:3
   }

]
   )
   React.useEffect(() => {
     
  // console.log(formList)
     return () => {
      // console.log("========")
     }
   }, [formList])
   
  return (
    <DndProvider backend={HTML5Backend}>
        <FormList formList={formList} setFormList={setFormList} />
        <FormList formList={formList} setFormList={setFormList} />

    </DndProvider>
  );
};

export default AppCompact;
