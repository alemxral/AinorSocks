import { sql } from "@vercel/postgres";

export default async function App() {
  try {
    // Attempt to run a simple query to test the connection
    await sql`SELECT 1`;

    // If the connection is successful, show a success message on the page
    return (
      <div>
        <h1>Connection Successful!</h1>
        <p>The app has successfully connected to the database.</p>
      </div>
    );
  } catch (error) {
    console.error("Database connection error:", error);

    // If there's an error, show an error message on the page
    return (
      <div>
        <h1>Connection Failed</h1>
        <p>There was an error connecting to the database. Please try again later.</p>
      </div>
    );
  }
}
