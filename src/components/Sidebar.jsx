import { useItemsStore } from "../store/itemStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  console.log("Sidebar rendering...");

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />

      <ButtonGroup />
    </div>
  );
}
