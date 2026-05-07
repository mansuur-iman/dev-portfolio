export const notes = [
  {
    id: 1,
    slug: "what-is-a-database",
    title: "What is a Database?",
    date: "2026-05-06",
    tags: ["Databases", "Basics"],
    description:
      "A simple explanation of what a database is and its real-world use cases.",
    content: `A database is an organized collection of data stored in a way that makes it easy to access, manage, and update.

## Features of a Database

1. **Efficiency** — can search for specific data quickly.
2. **Structured storage** — data is organized in tables, rows, and columns.
3. **Security** — access can be controlled so only authorized users can manage data.
4. **Data management** — allows users to easily add, update, and delete data as needed.

## Types of Databases

1. **Relational databases** — data is stored in tables like spreadsheets. Examples: PostgreSQL, MySQL, and SQLite.
2. **NoSQL databases** — data is stored in flexible formats like documents, key-value pairs, or graphs. Examples: MongoDB, Cassandra, and Redis.

## Application Areas

1. **Banks** — stores customer information, account details, and transaction history.
2. **E-commerce** — manages product inventory, customer orders, and payment information.
3. **Social media** — stores user profiles, posts, and interactions.
4. **Healthcare** — manages patient records, appointments, and medical history.
5. **Education** — stores student information, course materials, and grades.`,
  },
  {
    id: 2,
    slug: "what-is-a-relational-database",
    title: "What is a Relational Database?",
    date: "2026-05-07",
    tags: ["Databases", "Relational"],
    description:
      "An introduction to relational databases, their structure, and how they work.",
    content: `A relational database organizes data into tables made up of rows and columns. Each table represents a specific entity, and relationships between tables are established through keys.

## Keys

**Primary key** — a unique identifier for each row in a table. In a users table, the \`id\` column is the primary key.

**Foreign key** — a field in one table that references the primary key in another table, creating a link between them. In a posts table, \`userId\` is a foreign key pointing to \`id\` in the users table.

## Example

\`\`\`
Users table          Posts table
id | name            id | userId | content
1  | John            1  |   1    | "My first post"
2  | David           2  |   1    | "Another post"
\`\`\`

The \`userId\` in the posts table connects to \`id\` in the users table — this tells you which user wrote each post.

## Types of Relationships

1. **One-to-One** — each record in one table maps to exactly one record in another. Example: a user has one profile.
2. **One-to-Many** — one record maps to multiple records in another table. Example: a user can have many posts, but each post belongs to one user.
3. **Many-to-Many** — records on both sides can relate to multiple records on the other. A direct join isn't possible since databases don't allow storing multiple values in a single field. A **junction table** is used as a bridge instead. Example: students and courses — a student enrolls in many courses, and a course has many students.

## SQL

Relational databases use **Structured Query Language (SQL)** to manage and query data. SQL lets you insert, update, delete, and retrieve records efficiently.`,
  },
  {
    id: 3,
    slug: "postgresql-data-types",
    title: "PostgreSQL Data Types",
    date: "2026-05-06",
    tags: ["Databases", "PostgreSQL", "SQL"],
    description:
      "A breakdown of the most common PostgreSQL data types — numbers, text, booleans, dates, IDs, and JSON.",
    content: `A data type defines what kind of data a column can store and how it behaves. Data types are defined by the relational database, and each database can have slightly different ones. We will use PostgreSQL — the most common and advanced relational database.

## 1. Numbers

Used for IDs, counts, prices, and quantities.

| Type | Description |
|------|-------------|
| \`INTEGER\` | Whole numbers — e.g. 1, 2, 3 |
| \`BIGINT\` | Very large whole numbers |
| \`NUMERIC\` | Exact decimal numbers — good for money |

\`\`\`sql
price   NUMERIC,   -- e.g. 99.99
quantity INTEGER,  -- e.g. 5
user_id  BIGINT    -- e.g. 9823748237
\`\`\`

## 2. Text (Strings)

Used for names, emails, and content.

| Type | Description |
|------|-------------|
| \`TEXT\` | Unlimited length — most commonly used |
| \`VARCHAR(n)\` | Limited or controlled length |

\`\`\`sql
name    TEXT,         -- e.g. "John Doe"
email   TEXT,         -- e.g. "john@email.com"
bio     VARCHAR(280)  -- capped at 280 characters
\`\`\`

## 3. Boolean (true / false)

Used for true or false values.

\`\`\`sql
is_active  BOOLEAN,  -- true or false
is_admin   BOOLEAN   -- true or false
\`\`\`

## 4. Dates and Time

Used for timestamps and logs.

| Type | Description |
|------|-------------|
| \`DATE\` | Just the date — e.g. 2026-05-06 |
| \`TIMESTAMP\` | Date + time — e.g. 2026-05-06 14:30:00 |

\`\`\`sql
created_at  TIMESTAMP,  -- when the record was created
birthday    DATE        -- just the date, no time
\`\`\`

## 5. IDs

PostgreSQL has built-in auto-incrementing ID types so you don't have to manage unique IDs yourself.

| Type | Description |
|------|-------------|
| \`SERIAL\` | Auto-incrementing integer |
| \`BIGSERIAL\` | Larger SERIAL, supports much bigger numbers |
| \`IDENTITY\` | Modern replacement for SERIAL |
| \`UUID\` | Random unique string — better for security |

\`\`\`sql
-- SERIAL: simple auto-increment
id SERIAL PRIMARY KEY  -- 1, 2, 3, 4...

-- UUID: random, harder to guess
id UUID DEFAULT gen_random_uuid()  -- "a3f9c2d1-..."
\`\`\`

**When to use which:**
- Use \`SERIAL\` or \`IDENTITY\` for internal tables where IDs don't leave your database.
- Use \`UUID\` for anything public-facing (user profiles, API responses) — sequential IDs expose how many records you have and are easy to enumerate.

## 6. JSON

Used for structured or flexible data — when your data doesn't fit neatly into fixed columns.

\`\`\`sql
settings  JSON  -- e.g. { "theme": "dark", "notifications": true }
\`\`\`

**Tip:** PostgreSQL also has \`JSONB\` which stores JSON in a binary format — it's faster to query than plain \`JSON\` and is usually the better choice.
`,
  },
  {
    id: 4,
    slug: "sql-dml-and-ddl",
    title: "SQL: DML and DDL",
    date: "2026-05-06",
    tags: ["Databases", "SQL", "PostgreSQL"],
    description:
      "An overview of Data Manipulation Language (DML) and Data Definition Language (DDL) — the two core categories of SQL commands.",
    content: `SQL commands are grouped into categories based on what they do. Two of the most important categories are DML and DDL.

## Data Manipulation Language (DML)

Used to change data **inside** tables.

### Commands

\`\`\`sql
INSERT INTO users (name) VALUES ('iman');
UPDATE users SET name = 'mansur' WHERE id = 1;
DELETE FROM users WHERE id = 1;
\`\`\`

- **INSERT** — add / create data.
- **UPDATE** — change data.
- **DELETE** — delete / remove data.

## Data Definition Language (DDL)

Used to define or change the **structure** of the database.

### Commands

\`\`\`sql
CREATE TABLE users (
  id       IDENTITY PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name     TEXT,
  username VARCHAR(250)
);

ALTER TABLE users ADD COLUMN email TEXT;

DROP TABLE users;
\`\`\`

- **CREATE** — make tables.
- **ALTER** — change tables.
- **DROP** — delete / remove a table.

## Comparisons

Used to filter rows in a \`WHERE\` clause.

| Operator | Meaning |
|----------|---------|
| \`>\` | Greater than |
| \`<\` | Less than |
| \`>=\` | Greater or equal |
| \`<=\` | Less or equal |
| \`=\` | Equal |
| \`!=\` | Not equal |
| \`IN\` | Value matches any value in a list |

### Example

\`\`\`sql
SELECT * FROM users WHERE age > 18
  OR age < 25
  OR age <= 20
  OR age >= 18;
\`\`\``,
  },
  {
    id: 5,
    slug: "sql-logical-operators-and-aggregate-functions",
    title: "SQL: Logical Operators & Aggregate Functions",
    date: "2026-05-06",
    tags: ["Databases", "SQL", "PostgreSQL"],
    description:
      "How to combine conditions with logical operators and summarize data using aggregate functions like COUNT, AVG, SUM, MIN, and MAX.",
    content: `## Logical Operators

Logical operators are used to combine multiple conditions in a \`WHERE\` clause.

- **AND** — all conditions must be true.
- **OR** — at least one condition must be true.
- **NOT** — reverses a condition.

### Examples

\`\`\`sql
SELECT * FROM users WHERE age >= 18 AND name = 'iman';
SELECT * FROM users WHERE name = 'Abdi' OR name = 'Abdio';
SELECT * FROM users WHERE NOT is_active;
\`\`\`

## SQL Keywords

| Keyword | Usage / Meaning |
|---------|-----------------|
| \`SELECT\` | What you want |
| \`FROM\` | Where from |
| \`WHERE\` | Filter rows |

\`WHERE\` is used for filtering rows — heavily used with comparison and logical operators.

## Aggregate Functions

Aggregate functions **summarize data** — they take many rows and produce one value.

### 1. COUNT() — How many

\`\`\`sql
SELECT COUNT(*) FROM users; -- How many users exist
\`\`\`

### 2. AVG() — Average

\`\`\`sql
SELECT AVG(age) FROM users; -- What's the average age
\`\`\`

### 3. SUM() — Total

\`\`\`sql
SELECT SUM(price) FROM orders;
\`\`\`

### 4. MIN() — Minimum value

\`\`\`sql
SELECT MIN(price) FROM orders;
\`\`\`

### 5. MAX() — Maximum value

\`\`\`sql
SELECT MAX(price) FROM users.orders;
\`\`\`

## GROUP BY

Used for grouping rows — turns many rows into groups.

\`\`\`sql
SELECT age, COUNT(*) FROM users GROUP BY age;
\`\`\`

## HAVING

Used for filtering groups — always used with or comes after the \`GROUP BY\` keyword.

\`\`\`sql
SELECT age, COUNT(*) FROM users
GROUP BY age HAVING COUNT(*) > 1;
\`\`\`

## ORDER BY

Used for ordering results.

- **ASC** — order small → big.
- **DESC** — order big → small.

\`\`\`sql
SELECT * FROM users ORDER BY name ASC;
\`\`\`

## LIMIT

Cuts results — controls how many rows you get.

\`\`\`sql
SELECT * FROM users LIMIT 5;
\`\`\``,
  },
  {
    id: 6,
    slug: "sql-distinct-and-joins",
    title: "SQL: DISTINCT and JOINs",
    date: "2026-05-06",
    tags: ["Databases", "SQL", "PostgreSQL"],
    description:
      "How to remove duplicate results with DISTINCT and combine tables using INNER JOIN, LEFT JOIN, and RIGHT JOIN.",
    content: `## DISTINCT

Removes duplicates from results. Used with \`SELECT\` right after it.

\`\`\`sql
SELECT DISTINCT name FROM users; -- returns no duplicates
\`\`\`

## JOIN

Connects tables using a related column (id).

\`\`\`sql
SELECT users.name, orders.product FROM users JOIN orders
ON users.id = orders.user_id;
\`\`\`

This means: connect users and orders where user id matches orders user_id.

## Types of JOINs

### 1. INNER JOIN — Only returns matching data

\`\`\`sql
SELECT users.name, orders.product FROM users INNER JOIN orders
ON users.id = orders.user_id;
\`\`\`

Only users who have orders are returned.

### 2. LEFT JOIN — Returns all users even if they don't have orders

\`\`\`sql
SELECT users.name, orders.product FROM users LEFT JOIN orders
ON users.id = orders.user_id;
\`\`\`

Users with or without orders are returned.

### 3. RIGHT JOIN — Opposite of LEFT JOIN

Returns all right table data matched or not matched. In this case all orders with or without users. If no matching, returns \`NULL\`.

\`\`\`sql
SELECT users.name, orders.product FROM users RIGHT JOIN orders
ON users.id = orders.user_id;
\`\`\`

Returns all orders with and without a matching user.

### 4. FULL JOIN — Returns all rows from both tables

If there is a match — combines. Else returns \`NULL\`.

\`\`\`sql
SELECT users.name, orders.product FROM users FULL JOIN orders
ON users.id = orders.user_id;
\`\`\`

Returns all rows from both tables — combines if there is a match, else returns \`NULL\`.

## JOIN Rules

- For a join to work there must be a relationship between the two tables.
- The default JOIN is \`INNER JOIN\` — if you don't specify and just use \`JOIN\`, it behaves as an INNER JOIN.`,
  },
  {
    id: 7,
    slug: "sql-subquery",
    title: "SQL: Subquery",
    date: "2026-05-06",
    tags: ["Databases", "SQL", "PostgreSQL"],
    description:
      "What a subquery is, how it works, and when to use it to nest queries inside other SQL queries.",
    content: `A subquery is a query that is inside another SQL query.

## Example

Find users who have made orders:

\`\`\`sql
SELECT name FROM users WHERE id IN (SELECT user_id FROM orders);
\`\`\`

## How it Works

1. **Inner query runs first** → returns ids 1, 2, 3.
2. **Outer query runs** → \`SELECT name FROM users WHERE id IN (1, 2, 3)\`.

Final result: users with orders.`,
  },
  {
    id: 8,
    slug: "sql-alias-and-indexes",
    title: "SQL: Alias and Indexes",
    date: "2026-05-06",
    tags: ["Databases", "SQL", "PostgreSQL"],
    description:
      "How to use aliases to shorten queries, and how indexes improve database performance.",
    content: `## Alias

A temporary name you give to a table or column to make queries shorter and easier to read.

\`\`\`sql
SELECT name AS usernames FROM users;
\`\`\`

## Indexes (Performance)

A special data structure that improves the speed of data retrieval from a table in a database.

It acts as a shortcut that allows the database to find rows quickly without scanning the whole table.

### Creating an Index

\`\`\`sql
CREATE INDEX idx_tablename_columnname ON tablename (columnName);
\`\`\`

### Things to Keep in Mind

- Indexes can lead to slow \`INSERT\`, \`UPDATE\`, and \`DELETE\` operations if over used.
- You should only index columns that are frequently used.`,
  },
];
