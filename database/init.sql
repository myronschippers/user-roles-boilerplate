CREATE TABLE "roles" (
	"id" serial primary key,
	"label" varchar(60) not null,
	"access_level" int not null
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE,
  "password" VARCHAR (1000),
  "email" VARCHAR(80) UNIQUE NOT NULL,
  "first_name" VARCHAR(100) NOT NULL,
  "last_name" VARCHAR(100) NOT NULL,
  "temp_reg_id" VARCHAR(500),
  "role_id" INT REFERENCES "roles"
);
