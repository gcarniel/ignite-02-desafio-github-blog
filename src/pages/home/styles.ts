import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 54rem;
  margin: -4rem auto 0;
  padding-bottom: 10rem;
`

export const Content = styled.div`
  margin-top: 4rem;
  div {
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.title};
      font-size: 1.25rem;
    }

    span + span {
      color: ${(props) => props.theme.span};
      font-size: 0.75rem;
    }
  }

  form {
    input {
      width: 100%;
      border-radius: 6px;
      background-color: ${(props) => props.theme.input};
      color: ${(props) => props.theme.text};
      border: 1px solid ${(props) => props.theme.border};
      padding: 0.5rem;
    }
  }
`
