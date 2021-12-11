type ComponentProps = {
  className?: string,
  disabled?: boolean,
  name: string,
  onChange: any,
  placeholder?: string,
  test?: string,
  value: string
}

function GuildInput({
  className, disabled, name, onChange, placeholder, test, value
}: ComponentProps) {
  return (
    <input
      className={className}
      data-testid={test}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  )
}

export default GuildInput