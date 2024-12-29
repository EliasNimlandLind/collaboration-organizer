import sql from './db.js';

export async function insertUser(username, passwordHash) {
	const users = await sql`
    insert into users
    (username, password_hash)
    values
      (${username}, ${passwordHash})
    returning username, password_hash
  `;
}

export async function IsUsernameExisting(username) {
	const users = await sql`
        SELECT
        *
        FROM public.users
    `;

	const usernameExists = users.some((user) => user.username === username);
	return usernameExists;
}
