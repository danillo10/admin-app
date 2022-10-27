import { Label, InputLabel } from './styled'

const Component = ({
  type,
  name,
  label,
  flexGrow,
  readOnly,
  variant,
  formik
}) => {
  return (
    <>
      <InputLabel className={flexGrow ? flexGrow : null}>
        <Label>
          <label htmlFor={name}>{label}</label>
          <div>
            {formik.touched[name] && formik.errors[name]
              ? formik.errors[name]
              : null}
          </div>
        </Label>
        <input
          type={!type ? 'text' : type}
          id={name}
          name={name}
          readOnly={readOnly}
          className={variant}
          value={formik.values[name]}
          onChange={formik.handleChange}
        />
      </InputLabel>
    </>
  )
}

export default Component
