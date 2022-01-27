import { NhostClient } from "@nhost/nhost-js";

export const nhost = new NhostClient({
    backendUrl:
        import.meta.env.VITE_NHOST_BACKEND_URL ||
        "http://localhost:9271/v1/graphql",
});
