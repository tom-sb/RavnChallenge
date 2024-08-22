export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: 'none',
  padding: 5,
  background: isDragging ? 'lightgreen' : '',
  ...draggableStyle
});
export const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : '',
});

export const move = <T extends { id: string }>(sorce: T[], destination: T[], droppableSource: any, droppableDestination: any) => {
  const sourceClone = Array.from(sorce);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  return { sourceClone, destClone, removed };
}