import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type ContainerProps = {}
type ComponentProps = {
  className: string
  contents: any[]
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.contents.map(content => {
      return <p key={content.id}>{content.title}</p>
    })}
  </div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  const [contents, setContents] = useState<any[]>([])

  useEffect(() => {
    const f = async (): Promise<void> => {
      const key = {
        headers: { 'X-API-KEY': '424e3496-6cb7-4ebd-8572-49b5a148e90f' }
      }
      const res = await fetch('https://nepota.microcms.io/api/v1/blog', key)
      const repos = await res.json()
      setContents(repos.contents)
      console.log({ contents: repos.contents })
    }
    f()
  }, [])

  return <StyledComponent className="index" contents={contents} {...props} />
}

export default Container
