"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  file: z.any().refine((file) => file instanceof File, {
    message: "Cover image is required",
  }),
});

const Upload = () => {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/fetch");
      const { data } = response;
      console.log(data);
      setTestData(data);
    }

    fetchData();
  }, []);

  const { handleSubmit, register, control, formState } = useForm({
    resolver: zodResolver(schema),
    // defaultValues: {}
  });

  const handleUpload = async (data) => {
    // e.preventDefault();
    console.log(data);

    const formData = new FormData();

    formData.append('file', data.file)
    
    try {
      const response = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Reset form or navigate to another page after successful submission
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="flex justify-between flex-col">
      <div className="">
        <div>
          <h2 className="text-[1em] text-primary font-bold my-2">Uploads</h2>
          <div className="">
            {testData.map((data, index) => {
              return (
                <div key={index} className="text-primary">
                  {data?.filename} {data.file}
                </div>
              );
            })}
          </div>

          <p className="text-[0.7rem]">Click the button to make an upload...</p>
        </div>
      </div>
      <div>
        <form className="py-2" onSubmit={handleSubmit(handleUpload)}>
          <Controller
            control={control}
            name="file"
            render={({ field: { value, onChange, ...field } }) => (
              <input
                {...field}
                onChange={(e) => {
                  onChange(e.target.files[0]);
                }}
                id="file"
                type="file"
              />
            )}
          />
          <button
            type="submit"
            className="bg-primary text-white rounded-md px-3 py-2 w-[100%] font-medium"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
