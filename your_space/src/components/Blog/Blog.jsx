import { Textarea,  Input } from "@material-tailwind/react";
import React from 'react'

export default function BlogEntry() {
  return (
    <>
      <h1>Blog Post</h1>
      <div className="flex flex-col w-72 gap-6"></div>
      <Input variant="static" label="Static" placeholder="Static" />
      <Input variant="standard" label="Standard" />
      <div className="flex flex-col w-96 gap-6">
      <Textarea variant="outlined" label="Outlined" />
    </div>
    </>
  )
}
 

  