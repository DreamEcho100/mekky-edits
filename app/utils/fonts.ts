import { Roboto, Montserrat_Alternates } from "next/font/google";

export const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const montserratAlternatesFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-montserrat-alternates",
});
