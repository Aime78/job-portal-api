import dbConnect from " @/db/connectionDB";
import { Job } from " @/model/job.model";

export async function GET() {
  try {
    await dbConnect();

    return Response.json({
      data: [],
      message: "success",
      status: 200,
    });
  } catch (error) {
    throw new Error("something went wrong!");
  }
}
