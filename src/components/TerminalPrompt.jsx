import Image from 'next/image'

export default function TerminalPrompt({ path = '~', size = 'md' }) {
  const sizeStyles = {
    sm: 'h-6 text-xs min-w-[8rem] gap-x-2',
    md: 'h-8 text-sm min-w-[10rem] gap-x-2',
    lg: 'h-10 text-base min-w-[12rem] gap-x-3',
    xl: 'h-12 text-lg min-w-[14rem] gap-x-3',
    '2xl': 'h-14 text-xl min-w-[16rem] gap-x-4',
    '3xl': 'h-16 text-2xl min-w-[20rem] gap-x-4',
    '4xl': 'h-12 text-lg min-w-[14rem] gap-x-2 sm:h-16 sm:text-xl sm:min-w-[20rem] sm:gap-x-4 md:h-20 md:text-3xl md:min-w-[24rem] md:gap-x-4',
    '5xl': 'h-12 text-lg min-w-[14rem] gap-x-2 sm:h-16 sm:text-xl sm:min-w-[20rem] sm:gap-x-4 md:h-24 md:text-4xl md:min-w-[24rem] md:gap-x-5',
    '6xl': 'h-12 text-lg min-w-[14rem] gap-x-2 sm:h-16 sm:text-xl sm:min-w-[20rem] sm:gap-x-4 md:h-28 md:text-5xl md:min-w-[24rem] md:gap-x-5',
  }

  const textPadding = {
    sm: 'pr-2',
    md: 'pr-4', 
    lg: 'pr-6',
    xl: 'pr-8',
    '2xl': 'pr-10',
    '3xl': 'pr-12',
    '4xl': 'pr-6 sm:pr-10 md:pr-16',
    '5xl': 'pr-6 sm:pr-10 md:pr-16', 
    '6xl': 'pr-6 sm:pr-10 md:pr-20',
  }

  const logoSize = {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 36,
    '5xl': 40,
    '6xl': 44,
  }

  // Responsive logo sizing - only for larger sizes that need it
  const logoClasses = {
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    '4xl': 'w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9',
    '5xl': 'w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10',
    '6xl': 'w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11',
  }

  const logoContainerWidth = {
    sm: 'w-6',
    md: 'w-8',
    lg: 'w-10',
    xl: 'w-12',
    '2xl': 'w-14',
    '3xl': 'w-16',
    '4xl': 'w-20',
    '5xl': 'w-24',
    '6xl': 'w-28',
  }

  const hasResponsiveLogo = logoClasses[size] !== ''

  return (
    <div className={`inline-flex items-center bg-gray-300 font-mono font-semibold ${sizeStyles[size]} rounded-r-full mt-4 ml-[-1rem] sm:ml-[-2rem] md:ml-0 max-w-full overflow-hidden transition-all`}>
      {/* Left strip with logo */}
      <div className="flex items-center h-full shrink-0">
        <div className="h-full w-2 bg-gray-700" />
        <div className="h-full w-3 bg-gray-500" />
        <div className={`h-full ${logoContainerWidth[size]} bg-gray-400 flex items-center justify-center px-1`}>
          {hasResponsiveLogo ? (
            <div className={`relative ${logoClasses[size]}`}>
              <Image
                src="/images/logo_black_750.png"
                alt="Pedro's Logo"
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <Image
              src="/images/logo_black_750.png"
              alt="Pedro's Logo"
              width={logoSize[size]}
              height={logoSize[size]}
              className="object-contain"
            />
          )}
        </div>
      </div>

      {/* Path text */}
      <span className={`text-black truncate ${textPadding[size]}`}>{path}</span>
    </div>
  )
}