export default function Button({ href = null, children, classNameProp = ''}) {
  const classNames =
    `px-6 py-4 bg-purple-300 hover:bg-purple-400 active:bg-purple-500 shadow-md transition-all cursor-pointer border-0 rounded-md ${classNameProp}`
  return href ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <button className={classNames}>{children}</button>
  )
}
