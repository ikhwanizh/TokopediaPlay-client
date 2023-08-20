export async function getAllVideos() {
  const response = await fetch("/api/videos");
  return await response.json();
}
