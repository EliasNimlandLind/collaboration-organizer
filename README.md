# Collaboration organizer

## About

The website supports user registration and login, using hashes. A logged in user is able to store preferences, eg., choosen color scheme.

## Built using

- JavaScript
- HTML
- CSS
- bcryptjs
- cors
- express
  - express-jwt
- jsonwebtoken
- nodemon
- postgres
- uuid
- nextui-org/alert
- react
  - react-dom
  - react-toastify

## Setup

The database table storing user data can be created by executing:

```sql
CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    username character varying(50) COLLATE pg_catalog."default",
    password_hash character varying(256) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
```

## Planned changes and features

- Translate all text to English
- Seperate backend and frontend logic into seperate repositories
- Create a Python API to integrate articial intelligence and data analysis
  - Training
  - Using
- CRUD operations on articles
- Being able to upload files such as articles written in advance
- Background replacement
- TypeScript migration
- Progressive web app features such as caching
- Offline editing similar to the one found in Google Docs
