const OnBoardingLayout = ({children}) =>{
    return(
        <div className="w-full grid justify-center ">
        <div className="text-center p-[2rem]">
        <h1 className="text-8xl font-extrabold text-primary">Welcome Aboard!</h1>
        <p className="p-[2rem]">Let's get you settled in</p>
            <div>
                {children}
            </div>
        </div>
    </div>
    )
}


export default OnBoardingLayout