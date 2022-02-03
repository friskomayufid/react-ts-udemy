const EventComponent:React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    return event
  }

  return <div>
    <input onChange={onChange} />
  </div>
}

export default EventComponent