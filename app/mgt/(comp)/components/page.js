"use client";
import { useState } from "react";
import {
  CommonInput,
  CommonButton,
  CommonSelect,
  CommonTextarea,
  Heading,
  CommonRadio,
  CommonCheckbox,
} from "@/components/common";
import { TagSelector } from "@/components/ui/tag-selector";
import { CombinedForm } from "@/components/common/Form";

export default function Page() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [radioOption, setRadioOption] = useState("React");

  const availableTags = [
    { id: "1", label: "React" },
    { id: "2", label: "TypeScript" },
    { id: "3", label: "JavaScript" },
    { id: "4", label: "Next.js" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-3">
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Input" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonInput
            label="Full Name"
            placeholder="Full Name"
            id="full_name"
          />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Button" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonButton name={"Button"} />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Textarea" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonTextarea
            label="Write Message"
            id="text_area"
            placeholder="Type your message here."
          />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Select" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonSelect
            label="Select Item"
            id="select"
            placeholder="Select Item"
            selectList={availableTags}
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
          />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Radio Group" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonRadio
            row
            defaultValue={radioOption}
            radioList={availableTags}
            onValueChange={(value) => setRadioOption(value)}
            id="select_radio"
            label="Select Item"
          />
        </div>
      </div>

      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="CheckBox" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonCheckbox
            row
            label="Write Message"
            placeholder="Type your message here."
            checkList={availableTags}
          />
        </div>
      </div>

      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Tag Selector" />
        </div>
        <div className="h-full flex items-center justify-center">
          <TagSelector
            className="max-w-[400px]"
            availableTags={availableTags}
            selectedTags={selectedTags}
            onChange={setSelectedTags}
            getValue={(tag) => tag.id}
            getLabel={(tag) => tag.label}
            createTag={(label) => ({ id: crypto.randomUUID(), label })}
          />
        </div>
      </div>
      <div className="rounded-xl border p-6 relative">
        <div className="">
          <Heading smallHead="Form" />
        </div>
        <div className="mt-7">
          <CombinedForm />
        </div>
      </div>
    </div>
  );
}
