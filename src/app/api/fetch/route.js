import { NextResponse } from "next/server";
import axios from "axios";
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

await client.connect();

export async function GET(request) {
  //  get files from db bucket
  const filesCursor = bucket.find();
  const files = await filesCursor.toArray();

  const fileData = [];

  for (const file of files) {
    const downloadStream = bucket.openDownloadStream(file._id);

    const chunks = [];
    for await (const chunk of downloadStream) {
      chunks.push(chunk);
    }

    fileData.push({
      filename: file.filename,
      content: Buffer.concat(chunks),
      metaData: file.metadata,
    });
  }

  const allTesters = await prisma.tester.findMany();

  console.log(allTesters);
  return new Response(JSON.stringify(fileData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
