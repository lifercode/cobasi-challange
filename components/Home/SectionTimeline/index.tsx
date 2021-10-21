import AnimatedComponents from '../../../containers/AnimatedComponents'
import Image from '../../../containers/Image'
import Wrapper from '../../../containers/Wrapper'
import { DesktopView, MobileView } from '../../../containers/Responsive'
import { timelines, mobileTimelines } from './timeline'
import { components, classes } from './animation'
import {
  ItemProps,
  TimelineType,
  TimelineItemType
} from './types'
import {
  Container,
  ImageTitle,
  TimelineContainer,
  Timeline,
  TimelineItem,
  FormContainer,
} from './styles'

const Item = ({ i, timeline, item }: ItemProps) => {
  const getTimelineItemClass = (i: number, value: number, target: number) => (
    timeline.activeItems(i+1) ? classes[value] : classes[target]
  )

  return (
    <TimelineItem key={i}
      active={timeline.activeItems(i+1)}
      noMarginLeft={i === 0}
      noBorderLeftRadius={i === timeline.noBorderLeftRadius}
      noBorderRightRadius={i === timeline.noBorderRightRadius}
    >
      {item.year}
      <span className={getTimelineItemClass(i, 2, 4)} />
      <div className={getTimelineItemClass(i, 3, 5)}>
        <p dangerouslySetInnerHTML={{__html: item.description}} />
      </div>
    </TimelineItem>
  )
}

const ViewTimeline = ({ data }: any) => (
  <TimelineContainer className={classes[1]}>
    {data.map((timeline: TimelineType, index: number) => (
      <Timeline key={index}>
        {timeline.data.map((item: TimelineItemType, i: number) => (
          <Item key={i} i={i} timeline={timeline} item={item} />
        ))}
      </Timeline>
    ))}
  </TimelineContainer>
)

const SectionTimeline = () => (
  <Container>
    <Wrapper size="lg">
      <DesktopView>
        <AnimatedComponents components={components}/>
      </DesktopView>
      <ImageTitle className={classes[0]}>
        <Image
          src="/img/section-three/component-title.svg"
          alt="component-title"
        />
      </ImageTitle>
      <DesktopView>
        <ViewTimeline data={timelines} />
      </DesktopView>
      <MobileView>
        <ViewTimeline data={mobileTimelines} />
      </MobileView>
      <FormContainer className={classes[6]}>
        <Image
          src="/img/section-three/component-form.svg"
          alt="component-form"
        />
        <div>
          <p>
            Veja desde quando você curte <b>momentos especiais</b> com a gente!
          </p>
          <fieldset>
            <input />
            <button>Confira</button>
          </fieldset>
        </div>
      </FormContainer>
    </Wrapper>
  </Container>
)

export default SectionTimeline