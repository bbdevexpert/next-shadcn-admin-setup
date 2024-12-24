"use client";
import Heading from "@/components/Common/Heading";
import { Button } from "@/components/ui/button";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { useState } from "react";
import SortableLinks from "@/components/SortableLinks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddNewItem } from "@/components/AddNewItem";
import { useRouter } from "next/navigation";
import CommonInput from "@/components/Common/CommonInput";
import CommonTextarea from "@/components/Common/CommonTextarea";
import CommonSelect from "@/components/Common/CommonSelect";
import { CircleEllipsis } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Page() {
  const router = useRouter();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [items, setItems] = useState([
    { name: "Section 1", id: 2 },
    { name: "Section 2", id: 3 },
    { name: "Section 3", id: 4 },
  ]);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  }

  function handleDelete(idToDelete) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  }

  let idx = Date.now();

  function addNewItem(newItem) {
    setItems((prevItems) => [...prevItems, { name: newItem, id: idx }]);
  }

  return (
    <div>
      <div className="flex justify-between mb-3">
        <Heading smallHead="Create Portfolios" />
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => router.push("/portfolios")}>
            Cancel
          </Button>
          <Button onClick={() => router.push("/portfolios")}>Save</Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-4">
          <div className="select-none">
            <Card className="w-full">
              <CardHeader className="space-y-1 ">
                <CardTitle className="text-xl flex justify-between">
                  Banner Details
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <CommonInput label="Page URL" />
                <CommonInput label="Heading" />
                <CommonInput label="Image" type="file" />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="w-full">
              <CardHeader className="space-y-1 ">
                <CardTitle className="text-xl flex justify-between">
                  Meta Details
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <CommonInput label="Title" />
                <CommonTextarea label="Description" />
                <CommonInput label="Image" type="file" />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-4">
          {/* <div className="select-none ">
            <Card className="w-full h-full">
              <CardHeader className="space-y-1 ">
                <CardTitle className="text-xl flex justify-between">
                  List of Sections
                  <AddNewItem addNewItem={addNewItem} />
                </CardTitle>
                <CardDescription>
                  Add, update, delete, or rearrange sections as needed.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                >
                  <SortableContext
                    items={items}
                    strategy={verticalListSortingStrategy}
                  >
                    {items.map((item) => (
                      <SortableLinks
                        key={item.id}
                        id={item}
                        onDelete={handleDelete}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
              </CardContent>
            </Card>
          </div> */}
          <div>
            <Card className="w-full">
              <CardHeader className="space-y-1 ">
                <CardTitle className="text-xl flex justify-between">
                  List of Sections
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="border p-4 rounded-lg flex justify-between items-center">
                  <div className="font-semibold">Section 1</div>
                  <div>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="p-2">
                          <CircleEllipsis />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Section</SheetTitle>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <CommonInput label="Heading" />
                          <CommonInput label="Paragraph" />
                          <CommonInput label="Images" type="file" />
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
                <div className="border p-4 rounded-lg flex justify-between items-center">
                  <div className="font-semibold">Section 2</div>
                  <div>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="p-2">
                          <CircleEllipsis />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Section</SheetTitle>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <CommonInput label="Heading" />
                          <CommonInput label="Paragraph" />
                          <CommonInput label="Images" type="file" />
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
                <div className="border p-4 rounded-lg flex justify-between items-center">
                  <div className="font-semibold">Section 3</div>
                  <div>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="p-2">
                          <CircleEllipsis />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Section</SheetTitle>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <CommonInput label="Heading" />
                          <CommonInput label="Paragraph" />
                          <CommonInput label="Images" type="file" />
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="w-full">
              <CardHeader className="space-y-1 ">
                <CardTitle className="text-xl flex justify-between">
                  Services / Industry
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <CommonSelect label="Select Services" />
                <CommonSelect label="Select Industry" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
