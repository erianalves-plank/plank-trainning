import { DataSource } from "typeorm";
import { Rocket } from "../model/rocket";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST || "localhost",
  port: 5432,
  username: process.env.TYPEORM_USERNAME || "postgres",
  password: process.env.TYPEORM_PASSWORD || "postgres",
  database: process.env.TYPEORM_DATABASE || "test",
  entities: [Rocket],
  migrations: ["./database/migrations/*.ts"],
  synchronize: true,
  logging: false,
});
export default AppDataSource;