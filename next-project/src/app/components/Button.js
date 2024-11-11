export default function Button({ title, href = null }) {
  const classNames =
    'px-6 py-4 bg-purple-300 hover:bg-purple-400 active:bg-purple-500 shadow-md transition-all cursor-pointer border-0 rounded-md'
  return href ? (
    <a href={href} className={classNames}>
      {title}
    </a>
  ) : (
    <button className={classNames}>{title}</button>
  )
}
