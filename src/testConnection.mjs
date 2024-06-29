import { connectToDatabase } from './lib/mongoose.mjs'; // Ensure the path is correct

async function testConnection() {
  try {
    const db = await connectToDatabase();
    console.log('Database connection successful:', db.connection.name);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testConnection();