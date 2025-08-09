import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface UserData {
    email: string;
    id: string;
    inviteUserToken: string;
    name: string;
    profileImageURL: string;
    token: string;
}

export const userDataAtom = atomWithStorage<UserData | null>("userData", null);

export const isAuth = (): boolean => {
    const userData = JSON.parse(localStorage.getItem("userData") || "null");
    return userData !== null;
};