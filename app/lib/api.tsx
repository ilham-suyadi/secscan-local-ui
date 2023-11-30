import { resolve } from "path";

const BASE_URL = 'http://127.0.0.1:8000'

async function fetchData<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`,{ 
        cache: 'no-store',
        ...options
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${response.statusText}`)
    }

        // await wait(2000)
    return data
  }
  
  export async function getGitlab() {
    return fetchData<Gitlab[]>('/gitlab');
  }

  export async function deleteGitlab(id: string) {
    return fetchData(`/gitlab/${id}`, {
      method: 'DELETE'
    });
  }

export async function postGitlab(name: string, url: string, token: string){
    const response = await fetch(`${BASE_URL}/gitlab`,{
        method: 'POST',
        body: JSON.stringify({name: name, token: token, url: url}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}


// export async function wait(ms:number){
//   return new Promise(resolve => setTimeout(resolve, ms))
// }