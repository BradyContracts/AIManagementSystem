export function formatTitle(title: string): string {
    return title.trim().charAt(0).toUpperCase() + title.slice(1);
}

export function validateInput(input: string): boolean {
    return input && input.trim().length > 0;
}

export function formatTags(tags: string[]): string {
    return tags.map(tag => tag.trim()).join(', ');
}