import { StaticImageData } from "next/image";

type PortfolioProjectsType = {
    company: string;
    year: string;
    title: string,
    results: { title: string }[]
    ,
    link: string,
    image: StaticImageData | string,
}

export default PortfolioProjectsType;
