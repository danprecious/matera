import { NextResponse } from "next/server";
// const multer = require('multer');
const fs = require("fs");
const path = require("path");
const os = require("os");

// import prisma from "@/app/libs/prismadb";

import { PrismaClient } from "@prisma/client";
import { GridFSBucket, MongoClient } from "mongodb";

// const upload = multer()

const prisma = new PrismaClient();
const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("matera-local");
const bucket = new GridFSBucket(db, { bucketName: "upload" });

export async function POST(request) {
  // Get data from request
  const data = await request.formData();
  // Get the actual file
  const file = data.get("file"); 

  // create a unique filename for the file
  const uniqueFileName = new Date().getTime() + "-" + file.name;
// store in a temporary location in storage
  const tempFilePath = path.join(os.tmpdir(), uniqueFileName);

  // create buffer and write file to fileSystem
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(tempFilePath, buffer);

  // open a stream from the bucket to enable uplaod
  const uploadStream = bucket.openUploadStream(uniqueFileName);

  // pipe the file from fs to the bucket
  fs.createReadStream(tempFilePath)
    .pipe(uploadStream)
    .on("error", (error) => {
      console.log("Error uploading file");
    })
    .on("finish", () => {
      console.log("File uploaded succefully");

      // cleanup temporary filePath from memory
      fs.unlinkSync(tempFilePath);
    });

  // LOGS
  console.log(data);
  console.log(tempFilePath);
  console.log(file);
  console.log(file.name);
  console.log(uniqueFileName);

  // const newTester = await prisma.tester.create({
  //   data: data,
  // });

  return NextResponse.json(data, { status: 200 });
}
