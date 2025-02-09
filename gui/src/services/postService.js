export async function fetchPosts() {
    try {
        const response = await fetch("/api/posts/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}
