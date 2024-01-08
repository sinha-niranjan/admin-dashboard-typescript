import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600));
  const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
  const seconds = String(timeInSeconds % 60);

  return `${hours.padStart(2, "0")}:${minutes.padStart(
    2,
    "0"
  )}::${seconds.padStart(2, "0")}`;
};

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalID: number;
    if (running) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [running]);

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1> Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setRunning((prev) => !prev)}>
              {running ? "Stop" : "Start"}
            </button>
            <button onClick={() => { setRunning((prev) => !prev);  setTime(0)}}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StopWatch;
