interface Task {
  id: number;
  title: string;
  completed: boolean;
}

async function page() {
  const response = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const tasks: Task[] = await response.json();

  console.log("tasks:", tasks);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default page;
