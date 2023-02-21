import styled from 'styled-components'

export const PostsContainer = styled.section`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
export const PostWrapper = styled.div`
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;
  padding: 1rem 2rem;

  max-height: 16rem;
  overflow: hidden;
  border: 3px solid transparent;
  cursor: pointer;
  transition-timing-function: linear;
  transition: border 0.3s;

  p {
    text-align: left;
  }

  &:hover {
    border: 3px solid ${(props) => props.theme.border};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    flex: 1;
    text-transform: capitalize;
    color: ${(props) => props.theme.title};
    margin-bottom: 1rem;
  }

  span {
    font-size: 0.75rem;
  }
`
