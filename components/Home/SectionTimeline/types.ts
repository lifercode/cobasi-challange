export type TimelineItemProps = {
  noBorderLeftRadius?: boolean
  noBorderRightRadius?: boolean
  active?: boolean
  noMarginLeft?: boolean
}

export type TimelineItemType = {
  year: string
  description: string
}

export type TimelineType = {
  activeItems: (value: number) => boolean
  noBorderLeftRadius: number
  noBorderRightRadius: number
  data: TimelineItemType[]
}

export type ItemProps = {
  i: number
  timeline: TimelineType
  item: TimelineItemType
}