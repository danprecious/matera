import { NextResponse } from "next/server";
// const multer = require('multer');
const fs = require("fs");
const path = require("path");
const os = require("os");

// import prisma from "@/app/libs/prismadb";

import { PrismaClient } from "@prisma/client";
import { GridFSBucket, MongoClient } from "mongodb";
import { gridFsStoreFile } from "../_queries/gridFsStore";

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

   await gridFsStoreFile(file);

  // const newMaterial = await prisma.material.create({
  //   data: {
  //     title,
  //     description,
  //     programme,
  //     semester,
  //     materialType,
  //     files: {
  //       create: fileIds.map((id) => ({
  //         gridFsId: id,
  //         filename: file.originalname,
  //         mimeType: file.mimetype,
  //         size: file.size,
  //       })),
  //     },
  //   },
  // });
  // const newTester = await prisma.tester.create({
  //   data: data,
  // });

  return NextResponse.json(data, { status: 200 });
}
