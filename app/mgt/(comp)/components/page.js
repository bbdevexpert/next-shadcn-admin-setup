import Heading from "@/components/common/Heading";
import CommonInput from "@/components/common/CommonInput";
import CommonSelect from "@/components/common/CommonSelect";
import CommonTextarea from "@/components/common/CommonTextarea";
import CommonCheckbox from "@/components/common/CommonCheckbox";
import CommonRadio from "@/components/common/CommonRadio";
import CommonButton from "@/components/common/CommonButton";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Input" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonInput label="Full Name" placeholder="Full Name" />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Select" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonSelect label="Select Item" placeholder="Full Name" />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Textarea" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonTextarea
            label="Write Message"
            placeholder="Type your message here."
          />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="CheckBox" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonCheckbox
            label="Write Message"
            placeholder="Type your message here."
          />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Radia Group" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonRadio
            label="Write Message"
            placeholder="Type your message here."
          />
        </div>
      </div>
      <div className="h-60 rounded-xl border p-4 relative">
        <div className="absolute top-4 left-5">
          <Heading smallHead="Button" />
        </div>
        <div className="h-full flex items-center justify-center">
          <CommonButton />
        </div>
      </div>
    </div>
  );
}
