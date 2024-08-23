import dbConnect from " @/db/connectionDB";
import { User } from " @/model/user.model";

type Params = {
  id: string;
};
export async function GET(request: Request, context: { params: Params }) {
  const userId = context.params.id;
  try {
    await dbConnect();
    const users = await User.find({ _id: userId });

    return Response.json(users);
  } catch (error) {
    throw new Error("Cannot get user!");
  }
}

export async function PATCH(request: Request, context: { params: Params }) {
  const userId = context.params.id;
  const data = await request.json();
  try {
    await dbConnect();
    const user = await User.findOneAndUpdate({ _id: userId }, data, {
      new: true,
    });
    return Response.json(user);
  } catch (error) {
    throw new Error("user not updated!");
  }
}
