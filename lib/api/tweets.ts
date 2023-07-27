import { API_URL, authToken } from "./config";
export const listTweets = async () => {
    const url = `${API_URL}/tweet`;
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    if (res.status === 401) {
        throw new Error('Not authorized. Please sign in');
    }
    if (res.status !== 200) {
        throw new Error('Error fetching tweets');
    }
    return await res.json();
};

export const getTweet = async (id: string) => {
    const url = `${API_URL}/tweet/${id}`;
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    if (res.status === 401) {
        throw new Error('Not authorized. Please sign in');
    }
    if (res.status !== 200) {
        throw new Error('Error fetching tweets');
    }
    return await res.json();
}