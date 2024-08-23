import dbConnect from " @/db/connectionDB";
import { User } from " @/model/user.model";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const user = await User.create(request.body);
    return Response.json(user);
  } catch (error) {
    throw new Error("user not created!");
  }
}

// export async function PATCH(request: Request) {
//   try {
//     await dbConnect();
//     const user = await User.findOneAndUpdate(
//       { _id: request.headers.get("id") },
//       request.body
//     );
//     return Response.json(user);
//   } catch (error) {
//     throw new Error("user not updated!");
//   }
// }

