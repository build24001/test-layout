'use server';

const baseDomain = process.env.NEXT_PUBLIC_API_HOST;

interface NextFetchRequestConfig {
    revalidate?: number | false;
    tags?: string[];
}

interface NextRequestInit extends RequestInit {
    next?: NextFetchRequestConfig | undefined;
}

export async function sFetch<T>(url: string, init?: NextRequestInit): Promise<T | undefined> {
    try {
        const now = new Date().getTime();
        const res = await fetch(baseDomain + url, init);
        if (res.ok) {
            const resData = await res.json();
            console.log('请求耗时：', new Date().getTime() - now, 'ms', url);
            return resData.payload as T | undefined;
        } else if (res.status == 400) {
            const resData = await res.json();
            console.log(`请求失败：url: ${res.url}, status:${res.status}, message:${resData.message}`);
        } else {
            console.log(`请求失败：url: ${res.url}, status:${res.status}, message:${res.statusText}`);
        }
        console.log('请求耗时：', new Date().getTime() - now, 'ms', url);
        return undefined;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}
