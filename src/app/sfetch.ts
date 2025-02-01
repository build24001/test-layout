'use server';

interface NextFetchRequestConfig {
    revalidate?: number | false;
    tags?: string[];
}

interface NextRequestInit extends RequestInit {
    next?: NextFetchRequestConfig | undefined;
}

export async function sFetch<T>(url: string, init?: NextRequestInit): Promise<T | undefined> {
    try {
        const res = await fetch(url, init);
        if (res.ok) {
           return await res.json();
        }
        return undefined;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}
