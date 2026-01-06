import { useEffect, useState } from "react";

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        const data = await res.json();
        setAuthenticated(data.authenticated);
      } finally {
        setLoading(false);
      }
    };

    check();
  }, []);

  return { loading, authenticated };
}
