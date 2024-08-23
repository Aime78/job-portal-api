import dbConnect from " @/app/db/connectionDB";
import { Job } from " @/app/model/job.model";

export async function GET() {
  try {
    await dbConnect();
    const job = await Job.find({});

    return Response.json({
      data: job,
      message: "success",
      status: 200,
    });
    
  } catch (error) {
    console.log(error);
  }
}
