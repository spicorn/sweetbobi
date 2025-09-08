const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center space-y-2 text-gray-500">
      <span className="text-sm font-medium">Scroll Down</span>
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  )
}

export default ScrollIndicator
