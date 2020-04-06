import yabbcode from 'ya-bbcode'

const parser = new yabbcode()

parser.registerTag('spoiler', { type: 'replace', open: '<span class="spoilers"><span>', close: '</span></span>' })

export function parse(bbc: string): string {
  return parser.parse(bbc)
}
