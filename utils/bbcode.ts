import yabbcode from 'ya-bbcode'

const parser = new yabbcode()

export function parse(bbc: string): string {
  return parser.parse(bbc)
}
