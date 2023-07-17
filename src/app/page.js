import { Header } from "Component/Header";
import { TaskInput } from "Component/TaskInput";
import { Task } from "Component/Task";
import { Footer } from "Component/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        <Task title="Take a shower" />
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Anuwat Aeamsri" studentId="650610819" />
    </div>
  );
}
