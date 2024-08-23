import dbConnect from " @/db/connectionDB";
import { Job } from " @/model/job.model";

export async function GET() {
  try {
    await dbConnect();
    const jobs = await Job.find({});
    return Response.json(jobs);
  } catch (error) {
    throw new Error("Cannot get jobs!");
  }
}
