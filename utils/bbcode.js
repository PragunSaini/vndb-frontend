import yabbcode from 'ya-bbcode'

const parser = new yabbcode()

export function parse(bbcode) {
  return parser.parse(bbcode)
}
