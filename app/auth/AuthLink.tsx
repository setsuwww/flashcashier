interface AuthLink {
  className?: string
  question?: string
  href: string
  link: string
}

export default function AuthLink({ className = "", question, link, href }: AuthLink) {
  return (
    <p className={`${className} font-medium text-sm text-center text-gray-500 whitespace-nowrap`}>
      {question}{' '}
      <a href={href} className="text-orange-600 hover:text-orange-800 whitespace-nowrap">
        {link}
      </a>
    </p>
  )
}
