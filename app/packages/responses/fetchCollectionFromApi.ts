import { Collection } from "../interfaces/collection";

export async function fetchCollectionFromApi(
  collectionId: number
): Promise<Collection | null> {
  try {
    const response = await fetch(`/api/collections/${collectionId}`, {
      headers: {
        accept: "application/json",
        method: "GET",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching collection with ID ${collectionId}: ${response.statusText}`
      );
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
