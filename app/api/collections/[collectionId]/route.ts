import data from "../../../data.json";
import { NextResponse } from "next/server";

interface CollectionParams {
  params: { collectionId: string };
}

export async function GET(request: Request, context: CollectionParams) {
  const { params } = context;
  const response = data.filter(
    (collection) => params.collectionId === collection.id.toString()
  );

  return NextResponse.json(response[0]);
}
