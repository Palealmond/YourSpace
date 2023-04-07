import { Textarea } from "@material-tailwind/react";
 
export default function Variants() {
  return (
    <div className="flex flex-col w-96 gap-6">
      <Textarea variant="static" label="Static" placeholder="Static" />
      <Textarea variant="standard" label="Standard" />
      <Textarea variant="outlined" label="Outlined" />
    </div>
  );
}

   