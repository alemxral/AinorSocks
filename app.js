import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  try {
    // Query to select all records from the CARTS table for the given user
    const { rows } = await sql`SELECT * FROM CARTS WHERE user_id = ${params.user}`;

    // Connection success message
    console.debug("Successfully connected to the database!");

    // Check if any rows are returned
    if (rows.length === 0) {
      return (
        <div>
          <h1>Your Cart</h1>
          <p>No items in the cart.</p>
          <p>Database connection is successful!</p>
        </div>
      );
    }

    // Render the cart items
    return (
      <div>
        <h1>Your Cart</h1>
        {rows.map((row) => (
          <div key={row.id}>
            <p>
              Item ID: {row.id} - Quantity: {row.quantity}
            </p>
          </div>
        ))}
        <p>Database connection is successful!</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return <div>Error fetching cart items. Please try again later.</div>;
  }
}
