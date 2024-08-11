import { auth } from "@/auth";
import { prisma } from "../lib/prisma";
import { getUser } from "../lib/actions";

const motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "You are stronger than you think.",
  "Dream big. Start small. Act now.",
  "Success is a journey, not a destination.",
  "Stay positive, work hard, make it happen.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Believe in yourself and all that you are.",
  "Act as if what you do makes a difference. It does.",
  "Every day is a second chance.",
];

const DashboardPage = async () => {
  const user = await getUser();
  const [projects, tasks] = await Promise.all([
    prisma.project.findMany({ where: { userId: user.id } }),
    prisma.task.findMany({ where: { userId: user.id } }),
  ]);
  console.log(projects, tasks);
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return (
    <div className="border h-full">
      <h1>Welcome back {user.name}!</h1>
      <p>{motivationalQuotes[randomIndex]}</p>
      <h2>Projects: {projects.length}</h2>
      <h2>Tasks: {tasks.length}</h2>
    </div>
  );
};

export default DashboardPage;

/*
Welcome Message:
  Greet the user with a friendly message.
  Optionally include a motivational quote or a tip for productivity.

Recent Activity:
  Display the most recent tasks or activities.
  Include details like task names and timestamps.

Statistics:
  Show a summary of key metrics such as total tasks, completed tasks, and pending tasks.
  Use visual elements like progress bars or pie charts to make the stats engaging.

Daily Goals:
  Highlight today's tasks or goals.
  Encourage the user to focus on what needs to be done today.

*/
