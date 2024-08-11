import React from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form"

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && <labe className='inline-block mb-1 pl-1 '>
                {label}
            </labe>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualbloacks",
                                "code",
                                "fullscreen",
                                "inserdatatime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",

                            ],
                            toolbar: "undo redo | bloacks | image| bold italic forecolor | alignleft \
                            aligncenter alignright alignjustify| bullist numlist outdent indent| removeformat | help",
                            content_style: "body {font-family: Helvetica, Arial, sans-serif; font-size: 14px }"
                        }}
                        onEditorChange={onChange}
                    />
                )    
            }
            />
        </div>


    )
}

