const ButtonPrimary = ({ text, className }: { text: string; className: string }) => {
    return (
        <button
            className={`inline-flex items-center 
            justify-center px-5 py-3 mr-3 text-base font-medium 
            text-center text-white rounded-full bg-primary transition 
            duration-300 hover:shadow-xl hover:shadow-primary/30  
            focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ${className}`}>
            {text}
        </button>
    )
}
export default ButtonPrimary