interface MessageInterface {
  text: string;
  name: string;
}

const Message = (props: MessageInterface) => {
  const { text, name } = props

  return (
    <div className="mb-2">
      <div className="bg-gray-300">
        <div className="px-3 py-2">
          <strong>{ name }: </strong>
          { text }
        </div>
      </div>
    </div>
  )
}

export default Message;