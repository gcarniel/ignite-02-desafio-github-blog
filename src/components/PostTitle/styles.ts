import styled from 'styled-components'

export const PostTitleContainer = styled.div`
  font-family: Nunito, sans-serif;

  background-color: ${(props) => props.theme.profile};

  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    height: 148px;
    border-radius: 6px;
  }
`

export const Links = styled.div`
  display: flex;

  justify-content: space-between;

  width: 100%;

  a {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;
    transition: border 0.3s;

    text-transform: uppercase;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const Title = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.title};
  }
`

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 0;

      svg {
        color: ${(props) => props.theme.label};
      }
    }
  }
`
