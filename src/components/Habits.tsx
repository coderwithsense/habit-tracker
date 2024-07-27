import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Done } from "@mui/icons-material";

const habits = [
  {
    title: "Exercise",
    description: "Do some exercise for at least 30 minutes",
  },
  {
    title: "Read",
    description: "Read a book for at least 30 minutes",
  },
  {
    title: "Meditate",
    description: "Meditate for at least 10 minutes",
  },
  {
    title: "Journal",
    description: "Write in your journal for at least 10 minutes",
  },
  {
    title: "Wake up early",
    description: "Wake up at 5:00 AM",
  },
];

const Habits = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="container flex justify-between items-center">
        <h1 className="text-4xl">Habits</h1>
        <Button className="">Add Habit</Button>
      </div>
      <Card className="w-96">
        <CardContent>
          {habits.map((habit, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <Card className="mt-5 p-2 flex justify-between items-center">
                  <div>{habit.title}</div>
                  <div className="border-solid border-2 rounded-md p-1">
                    <Done className="w-5" />
                  </div>
                </Card>
              </div>
            );
          })}
        </CardContent>
        <CardFooter>
          <Progress value={50} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Habits;
