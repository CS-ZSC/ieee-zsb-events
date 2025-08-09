// src/api/team.ts
import { API_LINK } from ".";
import { getDefaultStore } from "jotai";
import { userDataAtom } from "@/atoms/auth";

export interface CreateTeamData {
  name: string;
  competitionId: number;
}

export async function createTeam(data: CreateTeamData) {
  const store = getDefaultStore();
  const userData = store.get(userDataAtom);

  const response = await fetch(`${API_LINK}/Team/create-new-team`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(userData?.token ? { Authorization: `Bearer ${userData.token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (response.status === 400) {
    const errorData = await response.json();
    return { success: false, message: errorData.message };
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Team creation failed:", errorText);
    return { success: false, message: errorText || "Unknown error" };
  }

  return await response.json();
}
