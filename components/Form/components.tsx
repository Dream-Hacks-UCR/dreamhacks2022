export const Input = ({ type, label, variable, register, required, errors }) => (
  <div>
    <label className='text-lg font-semibold'>
      {label}
      {!required && <span className='text-main-100'> (optional)</span>}
    </label>
    <input
      type={type}
      {...register(variable, {required})}
      className={
        'w-full px-3 py-[0.5rem] text-lg border-2 rounded-md bg-main-400 text-primary focus:border-main-100 focus:outline-none file:mr-3 file:rounded-lg file:border-0 file:font-semibold file:bg-primary hover:file:bg-secondary file:text-main-700 '
        + (errors[variable] ? 'border-red-500' : 'border-main-100')
      }
    />
  </div>
)

export const TextArea = ({ label, variable, register, required, errors }) => (
  <div>
    <label className='text-lg font-semibold'>
      {label}
      {!required && <span className='text-main-100'> (optional)</span>}
    </label>
    <textarea
      {...register(variable, {required})}
      className={
        'w-full px-3 py-[0.5rem] text-lg border-2 rounded-md bg-main-400 text-primary focus:border-main-100 focus:outline-none '
        + (errors[variable] ? 'border-red-500' : 'border-main-100')
      }
    />
  </div>
)

export const Select = ({ label, variable, register, required, options, errors }) => (
  <div>
    <label className='text-lg font-semibold'>{label}</label>
    <select
      {...register(variable, {required})}
      className={
        'w-full px-3 py-[0.5rem] text-lg border-2 rounded-md bg-main-400 text-primary focus:border-main-100 focus:outline-none overflow-ellipsis '
        + (errors[variable] ? 'border-red-500' : 'border-main-100')
      }
      
    >
      <option 
        value=''
        disabled
        selected
        hidden
      >
        Select your {label.toLowerCase()}...
      </option>
      {
        options.map((option) =>
          <option value={option}>{option}</option>
        )
      }
    </select>
  </div>
)

export const Radio = ({ register, label, variable, required, options, errors }) => (
  <div>
    <legend className='text-lg font-semibold'>{label}</legend>
    <div className='flex flex-col gap-1 pl-2 text-lg'>
      {
        options.map((option) =>
          <div id={label} className='flex items-center gap-2'>
            <input
              type='radio'
              id={variable.toString() + option.toString()}
              value={option}
              {...register(variable, {required})}
              className={
                'checked:bg-accent hover:checked:bg-accent cursor-pointer ' + (errors[variable] && 'border-red-500')
              }
            />
            <label
              htmlFor={variable.toString() + option.toString()}
              className={
                'checked:bg-accent hover:checked:bg-accent cursor-pointer ' + (errors[variable] && 'text-red-500')
              }
            >
              {option}
            </label>
          </div>
        )
      }
    </div>
  </div>
)