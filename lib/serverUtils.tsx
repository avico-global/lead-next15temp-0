import { promises as fs } from "fs";
import path from "path";

const folderPath = path.join(process.cwd(), "public/json");

interface CheckAPIJsonParams {
  filePath: string;
}

interface SaveJsonParams {
  filePath: string;
  data: any; // Use a more specific type if you know the shape of the data
}

export const checkAPIJson = async ({ filePath }: CheckAPIJsonParams): Promise<any | null> => {
  try {
    const fullFilePath = path.join(folderPath, filePath);

    const fileExists = await fs.stat(fullFilePath).catch(() => false);
    if (!fileExists) {
      return null;
    }

    const response = await fs.readFile(fullFilePath, "utf-8");
    return JSON.parse(response);
  } catch (err) {
    console.error("Error reading JSON file:", err);
    return null;
  }
};

export const saveJson = async ({ filePath, data }: SaveJsonParams): Promise<boolean> => {
  try {
    const fullFilePath = path.join(folderPath, filePath);

    // Create the directory structure if it doesn't exist
    await fs.mkdir(path.dirname(fullFilePath), { recursive: true });

    // Write data to the file
    await fs.writeFile(fullFilePath, JSON.stringify(data), "utf-8");
    return true;
  } catch (err) {
    console.error("Error writing JSON file:", err);
    return false;
  }
};
