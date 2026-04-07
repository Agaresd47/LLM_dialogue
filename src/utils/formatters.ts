/**
 * Format a date string in a human-readable format
 * @param dateString ISO date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

const BASE_PATH = "/LLM_dialogue";

export function withBasePath(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  if (path.startsWith(BASE_PATH)) return path;
  if (!path.startsWith("/")) return `${BASE_PATH}/${path}`;
  return `${BASE_PATH}${path}`;
}
