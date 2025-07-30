export function parseCommand(input: string): string {
  switch (input.trim()) {
    case "help":
      return "Available commands: about, projects, contact, resume, clear";
    case "about":
      return "Hi! I'm ...";
    case "projects":
      return "1. 2. 3.";
    case "clear":
      return "";
    default:
      return `Command not found: ${input}`;
  }
}
