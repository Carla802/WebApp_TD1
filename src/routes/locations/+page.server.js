import {redirect} from "@sveltejs/kit";
import { invalidate } from '$app/navigation';

/** @type {import('./$types').PageServerLoad} */

export async function load({ locals }) {
    const user = locals.user;
    const body = await fetch('http://localhost:3000/locations/',{
        method:'GET',
        headers:{
            'Authorization': `Bearer ${locals.user}`
        }
    }).then(res => res.json());
    const tokens = user.split(".");
    const role = JSON.parse(atob(tokens[1])).role;
    return {body, locals, role};
}

/** @type {import('./$types').Actions} */
export const actions = {
    delete: async ({locals, request}) => {
        const form = await request.formData();
        const id = form.get('id');
        const body = await fetch(`https://web-app-back.onrender.com/locations/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${locals.user}`
            }
        }).then(res => res.json());

        throw redirect(307, '/locations');
    }
};



