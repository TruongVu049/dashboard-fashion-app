import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../services/Filebase/filebase";
import { v4 } from "uuid";

function App({ title, imgList, imgIndex, setImgList }) {
  const imagesListRef = ref(storage, "images/");
  return (
    <>
      <div className="col-span-full">
        <label
          htmlFor="photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        <div className="mt-2 flex items-center gap-x-3">
          <label
            htmlFor="file-upload-1"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <input
              disabled={imgList[imgIndex]}
              id="file-upload-1"
              name="file-upload-1"
              type="file"
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
              onChange={(event) => {
                const imageUpload = event.target.files[0];
                if (imageUpload == null) return;
                const nameImage = `images/${imageUpload.name + v4()}`;
                const imageRef = ref(storage, nameImage);
                uploadBytes(imageRef, imageUpload).then((snapshot) => {
                  getDownloadURL(snapshot.ref).then((url) => {
                    setImgList((prev) => [...prev, url]);
                  });
                });
              }}
            />
          </label>
          <div>
            {imgList[imgIndex] && (
              <img className="w-20" src={imgList[imgIndex]} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
