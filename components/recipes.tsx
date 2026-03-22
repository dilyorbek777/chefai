import Link from "next/link"
import CustomImage from "./customImage"
import { ArrowRight } from "lucide-react"
import { RecipesData } from "@/constants"

const Recipes = () => {
    return (
        <div className="py-16">
            <div className="max-w-[1720px] mx-auto px-16 max-[1100px]:px-12 py-15">
                <div className="flex items-center  gap-7  text-center mt-10 max-lg:flex-col">
                    <h1 className="text-syne text-5xl">Recipes</h1>
                    <span className="text-[50px] max-lg:hidden">{"/"}</span>
                    <p className="text-start text-xl max-lg:text-center">Recipes crafted by AI, personalized to <br /> perfectly align with your unique dietary needs </p>
                </div>
                <div className="mt-10 py-10 max-md:p-5  rounded-l-max flex items-center max-lg:flex-col  justify-between gap-10">
                    <div className="flex flex-col gap-10 w-1/2 max-lg:w-full">
                        {RecipesData.map((recipe, index) => (
                            <div key={index} className="flex w-full max-sm:flex-col-reverse max-sm:even:flex-col-reverse max-sm:justify-center max-sm:even:rounded-card items-center gap-10 bg-extra border-primary odd:border rounded-card even:bg-secondary even:flex-row-reverse even:justify-end px-10 py-5 even:rounded-full hover:scale-105 transition-all duration-300 justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-syne text-2xl font-semibold my-5  max-md:text-lg">{recipe.title}</h2>
                                    <Link href={`/${recipe.id}`} className="text-primary font-semibold max-sm:mx-auto">
                                        <button className="border border-primary ">View Recipe</button>
                                    </Link>
                                </div>
                                <CustomImage img={recipe.img} alt={recipe.title} className="w-[200px] h-[200px] rounded-full" />
                            </div>
                        ))}
                    </div>
                    <div className="relative overflow-hidden rounded-card w-1/2 max-lg:w-full">
                        <Link href='/recipes' className="absolute top-0 left-0 px-7 py-5  bg-white hover:bg-extra transition-all rounded-tl-card rounded-br-card z-10 tracking-wider font-semibold font-sans ">
                            Explore more recipes
                            <ArrowRight className="ml-2 inline" />
                        </Link>
                        <CustomImage img="/rec.png" alt="Demo" className="rounded-card hover:scale-105 transition-all duration-300 h-auto w-full rounded-tl-button" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recipes