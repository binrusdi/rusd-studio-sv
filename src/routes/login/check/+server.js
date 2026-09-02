import { json } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/serverSupabase';

export async function POST({ request }) {
	try {
		const body = await request.json();
		const email = (body?.email || '').trim();
		if (!email) return json({ exists: false }, { status: 400 });

		// Try admin helper methods if available
		try {
			if (supabaseAdmin.auth?.admin?.listUsers) {
				const { data, error } = await supabaseAdmin.auth.admin.listUsers({
					page: 1,
					perPage: 1
				});
				if (error) return json({ exists: false });

				const users = Array.isArray(data?.users) ? data.users : Array.isArray(data) ? data : [];
				const exists = users.some((user) => user?.email?.toLowerCase() === email.toLowerCase());
				return json({ exists });
			}
		} catch (e) {
			// fall through to table query
		}

		// Fallback: try selecting from a `users` table (if your project syncs auth to a users/profiles table)
		const { data, error } = await supabaseAdmin
			.from('users')
			.select('id')
			.ilike('email', email)
			.limit(1);

		if (error) return json({ exists: false, error: error.message }, { status: 500 });
		return json({ exists: Array.isArray(data) && data.length > 0 });
	} catch (err) {
		return json({ exists: false, error: String(err) }, { status: 500 });
	}
}
