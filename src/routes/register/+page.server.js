import {fail, redirect} from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const user = {
			username: data.get('username'),
			password: data.get('password')
		};

		const body = await fetch('https://web-app-back.onrender.com/users/register',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(user)
		}).then(res => res.json());
		if(body.err){
			return fail(body.status,body);
		}
		throw redirect(307, '/');
	}
};
