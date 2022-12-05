import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const {
        POSTGRES_PASSWORD,
        POSTGRES_USER,
        POSTGRES_PORT,
        POSTGRES_DB,
        DB_HOST
      } = process.env;

      const dataSource = new DataSource({
        type: 'postgres',
        host: DB_HOST,
        port: parseInt(POSTGRES_PORT),
        username: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DB,
        entities: [
          // __dirname + '/../**/*.entity{.ts,.js}',
          'dist/**/*.entity{.ts,.js}',
        ],
        migrations: [
        //     __dirname + '/../**/*.entity{.ts,.js}',
          'dist/**/*.entity{.ts,.js}',
        ],
        migrationsTableName: "custom_migration_table",
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];