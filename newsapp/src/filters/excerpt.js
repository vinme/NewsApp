
export default function uppercase (input) {
    return input.length > 60
    ? input.slice(0, 60) + '...'
    : input
}
            