import {FormEvent, useState} from 'react';
import supabase from "../utils/supabase.ts";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('customer');
    const [error, setError] = useState(null);

    const handleSubmit = async (event:FormEvent) => {
        event.preventDefault();

        try {
            const hashedPassword = await hashPassword(password);

            const req = {
                email,
                password_hash: hashedPassword,
                role,
                name,
                phone_number: phoneNumber,
                address,
            }
            console.log(req)
            const { error } = await supabase
                .from('users')
                .insert({ id: 1, name: 'Denmark' })

            if (error) throw error;

            console.log('User registered successfully:', data);
            setError(null);
            // setEmail('');
            // setPassword('');
            // setName('');
            // setPhoneNumber('');
            // setAddress('');
            // setRole('customer');
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error((err as Error).message);
            } else {
                console.error('An unknown error occurred');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />

            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <br />

            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br />

            <label>Phone Number:</label>
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />

            <label>Address:</label>
            <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />

            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="customer">Customer</option>
                <option value="vendor">Vendor</option>
                <option value="admin">Admin</option>
            </select>
            <br />

            <button type="submit">Register</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

async function hashPassword(password:string) {
    return await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password)).then(hash => btoa(String.fromCharCode(...new Uint8Array(hash))));
}

export default SignUp;
