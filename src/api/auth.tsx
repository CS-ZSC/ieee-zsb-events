import { toaster } from "@/components/ui/toaster";
import { API_LINK } from ".";

export interface RegisterData {
    Name: string;
    Email: string;
    PhoneNumber: string;
    NationalId: string;
    Password: string;
    IDFrontImage: File;
    IDBackImage: File;
    ProfileImage: File;
};
export interface AuthReturnData {
    email: string;
    id: string;
    inviteUserToken: string;
    message: string;
    name: string;
    profileImageURL: string;
    success: boolean;
    token: string;
}

export interface AuthErrorData {
    message: string;
    success: boolean;
}

export async function registerUser(data: RegisterData): Promise<AuthReturnData | AuthErrorData> {
    const formData = new FormData();

    // Append text fields
    formData.append('Name', data.Name);
    formData.append('Email', data.Email);
    formData.append('PhoneNumber', data.PhoneNumber);
    formData.append('NationalId', data.NationalId);
    formData.append('Password', data.Password);

    // Append binary files directly
    formData.append('IDFrontImage', data.IDFrontImage);
    formData.append('IDBackImage', data.IDBackImage);
    formData.append('ProfileImage', data.ProfileImage);


    console.log("Form data being sent:", formData)
    const response = await fetch(`${API_LINK}/Account/register`, {
        method: "POST",
        body: formData,
        // Let browser handle content-type and boundaries automatically
    });

    console.log("Registration response:", response);
    if (response.status === 400) {
        const errorData: { message: string } = await response.json();
        return { success: false, message: errorData.message };
    }
    if (!response.ok) {
        console.log(response);
        return { success: false, message: "An error occurred during registration. Please try again." };
    }

    const result: AuthReturnData = await response.json<AuthReturnData>();
    console.log("Registration result:", result);

    return result;
}

export interface LoginData {
    email: string;
    password: string;
}


export async function loginUser(data: LoginData): Promise<AuthReturnData | AuthErrorData> {
    const response = await fetch(`${API_LINK}/Account/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    console.log("Login response:", response);
    if (response.status === 400) {
        const errorData: { message: string } = await response.json();
        return { success: false, message: errorData.message };
    }
    if (!response.ok) {
        return { success: false, message: "An error occurred during login. Please try again." };
    }

    const result = await response.json();
    console.log("Login result:", result);

    return result;
}