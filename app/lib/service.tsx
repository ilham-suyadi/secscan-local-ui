interface Post{
    userid: number,
    id: number,
    title: string,
    body: string,
    name: string,
}

interface Comment{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface Project{
    id: number,
    name: string,
    description: string,
    name_space: string,
    server: string,
    star: number,
    visiblitity: string,
    languages: any,
    // test:any,
}

interface Props {
    query: string;
}

interface Token {
    id: string;
    token_name: string;
    created: string;
    expired: string;
    token: string;
}

interface Gitlab{
    id: string,
    name: string,
    url: string,
    created_at: string,
    status: string,
    error: string,
}