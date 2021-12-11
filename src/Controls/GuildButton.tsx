import styled from 'styled-components'

type ComponentProps = {
  className?: string,
  children: any,
  disabled: boolean,
  onClick: Function,
  test?: string
}

type ButtonProps = {
  onClick: any
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
`
function GuildButton({ className, children, disabled, onClick, test }: ComponentProps) {
  return (
    <Button
      className={className}
      onClick={onClick}
      data-testId={test}
      disabled={disabled}
      type="button"
    >
      {children}
    </Button>
  )
}

export default GuildButton