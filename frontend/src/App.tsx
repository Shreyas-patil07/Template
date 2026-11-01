import { useEffect, useState } from "react";
import { fetchHealth } from "./lib/api";
import "./App.css";

type ApiStatus = "checking" | "online" | "offline";

function App() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetchHealth(controller.signal)
      .then((response) => {
        setApiStatus(response.status === "ok" ? "online" : "offline");
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setApiStatus("offline");
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="app-shell">
      <section className="starter-card">
        <p className="eyebrow">FULL-STACK STARTER</p>
        <h1>Project Starter</h1>
        <p className="intro">
          A clean foundation for building with React, TypeScript, Vite, and
          FastAPI.
        </p>

        <div className="status-row" role="status" aria-live="polite">
          <span className={`status-dot status-${apiStatus}`} />
          <span>
            Backend API:{" "}
            <strong>
              {apiStatus === "checking"
                ? "Checking connection…"
                : apiStatus === "online"
                  ? "Connected"
                  : "Unavailable"}
            </strong>
          </span>
        </div>

        <div className="starter-links">
          <a href="http://localhost:8000/docs" target="_blank" rel="noreferrer">
            API documentation
          </a>
          <a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
            Vite guide
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
