export async function registerUser(userData) {
    try {
        const response = await fetch('/api/user/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Failed to register user');
        }   
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export async function loginUser(userData) {
    try {
        const response = await fetch('/api/user/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Login response:', {
                status: response.status,
                statusText: response.statusText,
                data: errorData
            });
            throw new Error(`Failed to login user: ${response.status} ${response.statusText}`);
        }   
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }   
}