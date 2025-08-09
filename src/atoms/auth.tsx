import { useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface UserData {
    email: string;
    id: string;
    inviteUserToken: string;
    name: string;
    profileImageURL: string;
    token: string;
}

export const userDataAtom = atomWithStorage<UserData | null>("user-data", null);

export function useIsAuthenticated(): boolean {
    const userData = useAtomValue(userDataAtom);
    return userData !== null;
}

export function useAuth(): UserData | null {
    const userData = useAtomValue(userDataAtom);
    return userData;
}