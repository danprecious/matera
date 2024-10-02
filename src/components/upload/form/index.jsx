"use client";
import { useContext, useState } from "react";
import { StateContext } from "@/state_manager/context";
import {
  FaFile,
  FaFileImport,
  FaFolder,
  FaFolderPlus,
  FaTimes,
} from "react-icons/fa";

const UploadForm = () => {
  const { state, dispatch } = useContext(StateContext);
  const {uploadModal} = state

  return (
    <div>
      {state.uploadModal && (
        <div className="fixed min-h-[100vh] bg-black/95 w-[100vw] z-50 flex justify-center items-center px-4 py-8">
          <div className="w-full md:w-[70%] lg:w-[50%] relative bg-stone-900 rounded-lg md:h-[90vh] lg:h-[90vh] h-[90vh] md:p-5 py-5">
            <div className="absolute top-3 right-3 p-2">
              <button onClick={() => {
                dispatch({type: "UPLOAD_MODAL", payload: !uploadModal})
              }}>
                <FaTimes className="text-[1.5em]" />
              </button>
            </div>
            <div className="text-center py-3 mb-5">
              <h2 className="text-secondar text-[1.5rem] ">Upload Material</h2>
            </div>

            <form className="flex flex-col items-center">
              <div className="w-full flex justify-center">
                <div className="border-dashed border-2 border-secondary rounded-2xl h-[7em] w-[70%] flex justify-center items-center flex-col">
                  <p>Drag and drop</p>
                  <FaFolderPlus className="text-[2rem]" />
                </div>
              </div>
              <div className="py-5 w-full px-3">
                <div className="p-2 flex flex-col">
                  <label htmlFor="title" className="text-sm">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Title of the material"
                    className="input"
                  />
                </div>
                <div className="md:flex ">
                  <div className="p-2 flex flex-col w-full">
                    <label htmlFor="fieldOfStudy" className="text-sm">
                      Field of study
                    </label>
                    <input
                      type="text"
                      placeholder="e.g Engineering, Medicine... "
                      className="input"
                      name="fieldOfStudy"
                    />
                  </div>
                  <div className="p-2 flex flex-col w-full">
                    <label htmlFor="programme" className="text-sm">
                      Programme
                    </label>
                    <input
                      type="text"
                      placeholder="e.g Mechanical Engineering... "
                      className="input"
                    />
                  </div>
                </div>
                <div className="md:flex ">
                  <div className="p-2 flex flex-col w-full">
                    <label htmlFor="semester" className="text-sm">
                      Semester
                    </label>
                    <input
                      type="text"
                      placeholder="e.g Engineering, Medicine... "
                      className="input"
                      name="semester"
                    />
                  </div>
                  <div className="p-2 flex flex-col w-full">
                    <label htmlFor="programme" className="text-sm">
                      Material type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g Lecture material, past questions... "
                      className="input"
                      name="materialType"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="btn" type="submit">
                  Upload Material
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
