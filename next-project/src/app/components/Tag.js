export default function({ content = 'New', classNames = ''}){
  return <div
  className={`px-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white rounded-full ${classNames}`}
    >
    {content}
    </div>
}
