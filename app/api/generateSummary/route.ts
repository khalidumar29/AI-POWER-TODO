import openai from "@/openAi";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  // comunicate with openAi Api
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `when responding welcome the user always as Mr.Khalid and say welcome to the AI Power Todo App!
        Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi There, provide a summary of the following todos. Count how many todos are in each category such as to do, in progress and done. then tell the user to have productive day! Here's the Data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  console.log(response);
  return NextResponse.json(response.choices[0].message);
}
